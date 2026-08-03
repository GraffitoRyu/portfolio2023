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
  "--color-section-title": theme.sectionHeader.title,
  "--color-section-description": theme.sectionHeader.desc,
  "--color-intro-strong": theme.introSection.strong,
  "--color-career-border": theme.career.border,
  "--color-career-role": theme.career.role,
  "--color-career-company": theme.career.company,
  "--color-career-period": theme.career.period,
  "--color-career-detail-background": theme.career.expandBg,
  "--color-career-detail-title": theme.career.detailTitle,
  "--color-career-detail-text": theme.career.detailContents,
  "--color-experience-title": theme.exp.title,
  "--color-experience-text": theme.exp.desc,
  "--color-stack-category": theme.stacks.category,
  "--color-stack-name": theme.stacks.stackName,
  "--color-project-list-background-hover": theme.projectList.bgHover,
  "--color-project-list-title": theme.projectList.title,
  "--color-project-list-period": theme.projectList.period,
  "--color-project-list-description": theme.projectList.desc,
  "--color-project-list-slide-title": theme.projectList.slideTitle,
  "--color-project-detail-background": theme.projectDetails.bg,
  "--color-project-detail-visual-background": theme.projectDetails.visualBg,
  "--color-project-detail-title": theme.projectDetails.visualTitle,
  "--color-project-detail-subtitle": theme.projectDetails.visualSubtitle,
  "--color-project-detail-info-title": theme.projectDetails.infoTitle,
  "--color-project-detail-info-description": theme.projectDetails.infoDesc,
  "--color-project-detail-experience-title": theme.projectDetails.expTitle,
  "--color-project-detail-experience-description": theme.projectDetails.expDesc,
  "--color-project-detail-stack-background": theme.projectDetails.stackBg,
  "--color-project-detail-stack-border": theme.projectDetails.stackBorder,
  "--color-project-detail-stack-text": theme.projectDetails.stackText,
  "--color-project-detail-caption-title": theme.projectDetails.captionTitle,
  "--color-project-detail-caption-description":
    theme.projectDetails.captionDesc,
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
