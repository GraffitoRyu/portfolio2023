"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeProvider, styled } from "styled-components";

// state
import { ThemeTypes, themeState } from "@/states/theme";

// svg
import * as ThemeSvg from "./BtnIcons";

// style
import { SvgFill, position } from "@/styles/styled/mixins";
import { utilBtnColors } from "@/styles/styled/gnb";

const ToggleBtn = styled.button`
  ${({ theme }) => SvgFill(theme.svg)};
  &.hover {
    background-color: ${({ theme }) => theme.bg};
    ${({ theme }) => SvgFill(theme.svgHover)};
  }
  &:active {
    ${({ theme }) => SvgFill(theme.svgActive)};
  }
`;

const ToggleIcon = styled.figure`
  svg {
    ${position({ type: "absolute", center: true })}
    opacity:0;
    &.on {
      opacity: 1;
    }
  }
`;

export default function ThemeToggleBtn() {
  const [theme, setTheme] = useRecoilState<ThemeTypes>(themeState);
  const [hover, setHover] = useState<string>("");
  const [colors, setColors] = useState(utilBtnColors.light);

  const setToggle: () => void = () => {
    setTheme(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const updateIcon: (thisTheme: string) => string = thisTheme => {
    return theme.theme === thisTheme ? "on" : "";
  };

  useEffect(() => {
    setColors(utilBtnColors[theme.theme]);
  }, [theme.theme]);

  return (
    <ThemeProvider theme={colors}>
      <ToggleBtn
        className={`util-btn theme-btn ${hover}`}
        onClick={() => setToggle()}
        onMouseEnter={() => setHover("hover")}
        onMouseLeave={() => setHover("")}
      >
        <ToggleIcon>
          <ThemeSvg.Light className={updateIcon("light")} />
          <ThemeSvg.Dark className={updateIcon("dark")} />
        </ToggleIcon>
      </ToggleBtn>
    </ThemeProvider>
  );
}
