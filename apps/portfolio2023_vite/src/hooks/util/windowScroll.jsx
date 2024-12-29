export default function windowScroll(container, callback, isClear) {
  const _container = container ? container : window;
  if (isClear) {
    _container.removeEventListener("scroll", callback, { passive: false });
    return;
  }
  _container.addEventListener("scroll", callback, { passive: false });
  return () => {
    _container.removeEventListener("scroll", callback, { passive: false });
  };
}
