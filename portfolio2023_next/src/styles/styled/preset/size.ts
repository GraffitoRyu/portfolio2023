/**
 * style preset; 사이즈 고정 값
 * @desc
 * - common
 *  - remStd
 *  - padding
 *  - section
 *    - mobile: top, left, bottom, right
 *    - pc: top, left, bottom, right
 * - icon
 *  - mobile, w768_landscape, w768, w1024, w1280, w1440
 * - btn
 *  - mobile, w768_landscape, w768m w1024, w1280, w1440
 */
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
};

export type SizePreset = keyof typeof sizePreset;
