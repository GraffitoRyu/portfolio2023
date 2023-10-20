export default function closeByClickOutSide(
  e: PointerEvent | MouseEvent | TouchEvent,
  openState: boolean,
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: () => void,
): void {
  if (
    openState == true &&
    e?.target instanceof Element &&
    ref?.current instanceof Element
  ) {
    const el = ref.current;
    const isOverRef = el && el.contains(e.target);
    if (!isOverRef) callback();
  }
}
