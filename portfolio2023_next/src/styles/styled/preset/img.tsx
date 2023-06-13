"use client";

import { css } from "styled-components";

// types
import { ImageTypes } from "@/types/preset";

// util
import { getUnit } from "@/util/unit";

export const img = ({ w, h, fit }: ImageTypes) => css`
  width: ${typeof w !== "undefined" ? getUnit(w) : "100%"};
  height: ${typeof h !== "undefined" ? getUnit(h) : "100%"};
  object-fit: ${fit ?? "contain"};
`;
