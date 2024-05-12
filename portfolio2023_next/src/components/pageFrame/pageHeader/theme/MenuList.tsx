import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import ThemeMenuBtn from "./MenuBtn";

// style components
import {
  ThemeList,
  ThemeListItem,
  ThemeMenuContainer,
} from "@/styles/styled/components/ThemeMenu";

// types
import { ThemeStateTypes } from "@/types/state";

// state
import { themeState } from "@/states/theme";

// util
import { applyTheme } from "@/util/changeTheme";

export default function ThemeMenuList() {
  const themeList: string[] = ["light", "dark", "system"];
  const theme = useRecoilValue<ThemeStateTypes>(themeState);
  const [openClass, setOpenClass] = useState<string>("off");
  const [themeClass, setThemeClass] = useState<string>("system");

  useEffect(() => {
    setOpenClass(theme.isOpen ? "" : "off");
  }, [theme.isOpen]);

  useEffect(() => {
    applyTheme(theme.theme);
    setThemeClass(theme.isSystem ? `system-${theme.theme}` : theme.theme);
  }, [theme.theme, theme.isSystem]);

  return (
    <ThemeMenuContainer className={`theme-menu ${openClass} ${themeClass}`}>
      <ThemeList>
        {themeList.map((code: string, i: number) => (
          <ThemeListItem
            key={`themeMenu_${code}_${Math.floor(Math.random() * 100000)}_${i}`}
          >
            <ThemeMenuBtn code={code} />
          </ThemeListItem>
        ))}
      </ThemeList>
    </ThemeMenuContainer>
  );
}
