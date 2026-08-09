"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { ThemeProvider } from "styled-components";

// state
import { themeState } from "@graffitoryu/ui/product/jotai/theme.state";

// style
import { customThemes } from "@graffitoryu/ui/product/styles/styled/preset/color";
import { watchSystemTheme } from "@graffitoryu/ui/product/utils/interactions/theme.util";

/**
 * Root/Provider; Styled-component 테마 공급자
 * @component
 */
export default function StyledThemeColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ isSystem, theme }, setTheme] = useAtom(themeState);

  useEffect(() => {
    if (!isSystem) return;

    return watchSystemTheme(systemTheme =>
      setTheme(prev => ({ ...prev, theme: systemTheme })),
    );
  }, [isSystem, setTheme]);

  return <ThemeProvider theme={customThemes[theme]}>{children}</ThemeProvider>;
}
