import { styled } from "styled-components";
import { font } from "../preset/mixins";
import { rem } from "@/util/unit";

export const PageTitle = styled.span`
  display: block;
  ${font({
    size: 144,
    weight: 500,
    height: "1em",
    whitespace: "nowrap",
  })}
  &.stroke-title {
    color: transparent;
    -webkit-text-stroke: ${rem(2)} gray;
    font-family: var(--serif-kr);
  }
  &.filled-title {
    font-weight: 700;
  }
`;
