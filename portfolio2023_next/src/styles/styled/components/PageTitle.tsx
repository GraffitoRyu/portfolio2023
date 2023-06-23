import { styled } from "styled-components";
import { font } from "../preset/mixins";
import { rem } from "@/util/unit";

export const PageTitle = styled.span`
  color: transparent;
  display: block;
  will-change: transform, opacity, color;
  ${font({
    size: 144,
    weight: 500,
    height: "1em",
    whitespace: "nowrap",
  })}
  &.stroke-title {
    -webkit-text-stroke: ${rem(2)} gray;
    font-family: var(--serif-kr);
  }
  &.filled-title {
    font-weight: 700;
  }
`;
