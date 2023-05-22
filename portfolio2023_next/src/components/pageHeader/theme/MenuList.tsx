import { useRef } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

// state
import { themeSelector } from "@/states/theme";

// util
import rem from "@/util/rem";

// style
import { flex } from "@/styles/styled/mixins";

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
  li {
    height: ${menuHeight};
    padding: 0 ${rem(16)};
  }
  figure {
    width: ${menuHeight};
    height: ${menuHeight};
    ${flex}
  }
`;

export default function ThemeMenuList() {
  const themeList = ["light", "dark", "system"];
  const [theme, setTheme] = useRecoilState(themeSelector);

  const changeTheme: (selectedTheme: string) => void = selectedTheme => {
    if (theme.theme === selectedTheme) return;
    setTheme(prev => ({
      ...prev,
      theme: selectedTheme,
    }));
  };

  return (
    <ThemeMenuContainer
      className={`theme-menu absolute top-full left-0 ${
        theme.isOpen ? "" : "hidden"
      }`}
    >
      <ul className="w-full">
        {themeList.map(code => (
          <li key={code} className="w-full">
            <button
              className="w-full h-full flex items-center"
              onClick={() => changeTheme(code)}
            >
              <figure>{ThemeIcon(code)}</figure>
              <span className="capitalize">{code}</span>
            </button>
          </li>
        ))}
      </ul>
    </ThemeMenuContainer>
  );
}
