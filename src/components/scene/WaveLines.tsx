"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { DEFAULT_PRESET, PRESETS, type ScenePreset } from "./presets";

type Props = { reduced: boolean; coarse: boolean };

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  uniform float uFreq;
  uniform vec2 uMouse;
  uniform float uAspect;
  uniform float uMouseStrength;
  varying float vFade;
  varying float vBump;

  void main() {
    vec3 p = position;
    float t = uTime;
    float f = uFreq;
    float z = sin(p.x * f + t) * cos(p.y * f * 0.8 - t * 0.7);
    z += 0.5 * sin((p.x * 0.7 + p.y * 1.3) * f * 1.9 + t * 1.3);
    z += 0.25 * sin((p.x * 1.9 - p.y * 0.6) * f * 3.1 - t * 0.9);
    p.z = z * uAmp;

    // Deformación hacia el cursor, medida en espacio de pantalla
    vec4 clip = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    vec2 ndc = clip.xy / clip.w;
    ndc.x *= uAspect;
    vec2 m = uMouse;
    m.x *= uAspect;
    float d = distance(ndc, m);
    float bump = exp(-d * d * 7.0) * uMouseStrength;
    p.z += bump;
    vBump = bump;

    // Las filas lejanas se desvanecen
    vFade = smoothstep(1.0, -0.35, position.y / 6.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;
  varying float vBump;
  void main() {
    float a = uOpacity * vFade * (0.55 + 0.45 * vFade) + vBump * 0.6;
    gl_FragColor = vec4(uColor, clamp(a, 0.0, 1.0));
  }
`;

function buildGeometry(rows: number, cols: number, width: number, height: number) {
  const positions = new Float32Array(rows * cols * 3);
  const indices: number[] = [];
  let k = 0;
  for (let j = 0; j < rows; j++) {
    const y = -height / 2 + (height * j) / (rows - 1);
    for (let i = 0; i < cols; i++) {
      const x = -width / 2 + (width * i) / (cols - 1);
      positions[k++] = x;
      positions[k++] = y;
      positions[k++] = 0;
      if (i < cols - 1) {
        const idx = j * cols + i;
        indices.push(idx, idx + 1);
      }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setIndex(indices);
  return geo;
}

function readAccent(): THREE.Color {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  try {
    return new THREE.Color(raw || "#1d3fff");
  } catch {
    return new THREE.Color("#1d3fff");
  }
}

export function WaveLines({ reduced, coarse }: Props) {
  const mesh = useRef<THREE.LineSegments>(null);
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { size, invalidate } = useThree();

  const rows = coarse ? 34 : 56;
  const cols = coarse ? 110 : 180;
  const geometry = useMemo(() => buildGeometry(rows, cols, 18, 12), [rows, cols]);
  useEffect(() => () => geometry.dispose(), [geometry]);

  // Valores iniciales; después del montaje solo se tocan vía mat.current.uniforms
  const initialUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: DEFAULT_PRESET.amp },
      uFreq: { value: DEFAULT_PRESET.freq },
      uMouse: { value: new THREE.Vector2(0, -10) },
      uAspect: { value: 1 },
      uMouseStrength: { value: coarse ? 0 : DEFAULT_PRESET.mouse },
      uColor: { value: new THREE.Color("#1d3fff") },
      uOpacity: { value: DEFAULT_PRESET.opacity },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // Estado que se interpola cada frame
  const state = useRef({
    target: { ...DEFAULT_PRESET } as ScenePreset,
    cur: { ...DEFAULT_PRESET } as ScenePreset,
    mouse: new THREE.Vector2(0, -10),
    mouseTarget: new THREE.Vector2(0, -10),
    color: new THREE.Color("#1d3fff"),
    colorTarget: new THREE.Color("#1d3fff"),
    time: 0,
  });

  // Color de acento: lee la variable CSS y reacciona al cambio de tema
  useEffect(() => {
    const apply = () => {
      state.current.colorTarget.copy(readAccent());
      if (reduced) state.current.color.copy(state.current.colorTarget);
      invalidate();
    };
    apply();
    const obs = new MutationObserver(apply);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, [invalidate, reduced]);

  // Sección visible → preset objetivo
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
    if (!els.length) return;
    const ratios = new Map<Element, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) ratios.set(e.target, e.isIntersecting ? e.intersectionRatio : 0);
        let best: Element | null = null;
        let bestR = 0;
        ratios.forEach((r, el) => {
          if (r > bestR) {
            bestR = r;
            best = el;
          }
        });
        if (best) {
          const key = (best as HTMLElement).dataset.scene ?? "hero";
          state.current.target = { ...(PRESETS[key] ?? DEFAULT_PRESET) };
          if (reduced) {
            state.current.cur = { ...state.current.target };
            invalidate();
          }
        }
      },
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [reduced, invalidate]);

  // Cursor en coordenadas normalizadas
  useEffect(() => {
    if (coarse || reduced) return;
    const onMove = (e: PointerEvent) => {
      state.current.mouseTarget.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      );
    };
    const onLeave = () => state.current.mouseTarget.set(0, -10);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [coarse, reduced]);

  useFrame((_, delta) => {
    const s = state.current;
    const dt = Math.min(delta, 0.05);
    const lambda = reduced ? 1000 : 3.2;
    const d = THREE.MathUtils.damp;

    const keys = Object.keys(s.target) as (keyof ScenePreset)[];
    for (const k of keys) s.cur[k] = d(s.cur[k], s.target[k], lambda, dt);

    if (!reduced) s.time += dt * s.cur.speed;
    s.mouse.x = d(s.mouse.x, s.mouseTarget.x, 6, dt);
    s.mouse.y = d(s.mouse.y, s.mouseTarget.y, 6, dt);
    s.color.lerp(s.colorTarget, Math.min(1, dt * 4));

    const u = mat.current?.uniforms;
    if (u) {
      u.uTime.value = s.time;
      u.uAmp.value = s.cur.amp;
      u.uFreq.value = s.cur.freq;
      u.uOpacity.value = s.cur.opacity;
      u.uMouseStrength.value = coarse ? 0 : s.cur.mouse;
      u.uMouse.value.copy(s.mouse);
      u.uAspect.value = size.width / size.height;
      u.uColor.value.copy(s.color);
    }

    if (mesh.current) {
      mesh.current.rotation.x = s.cur.tilt;
      mesh.current.position.y = s.cur.y;
    }
  });

  return (
    <lineSegments ref={mesh} geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={mat}
        vertexShader={VERT}
        fragmentShader={FRAG}
        uniforms={initialUniforms}
        transparent
        depthWrite={false}
      />
    </lineSegments>
  );
}
