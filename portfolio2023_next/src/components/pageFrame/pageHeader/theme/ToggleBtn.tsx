import { useState } from "react";
import { useRecoilState } from "recoil";

// components
import ThemeIcon from "./BtnIcons";

// style components
import { ToggleBtn, ToggleIcon } from "@/styles/styled/components/ThemeMenu";

// state
import { themeState } from "@/states/theme";

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
        <ThemeIcon themeCode="light" className={updateIcon("light")} />
        <ThemeIcon themeCode="dark" className={updateIcon("dark")} />
      </ToggleIcon>
    </ToggleBtn>
  );
}
