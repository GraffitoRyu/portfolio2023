import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

// components
import ThemeMenuBtn from "./MenuBtn";

// style components
import {
  ThemeList,
  ThemeListItem,
  ThemeMenuContainer,
} from "@/styles/styled/components/ThemeMenu";

// state
import { themeState } from "@/jotai/theme.state";

// util
import { applyTheme } from "@/util/interactions/changeTheme";

export default function ThemeMenuList() {
  const themeList: ThemeMenuType[] = ["light", "dark", "system"];
  const theme = useAtomValue<ThemeStateTypes>(themeState);
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
        {themeList.map(code => (
          <ThemeListItem key={`theme/menu/${code}`}>
            <ThemeMenuBtn code={code} />
          </ThemeListItem>
        ))}
      </ThemeList>
    </ThemeMenuContainer>
  );
}
