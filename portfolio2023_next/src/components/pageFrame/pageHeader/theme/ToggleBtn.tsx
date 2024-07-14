import { useState } from "react";
import { useAtom } from "jotai";

// components
import ThemeIcon from "./BtnIcons";

// style components
import { ToggleBtn, ToggleIcon } from "@/styles/styled/components/ThemeMenu";

// state
import { themeState } from "@/jotai/theme.state";

export default function ThemeToggleBtn() {
  const [theme, setTheme] = useAtom<ThemeStateTypes>(themeState);
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
        <ThemeIcon themeCode="light" className={updateIcon("light")} />
        <ThemeIcon themeCode="dark" className={updateIcon("dark")} />
      </ToggleIcon>
    </ToggleBtn>
  );
}
