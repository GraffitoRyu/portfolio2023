import type { ThemeMode, ThemeTokens } from "@graffitoryu/ui";

declare global {
  type CustomThemeTypes = ThemeTokens;
  type CustomThemeModeTypes = Record<ThemeMode, ThemeTokens>;
}

export {};
