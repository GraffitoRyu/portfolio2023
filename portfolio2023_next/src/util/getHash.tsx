export default function getHash() {
  console.log(window?.location?.hash?.replace("#", ""));
  if (typeof window !== "undefined")
    return window.location.hash.replace("#", "");
  return undefined;
}
