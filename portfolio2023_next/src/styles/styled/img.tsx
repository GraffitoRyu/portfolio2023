import { getUnit } from "@/util/unit";
import { css } from "styled-components";

type ImageTypes = {
  width?: number | string;
  height?: number | string;
  fit?: string;
};

export const img = ({ width, height, fit }: ImageTypes) => css`
  width: ${typeof width !== "undefined" ? getUnit(width) : "100%"};
  height: ${typeof height !== "undefined" ? getUnit(height) : "100%"};
  object-fit: ${fit ?? "contain"};
`;
