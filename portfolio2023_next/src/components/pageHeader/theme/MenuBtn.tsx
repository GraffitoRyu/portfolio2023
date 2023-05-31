import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

// state
import { ThemeStateTypes, themeState } from "@/states/theme";

// style
import { img } from "@/styles/styled/preset/img";
import { SvgFill, flex, size } from "@/styles/styled/preset/mixins";

// util
import { getSystemTheme } from "@/util/changeTheme";
import { rem } from "@/util/unit";

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

const ThemeMenuButton = styled.button`
  figure {
    ${size({ width: rem(56) })}
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

export default function ThemeMenuBtn({ code }: { code: string }) {
  const [theme, setTheme] = useRecoilState<ThemeStateTypes>(themeState);
  const [hover, setHover] = useState("");

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

  return (
    <ThemeMenuButton
      className={`w-full h-full flex items-center ${updateSelected(
        code
      )} ${hover}`}
      onClick={() => changeTheme(code)}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <figure>{ThemeIcon(code)}</figure>
      <span className="capitalize">{code}</span>
    </ThemeMenuButton>
  );
}
