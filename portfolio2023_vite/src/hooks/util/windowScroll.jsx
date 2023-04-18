export default function windowScroll(container = document, callback, isClear) {
  if (isClear) {
    container.removeEventListener("wheel", callback, { passive: false });
    return;
  }
  container.addEventListener("wheel", callback, { passive: false });
  return () => {
    container.removeEventListener("wheel", callback, { passive: false });
  };
}
