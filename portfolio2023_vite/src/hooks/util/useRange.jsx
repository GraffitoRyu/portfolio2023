export default function useRange(v, min, max) {
  if (!isNaN(v) && !isNaN(min) & !isNaN(max))
    return v < min ? min : v > max ? max : v;
  return v;
}
