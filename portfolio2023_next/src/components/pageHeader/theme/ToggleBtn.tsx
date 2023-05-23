"use client";

import { useRecoilState } from "recoil";
import { styled } from "styled-components";

// state
import { ThemeTypes, themeState } from "@/states/theme";

// svg
import * as ThemeSvg from "./BtnIcons";

// style
import { position } from "@/styles/globalStyled/mixins";

const ToggleIcon = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;
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
    <button className="btn-box util-btn theme-btn" onClick={() => setToggle()}>
      <ToggleIcon>
        <ThemeSvg.Light className={updateIcon("light")} />
        <ThemeSvg.Dark className={updateIcon("dark")} />
      </ToggleIcon>
    </button>
  );
}
