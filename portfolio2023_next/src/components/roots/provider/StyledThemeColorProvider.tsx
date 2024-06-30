"use client";

import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { ThemeProvider } from "styled-components";

// state
import { themeState } from "@/jotai/theme";

// style
import { customThemes } from "@/styles/styled/preset/color";

export default function StyledThemeColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useAtomValue<ThemeStateTypes>(themeState);
  const [mode, setMode] = useState<"light" | "dark">(theme ?? "dark");

  useEffect(() => {
    if (theme) setMode(theme);
  }, [theme]);

  return <ThemeProvider theme={customThemes[mode]}>{children}</ThemeProvider>;
}
