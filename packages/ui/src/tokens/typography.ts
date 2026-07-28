export const typography = {
  family: {
    sans: "var(--sans-kr)",
    serifKorean: "var(--serif-kr)",
    serifDisplay: "var(--serif-dm)",
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeight: {
    tight: "1em",
    title: "1.5em",
    body: "1.6em",
    loose: "1.8em",
  },
  letterSpacing: {
    reset: 0,
    subtle: "-0.01em",
    title: "-0.02em",
    global: "-0.05em",
  },
} as const;
