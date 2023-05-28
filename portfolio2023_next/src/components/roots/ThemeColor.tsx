"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";

// state
import { ThemeStateTypes, themeState } from "@/states/theme";

// style
import { customThemes } from "@/styles/styled/color";

export default function ThemeColors({ children }: { children: ReactNode }) {
  const { theme } = useRecoilValue<ThemeStateTypes>(themeState);
  const [mode, setMode] = useState<string>(theme ? theme : "dark");

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return <ThemeProvider theme={customThemes[mode]}>{children}</ThemeProvider>;
}
