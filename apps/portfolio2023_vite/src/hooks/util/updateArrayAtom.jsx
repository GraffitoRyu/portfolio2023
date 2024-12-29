export default function updateArrayAtom(arr, idx, newItem) {
  return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
}
