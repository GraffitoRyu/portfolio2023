import { styled } from "styled-components";
import { font } from "../preset/mixins";
import { rem } from "@/util/unit";

export const PageTitle = styled.span`
  display: block;
  ${font({
    size: 144,
    weight: 700,
    height: "1em",
    whitespace: "nowrap",
  })}
  &.stroke-title {
    /* -webkit-text-stroke: ${rem(2)} gray; */
    ${font({ weight: 500, family: "var(--serif-kr)" })}
  }
  &.filled-title {
  }
`;
