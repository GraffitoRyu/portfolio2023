export default function getSlideTextSet(ref) {
  if (ref?.current) {
    const screenWidth = window.innerWidth;
    const text = ref.current.innerText?.replace("\n", " ");
    const singleTextWidth = ref.current.children[0].offsetWidth;
    const dupLength = Math.ceil(screenWidth / singleTextWidth) + 1;

    return {
      array: Array(dupLength).fill(text),
      width: singleTextWidth,
    };
  }
  return { array: [], width: 0 };
}
