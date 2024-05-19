import { useState } from "react";
import { useRecoilState } from "recoil";

// components
import ThemeIcon from "./BtnIcons";

// style components
import { ThemeMenuButton } from "@/styles/styled/components/ThemeMenu";

// state
import { themeState } from "@/states/theme";

// util
import { getSystemTheme } from "@/util/interactions/changeTheme";

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
      <figure>
        <ThemeIcon themeCode={code} />
      </figure>
      <span>{code}</span>
    </ThemeMenuButton>
  );
}
