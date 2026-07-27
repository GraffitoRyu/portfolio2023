export const spacingTokens = {
  column: 20,
  page: 80,
  section: {
    mobile: {
      top: 80,
      right: 80,
      bottom: 80,
      left: 80,
    },
    desktop: {
      top: 240,
      right: 80,
      bottom: 360,
      left: 80,
    },
  },
} as const;

export const sizeTokens = {
  common: {
    remStd: 25.6,
    padding: spacingTokens.page,
    section: {
      mobile: spacingTokens.section.mobile,
      pc: spacingTokens.section.desktop,
    },
  },
  cursor: { basic: 8, clickable: 80, text: 64 },
  icon: {
    mobile: 24,
    w768_landscape: 20,
    w768: 12,
    w1024: 20,
    w1280: 20,
    w1440: 16,
  },
  btn: {
    mobile: 80,
    w768_landscape: 56,
    w768: 48,
    w1024: 64,
    w1280: 56,
    w1440: 48,
  },
} as const;

export type SpacingTokens = typeof spacingTokens;
export type SizeTokens = typeof sizeTokens;
