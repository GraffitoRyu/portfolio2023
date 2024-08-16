import { useCallback, useState } from "react";
import { useAtom } from "jotai";

// components
import ThemeIcon from "./BtnIcons";

// style components
import { StyledThemeMenuButton } from "@/styles/styled/components/ThemeMenu";

// state
import { themeState } from "@/jotai/theme.state";

// util
import { getSystemTheme } from "@/utils/interactions/theme.util";

export default function ThemeMenuBtn({ code }: { code: ThemeMenuType }) {
  const [theme, setTheme] = useAtom(themeState);
  const [hover, setHover] = useState("");

  const changeTheme = useCallback(
    (selectedTheme: ThemeMenuType) => {
      if (!selectedTheme) return;

      setTheme(prev => ({
        ...prev,
        isSystem: selectedTheme === "system",
        theme: selectedTheme === "system" ? getSystemTheme() : selectedTheme,
      }));
    },
    [setTheme],
  );

  const updateSelected = useCallback(
    (code: string): string => {
      if (theme.isSystem) return code === "system" ? "selected" : "";
      return theme.theme === code ? "selected" : "";
    },
    [theme.isSystem, theme.theme],
  );

  return (
    <StyledThemeMenuButton
      className={`${updateSelected(code)} ${hover}`}
      onClick={() => changeTheme(code)}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      aria-label={`${code} theme mode`}
    >
      <figure>
        <ThemeIcon themeCode={code} />
      </figure>
      <span>{code}</span>
    </StyledThemeMenuButton>
  );
}
