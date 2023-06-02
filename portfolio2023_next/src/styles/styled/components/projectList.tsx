"use client";

import { styled } from "styled-components";

// components
import Period from "@/components/period/Period";

// style
import { flex, position, size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const ProjectListContainer = styled.ul`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.projectList.border};
`;

export const ProjectItemContainer = styled.li`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.projectList.border};
  user-select: none;
  overflow: hidden;
  position: relative;
`;

export const ListBtnContainer = styled.button`
  ${position({ type: "relative" })}
  width:100%;
  position: relative;
  overflow: hidden;
  text-align: left;
  user-select: auto;
  @media only screen and (min-width: 1024px) {
    text-align: right;
  }
  ${ProjectItemContainer}.hover & {
    background-color: ${({ theme }) => theme.projectList.bgHover};
  }
`;

export const ListBtnWrap = styled.div`
  ${size({ width: "100%", padding: rem(80) })}
  color:${({ theme }) => theme.projectList.desc};
  position: relative;
  @media only screen and (min-width: 1024px) {
    width: ${rem(1440)};
  }
`;

export const ListBtnPeriod = styled(Period)`
  ${position({ type: "absolute", left: "100%" })}
  margin-bottom: ${rem(24)};
  color: ${({ theme }) => theme.projectList.period};
  font-size: ${rem(24)};
  font-weight: 500;
  span {
    background-color: ${({ theme }) => theme.projectList.period};
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;
export const FadeContainer = styled.div`
  text-align: right;
  overflow: hidden;
`;

export const FadeListContainer = styled(FadeContainer)`
  ${flex({ std: "end" })}
`;

export const ListBtnTitle = styled.h3`
  margin-bottom: ${rem(24)};
  color: ${({ theme }) => theme.projectList.title};
  font-size: ${rem(96)};
  font-weight: 700;
  line-height: 1em;
  @media only screen and (min-width: 640px) {
    font-size: ${rem(56)};
  }
`;

export const ListBtnDesc = styled.p`
  margin-bottom: ${rem(48)};
  font-size: ${rem(32)};
  font-weight: 400;
  line-height: 1em;
`;

export const ListBtnRole = styled.li`
  ${flex({})}
  font-size: ${rem(24)};
  font-weight: 400;
  &:after {
    content: "";
    display: block;
    ${size({ width: rem(2), height: rem(20), margin: [0, rem(24)] })}
    background-color:${({ theme }) => theme.projectList.desc};
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
`;

export const HoverSlideTitle = styled.h3`
  ${position({ type: "absolute", top: "100%" })}
  ${flex({ std: "start" })}
  width: 100%;
  text-align: left;
  text-decoration: underline;
  white-space: nowrap;
`;

export const TitleSpan = styled.span`
  font-size: 240px;
  font-weight: 700;
  animation: slideText 2s linear 0s infinite;
  @keyframes slideText {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
