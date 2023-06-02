"use client";

import { css } from "styled-components";

// types
import { ImageTypes } from "@/types/preset";

// util
import { getUnit } from "@/util/unit";

export const img = ({ width, height, fit }: ImageTypes) => css`
  width: ${typeof width !== "undefined" ? getUnit(width) : "100%"};
  height: ${typeof height !== "undefined" ? getUnit(height) : "100%"};
  object-fit: ${fit ?? "contain"};
`;
