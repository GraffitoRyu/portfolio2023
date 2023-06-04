export default function closeByClickOutSide(
  e: PointerEvent | MouseEvent | TouchEvent,
  openState: boolean,
  ref: React.MutableRefObject<HTMLElement>,
  callback: () => void
): void {
  if (
    openState == true &&
    e?.target instanceof Element &&
    ref?.current instanceof Element
  ) {
    const isOverRef = ref.current.contains(e.target);
    if (!isOverRef) callback();
  }
}
