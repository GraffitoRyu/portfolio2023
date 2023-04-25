export default function useComputedStyle(el, style) {
  if (el && style) {
    return (
      window.getComputedStyle(el).getPropertyValue(style).replace("px", "") * 1
    );
  }
  return undefined;
}
