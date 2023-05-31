import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

// state
import { ThemeStateTypes, themeState } from "@/states/theme";

// svg
import * as ThemeSvg from "./BtnIcons";

// style
import { SvgFill, position } from "@/styles/styled/preset/mixins";

const ToggleBtn = styled.button`
  ${({ theme }) => SvgFill(theme.gnbUtilBtn.svg)};
  &.hover {
    background-color: ${({ theme }) => theme.gnbUtilBtn.bg};
    ${({ theme }) => SvgFill(theme.gnbUtilBtn.svgHover)};
  }
  &:active {
    ${({ theme }) => SvgFill(theme.gnbUtilBtn.svgActive)};
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
  const [theme, setTheme] = useRecoilState<ThemeStateTypes>(themeState);
  const [hover, setHover] = useState<string>("");

  const setToggle: () => void = () => {
    setTheme(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const updateIcon: (thisTheme: string) => string = thisTheme => {
    return theme.theme === thisTheme ? "on" : "";
  };

  return (
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
  );
}
