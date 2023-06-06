export const sizePreset = {
  common: {
    padding: 80,
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
