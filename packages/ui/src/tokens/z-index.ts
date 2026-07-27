export const zIndexTokens = {
  visualBackground: -100,
  decoratedBackground: -5,
  headerBackdrop: -1,
  base: 0,
  content: 10,
  floating: 100,
  footer: 600,
  detailHeader: 1000,
  header: 2000,
  detail: 2000,
  projectLoading: 3000,
  transitionCover: 3000,
  initializationCover: 4000,
  cursor: 9999,
} as const;

export type ZIndexTokens = typeof zIndexTokens;
