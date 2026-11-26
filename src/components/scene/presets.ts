/** Parámetros de la onda por sección. La escena interpola entre ellos. */
export type ScenePreset = {
  amp: number; // amplitud de la onda
  freq: number; // frecuencia espacial
  speed: number; // velocidad temporal
  tilt: number; // rotación X del plano (radianes)
  y: number; // desplazamiento vertical
  opacity: number;
  mouse: number; // fuerza de la deformación por cursor
};

export const PRESETS: Record<string, ScenePreset> = {
  hero: { amp: 1.1, freq: 0.45, speed: 0.35, tilt: -1.05, y: -1.2, opacity: 0.85, mouse: 0.9 },
  about: { amp: 0.45, freq: 0.7, speed: 0.2, tilt: -1.25, y: -1.7, opacity: 0.35, mouse: 0.5 },
  timeline: { amp: 0.25, freq: 1.1, speed: 0.15, tilt: -1.35, y: -1.9, opacity: 0.24, mouse: 0.4 },
  contact: { amp: 0.12, freq: 0.25, speed: 0.4, tilt: -1.5, y: -0.9, opacity: 0.6, mouse: 1.1 },
};

export const DEFAULT_PRESET = PRESETS.hero;
