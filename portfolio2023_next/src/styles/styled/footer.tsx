import { rem } from "@/util/unit";
import { css, styled } from "styled-components";
import { SvgFill, flex, size } from "./mixins";
import { img } from "./img";

const FooterFontSize = css`
  font-size: ${rem(32)};
  @media only screen and (min-width: 768px) {
    font-size: ${rem(24)};
  }
`;

export const FooterInfoTitle = styled.dt`
  width: fit-content;
  margin-bottom: ${rem(32)};
  color: ${({ theme }) => theme.footer.infoTitle};
  font-family: var(--serif-kr);
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 0;
  text-transform: capitalize;
  @media only screen and (min-width: 768px) {
    margin-bottom: ${rem(24)};
  }
  ${FooterFontSize}
`;

export const FooterInfoItem = styled.dd`
  width: fit-content;
  line-height: 1.6em;
  span {
    line-height: 1em;
  }
  ${FooterFontSize}
`;

const iconSize = (fs: number) => (fs * 2) / 3;
export const FooterBtn = styled.a`
  ${flex({ std: "start" })}
  ${size({ width: "fit-content", height: "2em" })}
  font-weight: 400;
  span {
    color: ${({ theme }) => theme.footer.btn};
    margin-right: ${rem(10)};
    margin-top: ${rem(-4)};
  }
  figure {
    ${size({ width: rem(iconSize(32)), height: rem(iconSize(32)) })}
    svg {
      display: block;
      ${img({})}
    }
  }
  ${({ theme }) => SvgFill(theme.footer.icon)};
  &.hover {
    span {
      color: ${({ theme }) => theme.footer.btnHover};
    }
    ${({ theme }) => SvgFill(theme.footer.iconHover)};
  }
  @media only screen and (min-width: 768px) {
    figure {
      ${size({ width: rem(iconSize(24)), height: rem(iconSize(24)) })}
    }
  }
  ${FooterFontSize}
`;
