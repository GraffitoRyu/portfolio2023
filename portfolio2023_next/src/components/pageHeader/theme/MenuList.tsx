import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import ThemeMenuBtn from "./MenuBtn";

// style components
import {
  ThemeListItem,
  ThemeMenuContainer,
} from "@/styles/styled/components/ThemeMenu";

// state
import { ThemeStateTypes, themeState } from "@/states/theme";

// util
import { applyTheme } from "@/util/changeTheme";

export default function ThemeMenuList() {
  const themeList: string[] = ["light", "dark", "system"];
  const theme = useRecoilValue<ThemeStateTypes>(themeState);
  const [openClass, setOpenClass] = useState<string>("hidden");
  const [themeClass, setThemeClass] = useState<string>("system");

  useEffect(() => {
    setOpenClass(theme.isOpen ? "" : "hidden");
  }, [theme.isOpen]);

  useEffect(() => {
    applyTheme(theme.theme);
    setThemeClass(theme.isSystem ? `system-${theme.theme}` : theme.theme);
  }, [theme.theme, theme.isSystem]);

  return (
    <ThemeMenuContainer
      className={`theme-menu absolute top-full left-0 ${openClass} ${themeClass}`}
    >
      <ul className="w-full">
        {themeList.map((code: string, i: number) => (
          <ThemeListItem
            key={`themeMenu_${code}_${Math.floor(Math.random() * 100000)}_${i}`}
            className="w-full"
          >
            <ThemeMenuBtn code={code} />
          </ThemeListItem>
        ))}
      </ul>
    </ThemeMenuContainer>
  );
}
