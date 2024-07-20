export default function getHash() {
  if (typeof window !== "undefined")
    return window.location.hash.replace("#", "");
  return undefined;
}
