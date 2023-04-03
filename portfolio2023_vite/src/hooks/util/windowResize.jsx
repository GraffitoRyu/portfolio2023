export default function windowResizeCheck(updateFunction, checkTime) {
  function debounce(callback) {
    let timer = undefined;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
        callback.apply(this, arguments);
      }, checkTime);
    };
  }

  window.addEventListener("resize", debounce(updateFunction));

  return () => {
    window.removeEventListener("resize", debounce(updateFunction));
  };
}
