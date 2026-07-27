import type { ThemeMode, ThemeTokens } from "@portfolio/ui";

declare global {
  type CustomThemeTypes = ThemeTokens;
  type CustomThemeModeTypes = Record<ThemeMode, ThemeTokens>;
}

export {};
