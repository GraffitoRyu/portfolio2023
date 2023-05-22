export function useClick(
  callback: (e: PointerEvent | MouseEvent | TouchEvent) => void
) {
  document.addEventListener("click", callback);
}

export function useRemoveClick(
  callback: (e: PointerEvent | MouseEvent | TouchEvent) => void
) {
  document.removeEventListener("click", callback);
}
