import { setCSSProps } from "./cssProperty";

export default function checkScreenSize() {
  setCSSProps("--screen-size-x", `${window.innerWidth}px`);
  setCSSProps("--screen-size-y", `${window.innerHeight}px`);
}