import { setCSSProps } from "./cssProperty";

export default function checkHeaderHeight() {
  setCSSProps("--header-height", `${document.querySelector("#pageHeader").clientHeight}px`);
}