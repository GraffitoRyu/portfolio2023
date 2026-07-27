export const breakpointTokens = {
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

export const mediaQueryTokens = {
  min: {
    compact: minWidth(breakpointTokens.layout.compact),
    fluidRoot: minWidth(breakpointTokens.layout.fluidRoot),
    grid: minWidth(breakpointTokens.layout.grid),
    tablet: minWidth(breakpointTokens.layout.tablet),
    desktop: minWidth(breakpointTokens.layout.desktop),
    wide: minWidth(breakpointTokens.layout.wide),
    large: minWidth(breakpointTokens.layout.large),
    extraLarge: minWidth(breakpointTokens.layout.extraLarge),
  },
  max: {
    tablet: maxWidth(breakpointTokens.layout.tablet),
    desktop: maxWidth(breakpointTokens.layout.desktop),
  },
} as const;

export type BreakpointTokens = typeof breakpointTokens;
export type MediaQueryTokens = typeof mediaQueryTokens;
