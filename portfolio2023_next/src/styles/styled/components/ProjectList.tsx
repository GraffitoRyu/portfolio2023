"use client";

import styled from "styled-components";
import { keyframes } from "styled-components";

// components
import PeriodForward from "@/components/period/Period";

// style
import { img } from "../preset/img";
import { easing } from "../preset/easing";
import {
  SvgFill,
  flex,
  font,
  position,
  size,
  transition,
} from "../preset/mixins";
import { transTime } from "../preset/transTime";

export const ProjectLoadingProgress = styled.progress`
  ${position({ type: "fixed", top: 0, left: 0, z: 3000 })}
  ${size({ w: "100%", h: 8 })}
  border: 0;
  background-color: transparent;
  appearance: none;
  transition: opacity 0.8s;
  &.hide {
    opacity: 0;
  }
  &::-webkit-progress-bar {
    background-color: transparent;
  }
  &::-webkit-progress-value {
    background-color: orange;
    transition: inline-size 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const ProjectListContainer = styled.ul`
  width: 100%;
`;

export const ProjectListItem = styled.li`
  width: 100%;
`;

export const ProjectItemContainer = styled.button`
  width: 100%;
  user-select: none;
  overflow: hidden;
  position: relative;
`;

export const ProjectItemBorder = styled.div<{ $pos: "top" | "bottom" }>`
  ${({ $pos }) => position({ type: "absolute", [$pos]: 0 })}
  ${size({ w: 0, h: "1px" })}
  background-color:${({ theme }) => theme.projectList.border};
  transition: width 0.6s ${easing.quart},
    background-color ${transTime.color / 1000}s;
  ${ProjectItemContainer}:not(.hide) & {
    width: 100%;
  }
`;

export const ListBtnContainer = styled.div`
  ${position({ type: "relative" })}
  width:100%;
  position: relative;
  overflow: hidden;
  user-select: auto;
  ${transition([{ prop: "background-color", time: "0.4s" }])}
  ${ProjectItemContainer}:not(.hide).hover & {
    background-color: ${({ theme }) => theme.projectList.bgHover};
  }
`;

export const ListBtnWrap = styled.div`
  ${size({ w: "100%", p: 80 })}
  color:${({ theme }) => theme.projectList.desc};
  position: relative;
  @media only screen and (min-width: 1024px) {
    ${size({ w: 1440 })}
  }
`;

export const ListBtnPeriod = styled(PeriodForward)`
  color: ${({ theme }) => theme.projectList.period};
  ${size({ h: "auto", mb: 40 })}
  ${font({
    size: 24,
    weight: 500,
  })}
  span {
    &:before {
      background-color: ${({ theme }) => theme.projectList.period};
      ${transition([
        { prop: "width", time: "0.4s" },
        { prop: "opacity", time: "0.4s" },
      ])}
    }
  }
  @media only screen and (min-width: 640px) {
    ${size({ mb: 24 })}
  }
  @media only screen and (min-width: 1024px) {
    ${position({ type: "absolute", left: "100%" })}
    ${size({ h: 56, mb: 0 })}
  }
  time {
    ${transition([
      { prop: "opacity", time: "0.4s" },
      { prop: "transform", time: "0.4s" },
    ])}
  }
  time:nth-of-type(1) {
  }
  time:nth-of-type(2) {
    transition-delay: 0.08s;
  }
  ${ProjectItemContainer}:not(.hide).hover &,
  ${ProjectItemContainer}.hide & {
    time {
      transform: translateX(-50%);
      opacity: 0;
    }

    span:before {
      width: 0;
      opacity: 0;
    }
  }
`;
export const FadeContainer = styled.div`
  text-align: left;
  overflow: hidden;
  @media only screen and (min-width: 1024px) {
    text-align: right;
  }
