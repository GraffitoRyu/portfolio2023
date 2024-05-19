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

// state
import { themeState } from "@/states/theme";

// util
import { applyTheme } from "@/util/interactions/changeTheme";

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
        {themeList.map((code: string) => (
          <ThemeListItem key={`theme/menu/${code}`}>
            <ThemeMenuBtn code={code} />
          </ThemeListItem>
        ))}
      </ThemeList>
    </ThemeMenuContainer>
  );
}
