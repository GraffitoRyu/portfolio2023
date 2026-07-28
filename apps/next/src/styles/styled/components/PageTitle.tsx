import { styled } from "styled-components";
import { typography } from "@graffitoryu/ui";
import { font } from "../preset/mixins";
import { rem } from "@/utils/style.util";

export const StyledPageTitle = styled.span`
  display: block;
  ${font({
    size: 144,
    weight: 700,
    height: "1em",
    whitespace: "nowrap",
  })}
  &.stroke-title {
    /* -webkit-text-stroke: ${rem(2)} gray; */
    ${font({ weight: 500, family: typography.family.serifKorean })}
  }
  &.filled-title {
  }
`;
