import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

// components
import ThemeMenuBtn from "./MenuBtn";

// style components
import {
  StyledThemeList,
  StyledThemeListItem,
  StyledThemeMenuContainer,
} from "@/styles/styled/components/ThemeMenu";

// state
import { themeState } from "@/jotai/theme.state";

// util
import { applyTheme } from "@/utils/interactions/theme.util";

export default function ThemeMenuList() {
  const themeList: SystemThemeMenuType[] = ["light", "dark", "system"];
  const theme = useAtomValue<SystemThemeStateTypes>(themeState);
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
    <StyledThemeMenuContainer
      className={`theme-menu ${openClass} ${themeClass}`}
    >
      <StyledThemeList>
        {themeList.map(code => (
          <StyledThemeListItem key={`theme/menu/${code}`}>
            <ThemeMenuBtn code={code} />
          </StyledThemeListItem>
        ))}
      </StyledThemeList>
    </StyledThemeMenuContainer>
  );
}
