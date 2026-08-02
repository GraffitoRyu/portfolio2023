import type { CSSProperties, ReactNode } from "react";
import { themes } from "@graffitoryu/ui";
import { ThemeProvider } from "styled-components";

const theme = themes.dark;

const themeVariables = {
  "--color-page-background": theme.page.bg,
  "--color-page-text": theme.introSection.title,
  "--color-page-muted": theme.introSection.desc,
  "--color-page-border": theme.projectList.border,
  "--color-header-link": theme.gnbSitemapBtn.basic,
  "--color-header-link-active": theme.gnbSitemapBtn.selected,
  "--color-surface": theme.footer.bg,
  "--color-button-background": theme.buttons.hoverBg,
  "--color-button-text": theme.buttons.hoverContents,
} as CSSProperties;

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-theme" style={themeVariables}>
        {children}
      </div>
    </ThemeProvider>
  );
}
