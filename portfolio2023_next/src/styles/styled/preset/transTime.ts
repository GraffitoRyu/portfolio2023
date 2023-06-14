export const transTime = {
  common: {
    initCover: 1000,
    initComplete: 1000,
    transCover: 1000,
  },
  detail: {
    sheetSlide: 800,
  },
};

export type TransTimeTypes = keyof typeof transTime;
