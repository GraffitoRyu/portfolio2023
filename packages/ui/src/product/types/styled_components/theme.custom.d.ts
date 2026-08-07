import type { ThemeMode, Theme } from "@graffitoryu/ui";

declare global {
  type CustomThemeTypes = Theme;
  type CustomThemeModeTypes = Record<ThemeMode, Theme>;
}

export {};
