export const motionTokens = {
  easing: {
    quad: " cubic-bezier(0.5, 1, 0.89, 1)",
    quart: "cubic-bezier(0.25, 1, 0.5, 1)",
    expo: "cubic-bezier(0.16, 1, 0.3, 1)",
    back: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  duration: {
    common: {
      initComplete: 1000,
      initFade: 1000,
      coverUp: 1200,
      loadComplete: 400,
    },
    header: 800,
    color: 200,
    visual: {
      upper: 800,
      lower: 800,
    },
    career: 800,
    tooltip: 400,
    detail: {
      sheetSlide: 800,
    },
  },
} as const;

export type MotionTokens = typeof motionTokens;
