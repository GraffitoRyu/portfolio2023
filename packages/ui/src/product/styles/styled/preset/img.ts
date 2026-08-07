"use client";

import { css } from "styled-components";

// util
import { size } from "./mixins";

/**
 * style preset; 이미지 스타일
 * @param {PresetImageProps} props
 * @param {number | string} [props.w] width
 * @param {number | string} [props.h] height
 * @param {string} [props.fit] object-fit
 * @desc
 * - size()
 * - object-fit
 */
export const img = ({ w, h, fit }: Partial<PresetImageProps>) => css`
  ${size({
    w: typeof w !== "undefined" ? w : "100%",
    h: typeof h !== "undefined" ? h : "100%",
  })}
  object-fit: ${fit ?? "contain"};
`;
