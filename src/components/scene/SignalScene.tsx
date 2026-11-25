"use client";

import { Canvas } from "@react-three/fiber";
import { WaveLines } from "./WaveLines";

type Props = { reduced: boolean; coarse: boolean };

export function SignalScene({ reduced, coarse }: Props) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={reduced ? "demand" : "always"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.6, 6.5], fov: 42, near: 0.1, far: 50 }}
      onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      style={{ background: "transparent" }}
    >
      <WaveLines reduced={reduced} coarse={coarse} />
    </Canvas>
  );
}
