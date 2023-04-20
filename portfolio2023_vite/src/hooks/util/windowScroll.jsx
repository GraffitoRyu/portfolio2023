export default function windowScroll(container = document, callback, isClear) {
  if (isClear) {
    container.removeEventListener("scroll", callback, { passive: false });
    return;
  }
  container.addEventListener("scroll", callback, { passive: false });
  return () => {
    container.removeEventListener("scroll", callback, { passive: false });
  };
}
