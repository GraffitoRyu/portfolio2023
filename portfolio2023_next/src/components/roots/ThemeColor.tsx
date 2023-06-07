"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";

// types
import { ThemeStateTypes } from "@/types/state";

// state
import { themeState } from "@/states/theme";

// style
import { customThemes } from "@/styles/styled/preset/color";

export default function ThemeColors({ children }: { children: ReactNode }) {
  const { theme } = useRecoilValue<ThemeStateTypes>(themeState);
  const [mode, setMode] = useState<string>(theme ? theme : "dark");

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return <ThemeProvider theme={customThemes[mode]}>{children}</ThemeProvider>;
}
