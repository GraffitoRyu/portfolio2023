import { useRecoilState } from "recoil";
import { styled } from "styled-components";

// state
import { ThemeTypes, themeSelector } from "@/states/theme";

// svg
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

const ToggleBtn = styled.button``;

export default function ThemeToggleBtn() {
  const [theme, setTheme] = useRecoilState<ThemeTypes>(themeSelector);

  const setToggle: () => void = () => {
    setTheme(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  return (
    <ToggleBtn
      className="btn-box util-btn theme-btn"
      onClick={() => setToggle()}
    >
      <figure>{ThemeIcon(theme.theme)}</figure>
    </ToggleBtn>
  );
}
