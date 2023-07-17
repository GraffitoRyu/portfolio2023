import { useState } from "react";
import { useRecoilState } from "recoil";

// style components
import { ThemeMenuButton } from "@/styles/styled/components/ThemeMenu";

// types
import { ThemeStateTypes } from "@/types/state";

// state
import { themeState } from "@/states/theme";

// util
import { getSystemTheme } from "@/util/changeTheme";

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
    default:
      return null;
  }
}

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
      className={`${updateSelected(code)} ${hover}`}
      onClick={() => changeTheme(code)}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      aria-label={`${code} theme mode`}
    >
      <figure>{ThemeIcon(code)}</figure>
      <span>{code}</span>
    </ThemeMenuButton>
  );
}
