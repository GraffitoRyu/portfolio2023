export const breakpoints = {
  layout: {
    compact: 560,
    fluidRoot: 580,
    grid: 640,
    tablet: 768,
    desktop: 1024,
    wide: 1280,
    large: 1440,
    extraLarge: 1680,
  },
  viewportMode: {
    tablet: 768,
    desktop: 1280,
  },
} as const;

const minWidth = (value: number) => `(min-width: ${value}px)`;
const maxWidth = (value: number) => `(max-width: ${value}px)`;

export const media = {
  min: {
    compact: minWidth(breakpoints.layout.compact),
    fluidRoot: minWidth(breakpoints.layout.fluidRoot),
    grid: minWidth(breakpoints.layout.grid),
    tablet: minWidth(breakpoints.layout.tablet),
    desktop: minWidth(breakpoints.layout.desktop),
    wide: minWidth(breakpoints.layout.wide),
    large: minWidth(breakpoints.layout.large),
    extraLarge: minWidth(breakpoints.layout.extraLarge),
  },
  max: {
    tablet: maxWidth(breakpoints.layout.tablet),
    desktop: maxWidth(breakpoints.layout.desktop),
  },
} as const;
