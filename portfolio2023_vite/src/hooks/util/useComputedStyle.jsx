export default function useComputedStyle(el, style) {
  if (el && style) {
    return (
      window
        .getComputedStyle(el)
        .getPropertyValue(style)
        .replace("px", "")
        .replace("s", "") * 1
    );
  }
  return undefined;
}
