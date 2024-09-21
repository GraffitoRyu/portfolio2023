import { useCallback, useState } from "react";
import { useAtom } from "jotai";

// components
import ThemeIcon from "./BtnIcons";

// style components
import {
  StyledToggleBtn,
  StyledToggleIcon,
} from "@/styles/styled/components/ThemeMenu";

// state
import { themeState } from "@/jotai/theme.state";

export default function ThemeToggleBtn() {
  const [theme, setTheme] = useAtom(themeState);
  const [hover, setHover] = useState<string>("");

  const setToggle = useCallback(() => {
    setTheme(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  }, [setTheme]);

  const updateIcon = useCallback(
    (thisTheme: string): string => {
      return theme.theme === thisTheme ? "on" : "";
    },
    [theme.theme],
  );

  return (
    <StyledToggleBtn
      className={`util-btn theme-btn ${hover}`}
      onClick={() => setToggle()}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      aria-label="컬러 테마메뉴 토글 버튼"
    >
      <StyledToggleIcon>
        <ThemeIcon themeCode="light" className={updateIcon("light")} />
        <ThemeIcon themeCode="dark" className={updateIcon("dark")} />
      </StyledToggleIcon>
    </StyledToggleBtn>
  );
}
