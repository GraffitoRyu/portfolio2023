export function windowTouchStart(callback, isClear) {
  if (isClear) {
    window.removeEventListener("touchstart", callback, false);
    return;
  }
  document.addEventListener("touchstart", callback, false);
  return () => {
    window.removeEventListener("touchstart", callback, false);
  };
}
export function windowTouchEnd(callback, isClear) {
  if (isClear) {
    window.removeEventListener("touchend", callback, false);
    return;
  }
  document.addEventListener("touchend", callback, false);
  return () => {
    window.removeEventListener("touchend", callback, false);
  };
}
export function windowTouchMove(callback, isClear) {
  if (isClear) {
    window.removeEventListener("touchmove", callback, false);
    return;
  }
  document.addEventListener("touchmove", callback, false);
  return () => {
    window.removeEventListener("touchmove", callback, false);
  };
}
export function windowTouchCancel(callback, isClear) {
  if (isClear) {
    window.removeEventListener("touchcancel", callback, false);
    return;
  }
  document.addEventListener("touchcancel", callback, false);
  return () => {
    window.removeEventListener("touchcancel", callback, false);
  };
}
export function getTouches(event) {
  // 터치 이벤트값 추출
  const e = event ? event : event.originalEvent;
  if (e) return e.changedTouches[0];
  else return undefined;
}
