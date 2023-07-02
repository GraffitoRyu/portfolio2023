export const sizePreset = {
  common: {
    remStd: 25.6,
    padding: 80,
    section: {
      mobile: {
        top: 80,
        left: 80,
        bottom: 80,
        right: 80,
      },
      pc: {
        top: 240,
        left: 80,
        bottom: 360,
        right: 80,
      },
    },
  },
  icon: {
    mobile: 24,
    pc: 16,
  },
  btn: {
    mobile: 80,
    pc: 48,
  },
};

export type SizePreset = keyof typeof sizePreset;