`;

export const FadeListContainer = styled(FadeContainer)`
  ${flex({ std: "flex-start" })}
  @media only screen and (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const ListBtnTitle = styled.h3`
  ${size({ mb: 40 })}
  color: ${({ theme }) => theme.projectList.title};
  ${font({
    size: 80,
    weight: 700,
    height: "1em",
  })}
  @media only screen and (min-width: 640px) {
    ${size({ mb: 24 })}
    ${font({ size: 56 })}
  }
  ${transition([
    { prop: "transform", time: "0.4s", easing: easing.quart },
    { prop: "opacity", time: "0.4s", easing: easing.quart },
  ])}
  ${ProjectItemContainer}:not(.hide).hover &,
  ${ProjectItemContainer}.hide & {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const ListBtnDesc = styled.p`
  ${size({ mb: 48 })}
  ${font({
    size: 32,
    weight: 400,
    height: "1.4em",
  })}
  ${transition([
    { prop: "transform", time: "0.4s", easing: easing.quart, delay: "0.08s" },
    { prop: "opacity", time: "0.4s", easing: easing.quart, delay: "0.08s" },
  ])}
  ${ProjectItemContainer}:not(.hide).hover &,
  ${ProjectItemContainer}.hide & {
    transform: translateY(100%);
    opacity: 0;
  }
  @media only screen and (min-width: 640px) {
    ${font({ size: 32, height: "1em" })}
  }
`;

export const ListBtnRole = styled.li`
  ${flex({ std: "flex-start" })}
  ${font({
    size: 32,
    weight: 400,
  })}
  &:after {
    content: "";
    display: block;
    ${size({ w: 2, h: 20, m: [0, 24] })}
    background-color:${({ theme }) => theme.projectList.desc};
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
  ${transition([
    { prop: "transform", time: "0.4s", easing: easing.quart },
    { prop: "opacity", time: "0.4s", easing: easing.quart },
  ])}
  &:nth-child(1) {
    transition-delay: 0.12s;
  }
  &:nth-child(2) {
    transition-delay: 0.16s;
  }
  &:nth-child(3) {
    transition-delay: 0.2s;
  }
  ${ProjectItemContainer}:not(.hide).hover &,
  ${ProjectItemContainer}.hide & {
    transform: translateY(100%);
    opacity: 0;
  }

  @media only screen and (min-width: 640px) {
    ${font({ size: 24 })}
  }
  @media only screen and (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const HoverSlideTitle = styled.h3`
  ${position({ type: "absolute", top: "100%" })}
  ${flex({ std: "flex-start" })}
  width: 100%;
  color: ${({ theme }) => theme.projectList.slideTitle};
  text-align: left;
  white-space: nowrap;
  opacity: 0;
  ${transition([
    { prop: "transform", time: "0.4s", easing: easing.quart },
    { prop: "opacity", time: "0.4s", easing: easing.quart },
  ])}
  ${ProjectItemContainer}:not(.hide).hover & {
    transform: translateY(-100%);
    opacity: 1;
  }
`;
const textSlideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const TitleSpan = styled.span`
  ${font({
    size: 240,
    weight: 700,
    height: "1em",
    deco: "underline",
  })}
  text-decoration-thickness: 0.05em;
  animation: ${textSlideAnimation} 2s linear 0s infinite;
`;

export const ProjectOpenIcon = styled.figure`
  ${size({ w: 160, h: 160 })}
  ${position({ type: "absolute", top: 80, right: 80 })}
  transform:translate(-100%,100%);
  opacity: 0;
  ${transition([
    { prop: "opacity", time: "0.4s" },
    { prop: "transform", time: "0.4s" },
  ])}
  svg {
    ${img({})}
  }
  ${({ theme }) => SvgFill(theme.projectList.slideTitle)}
  @media only screen and (min-width:1024px) {
    ${size({ w: 120, h: 120 })}
  }
  ${ProjectItemContainer}:not(.hide).hover & {
    transform: translate(0, 0);
    opacity: 1;
  }
`;
