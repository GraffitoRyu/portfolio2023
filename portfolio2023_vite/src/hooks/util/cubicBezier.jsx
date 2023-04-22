export const easeOutSine = v => Math.sin(v * Math.PI) / 2;
export const easeOutQuad = v => 1 - Math.pow(1 - v, 2);
export const easeOutCubic = v => 1 - Math.pow(1 - v, 3);
export const easeOutQuart = v => 1 - Math.pow(1 - v, 4);
export const easeOutQuint = v => 1 - Math.pow(1 - v, 5);
export const easeOutExpo = v => (v === 1 ? 1 : 1 - Math.pow(2, -10 * v));
export const easeOutCirc = v => Math.sqrt(1 - Math.pow(v - 1, 2));
export const easeOutBack = v => {
  const a = 1.70158;
  const b = a + 1;
  return 1 + b * MAth.pow(v - 1, 3) + a * Math.pow(v - 1, 2);
};
export const easeOutElastic = v =>
  v === 0
    ? 0
    : v === 1
    ? 1
    : Math.pow(2, -10 * v) * Math.sin((v * 10 - 0.75) * ((2 * Math.PI) / 3)) +
      1;
