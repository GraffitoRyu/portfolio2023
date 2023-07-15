"use client";

import { css } from "styled-components";

// types
import { ImageTypes } from "@/types/preset";

// util
import { size } from "./mixins";

export const img = ({ w, h, fit }: ImageTypes) => css`
  ${size({
    w: typeof w !== "undefined" ? w : "100%",
    h: typeof h !== "undefined" ? h : "100%",
  })}
  object-fit: ${fit ?? "contain"};
`;
