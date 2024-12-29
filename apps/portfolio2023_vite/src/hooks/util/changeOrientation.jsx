export default function changeOrientation(updateCallback) {
  function debounce(callback) {
    let timer = undefined;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
        callback.apply(this, arguments);
      }, 400);
    };
  }

  window.addEventListener("orientationchange", debounce(updateCallback));
  return () => {
    window.removeEventListener("orientationchange", debounce(updateCallback));
  };
}
