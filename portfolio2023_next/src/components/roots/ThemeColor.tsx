"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { ThemeProvider } from "styled-components";

// state
import { themeState } from "@/jotai/theme";

// style
import { customThemes } from "@/styles/styled/preset/color";

export default function ThemeColors({ children }: { children: ReactNode }) {
  const { theme } = useAtomValue<ThemeStateTypes>(themeState);
  const [mode, setMode] = useState<string>(theme ? theme : "dark");

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return <ThemeProvider theme={customThemes[mode]}>{children}</ThemeProvider>;
}
