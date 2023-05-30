import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

// state
import { ThemeStateTypes, themeState } from "@/states/theme";

// util
import { rem } from "@/util/unit";
import { applyTheme, getSystemTheme } from "@/util/changeTheme";

// style
import { flex, size, SvgFill } from "@/styles/styled/mixins";
import { img } from "@/styles/styled/img";

// SVG
import * as ThemeSvg from "./BtnIcons";
function ThemeIcon(theme: string) {
  switch (theme) {
    case "light":
      return <ThemeSvg.Light />;
    case "dark":
      return <ThemeSvg.Dark />;
    case "system":
      return <ThemeSvg.System />;
  }
}

const menuHeight: string = rem(56);
const ThemeMenuContainer = styled.div`
  width: ${rem(160)};
  transform: ${`translateY(${rem(16)})`};
  background: ${({ theme }) => theme.gnbThemeMenu.container};
`;
const ThemeListItem = styled.li`
  height: ${menuHeight};
`;
const ThemeMenuBtn = styled.button`
  figure {
    ${size({ width: menuHeight })}
    font-size:0;
    ${flex({})}
    ${({ theme }) => SvgFill(theme.gnbThemeMenu.menu)}
    svg {
      ${img({ width: 24, height: 24 })}
    }
  }
  span {
    font-size: ${rem(16)};
    color: ${({ theme }) => theme.gnbThemeMenu.menu};
    line-height: 1em;
    margin-top: ${rem(-2)};
  }
  &:not(.selected).hover {
    figure {
      ${({ theme }) => SvgFill(theme.gnbThemeMenu.hover)}
    }
    span {
      color: ${({ theme }) => theme.gnbThemeMenu.hover};
    }
  }
  &.selected {
    figure {
      ${({ theme }) => SvgFill(theme.gnbThemeMenu.selected)}
    }
    span {
      color: ${({ theme }) => theme.gnbThemeMenu.selected};
    }
  }
`;

type HoverTypes = {
  [key: string]: string | undefined;
  light?: string;
  dark?: string;
  system?: string;
};

export default function ThemeMenuList() {
  const themeList: string[] = ["light", "dark", "system"];
  const themeClasses: HoverTypes =
    Object.fromEntries(themeList.map(t => [t, ""])) ?? {};

  const [theme, setTheme] = useRecoilState<ThemeStateTypes>(themeState);
  const [openClass, setOpenClass] = useState<string>("hidden");
  const [themeClass, setThemeClass] = useState<string>("system");
  const [hover, setHover] = useState<HoverTypes>(themeClasses);

  const changeTheme: (selectedTheme: string) => void = selectedTheme => {
    if (!selectedTheme) return;
    setTheme(prev => ({
      ...prev,
      isSystem: selectedTheme == "system",
      theme: selectedTheme == "system" ? getSystemTheme() : selectedTheme,
    }));
  };

  const updateSelected: (code: string) => string = code => {
    if (theme.isSystem) return code === "system" ? "selected" : "";
    return theme.theme === code ? "selected" : "";
  };

  // useEffect(() => {
  //   applyTheme(theme.theme);
  //   setThemeClass(theme.isSystem ? `system-${theme.theme}` : theme.theme);
  // }, []);

  useEffect(() => {
    setOpenClass(theme.isOpen ? "" : "hidden");
  }, [theme.isOpen]);

  useEffect(() => {
    applyTheme(theme.theme);
    setThemeClass(theme.isSystem ? `system-${theme.theme}` : theme.theme);
  }, [theme.theme, theme.isSystem]);

  return (
    <ThemeMenuContainer
      className={`theme-menu absolute top-full left-0 ${openClass} ${themeClass}`}
    >
      <ul className="w-full">
        {themeList.map((code: string) => (
          <ThemeListItem key={`themeMenu_${code}`} className="w-full">
            <ThemeMenuBtn
              className={`w-full h-full flex items-center ${updateSelected(
                code
              )} ${hover[code]}`}
              onClick={() => changeTheme(code)}
              onMouseEnter={() =>
                setHover(prev => ({ ...prev, [code]: "hover" }))
              }
              onMouseLeave={() => setHover(prev => ({ ...prev, [code]: "" }))}
            >
              <figure>{ThemeIcon(code)}</figure>
              <span className="capitalize">{code}</span>
            </ThemeMenuBtn>
          </ThemeListItem>
        ))}
      </ul>
    </ThemeMenuContainer>
  );
}
