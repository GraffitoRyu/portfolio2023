import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

// state
import {
  ThemeTypes,
  themeState,
  getSystemTheme,
  applyTheme,
} from "@/states/theme";

// util
import rem from "@/util/rem";

// style
import { flex, SvgFill } from "@/styles/styled/mixins";

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

const menuHeight: string = rem(80);
const ThemeMenuContainer = styled.div`
  width: ${rem(216)};
  background: #efefef;
`;
const ThemeListItem = styled.li`
  height: ${menuHeight};
  padding: 0 ${rem(16)};
`;
const ThemeMenuBtn = styled.button`
  figure {
    width: ${menuHeight};
    height: ${menuHeight};
    ${flex({})}
    ${SvgFill("#ccc")}
  }
  span {
    color: #999;
  }
  &:not(.cur).hover,
  &.selected {
    figure {
      ${SvgFill("#333")}
    }
    span {
      color: #333;
    }
  }
`;

export default function ThemeMenuList() {
  const themeList: string[] = ["light", "dark", "system"];
  const themeClasses = Object.fromEntries(themeList.map(t => [t, ""])) ?? {};
  const [theme, setTheme] = useRecoilState<ThemeTypes>(themeState);
  const [openClass, setOpenClass] = useState<string>("hidden");
  const [themeClass, setThemeClass] = useState<string>(getSystemTheme());
  const [hover, setHover] = useState(themeClasses);

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

  useEffect(() => {
    applyTheme(theme.theme);
    setOpenClass(theme.isOpen ? "" : "hidden");
    setThemeClass(theme.isSystem ? `system-${theme.theme}` : theme.theme);
  }, [theme]);

  return (
    <ThemeMenuContainer
      className={`theme-menu absolute top-full left-0 ${openClass} ${themeClass}`}
    >
      <ul className="w-full">
        {themeList.map(code => (
          <ThemeListItem key={code} className="w-full">
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
