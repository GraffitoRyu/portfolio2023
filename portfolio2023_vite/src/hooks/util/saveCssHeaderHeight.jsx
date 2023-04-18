import { setCSSProps } from "./cssProperty";

export default function saveCssHeaderHeight(height) {
  if (!isNaN(height)) setCSSProps("--header-height", `${height}px`);
}
