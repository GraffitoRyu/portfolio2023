export default function useMatrix(el) {
  if (!el) return undefined;
  const c = getComputedStyle(el);
  const transform = c.transform || c.webkitTransform || c.mozTransform;
  if (!transform.includes("matrix")) return undefined;
  const dimension = transform.includes("3d") ? 3 : 2;
  const v = transform.match(/matrix.*\((.+)\)/)[1].split(",");
  const x_i = dimension == 3 ? 12 : 4;
  const y_i = dimension == 3 ? 13 : 5;
  let arr = [v[x_i], v[y_i]];
  if (dimension == 3) arr.push(v[14]);
  return arr;
}
