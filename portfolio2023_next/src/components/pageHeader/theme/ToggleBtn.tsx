import { useState } from "react";
import { useRecoilState } from "recoil";

// style components
import { ToggleBtn, ToggleIcon } from "@/styles/styled/components/ThemeMenu";

// types
import { ThemeStateTypes } from "@/types/state";

// state
import { themeState } from "@/states/theme";

// svg
import * as ThemeSvg from "./BtnIcons";

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
      aria-label="컬러 테마메뉴 토글 버튼"
    >
      <ToggleIcon>
        <ThemeSvg.Light className={updateIcon("light")} />
        <ThemeSvg.Dark className={updateIcon("dark")} />
      </ToggleIcon>
    </ToggleBtn>
  );
}
