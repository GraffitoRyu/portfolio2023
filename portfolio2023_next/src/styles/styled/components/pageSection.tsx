"use client";

import { rem } from "@/util/unit";
import styled from "styled-components";

export const PageSectionContainer = styled.section`
  position: relative;
  width: 100%;
  &.side-h-padding {
    padding-left: ${rem(80)};
    padding-right: ${rem(80)};
  }
  &.side-v-padding {
    padding-top: ${rem(160)};
    padding-bottom: ${rem(160)};
  }
  @media only screen and (min-width: 1024px) {
    &.side-v-padding {
      padding-top: ${rem(240)};
      padding-bottom: ${rem(240)};
    }
  }
`;

export const SectionHeaderContainer = styled.header`
  margin-bottom: ${rem(120)};
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(160)};
    top: ${rem(80 * 2 + 32)};
  }
`;

export const HeaderTitle = styled.h2`
  margin-bottom: ${rem(32)};
  font-size: ${rem(48)};
  line-height: 1em;
  font-weight: 700;
  color: ${({ theme }) => theme.sectionHeader.title};
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(80)};
    font-size: ${rem(32)};
  }
`;

export const HeaderDesc = styled.p`
  font-size: ${rem(32)};
  line-height: 1.5em;
  color: ${({ theme }) => theme.sectionHeader.desc};
  br {
    display: none;
  }
  span {
    word-break: break-all;
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(64)};
    font-weight: 300;
    br {
      display: inline;
    }
  }
`;

export const Contents = styled.div`
  padding-top: 0;
  @media only screen and (min-width: 1024px) {
    padding-top: ${rem(40 + 80)};
  }
`;
