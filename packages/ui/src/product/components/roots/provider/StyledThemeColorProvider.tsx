"use client";

import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { ThemeProvider } from "styled-components";

// state
import { themeState } from "@graffitoryu/ui/product/jotai/theme.state";

// style
import { customThemes } from "@graffitoryu/ui/product/styles/styled/preset/color";

/**
 * Root/Provider; Styled-component 테마 공급자
 * @component
 */
export default function StyledThemeColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useAtomValue<SystemThemeStateTypes>(themeState);
  const [mode, setMode] = useState<SystemThemeType>(theme ?? "dark");

  useEffect(() => {
    if (theme) setMode(theme);
  }, [theme]);

  return <ThemeProvider theme={customThemes[mode]}>{children}</ThemeProvider>;
}
