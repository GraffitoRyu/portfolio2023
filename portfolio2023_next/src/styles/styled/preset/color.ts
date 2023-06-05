/**
 * CustomThemeTypes = {
 *  common: {
 *   Page, Cursor, Scrollbar, Buttons
 *  },
 *  pageHeader: { Timer, Sitemap, ThemeMenu, Util },
 *  pageSection: { Visual, Intro, SectionHeader, SectionContents, },
 *  pageFooter: { },
 *  Profile: { Career, Experience, Tools },
 *  Projects: { List, Details },
 * }
 */

import * as color from "@/styles/colors/themeColors";
import type * as ColorTypes from "@/types/colors/colorTypes";

export interface CustomThemeTypes {
  page: ColorTypes.common.PageColorTypes;
  cursor: ColorTypes.common.CursorColorTypes;
  scrollbar: ColorTypes.common.ScrollBarColorTypes;
  buttons: ColorTypes.common.BtnColorTypes;
  transCover: ColorTypes.common.TransCoverColorTypes;
  timer: ColorTypes.pageHeader.TimerColorTypes;
  gnbSitemapBtn: ColorTypes.pageHeader.GnbSitemapBtnTypes;
  gnbUtilBtn: ColorTypes.pageHeader.GnbUtilTypes;
  gnbThemeMenu: ColorTypes.pageHeader.ThemeMenuTypes;
  sectionHeader: ColorTypes.pageSection.SectionHeaderTypes;
  visualSection: ColorTypes.pageSection.VisualTypes;
  introSection: ColorTypes.pageSection.IntroTypes;
  footer: ColorTypes.pageFooter.FooterTypes;
  career: ColorTypes.profile.CareerColorTypes;
  exp: ColorTypes.profile.ExpColorTypes;
  tools: ColorTypes.profile.ToolsColorTypes;
  projectList: ColorTypes.projectsList.ListColorTypes;
  projectDetails: ColorTypes.projectDetail.DetailColorTypes;
}

export interface CustomThemeModeTypes {
  [key: string]: CustomThemeTypes;
  light: CustomThemeTypes;
  dark: CustomThemeTypes;
}

export const customThemes: CustomThemeModeTypes = {
  light: {
    page: color.page.light,
    cursor: color.cursor.light,
    scrollbar: color.scrollbar.light,
    buttons: color.buttons.light,
    transCover: color.transCover.light,
    timer: color.timer.light,
    gnbSitemapBtn: color.gnbSitemapBtn.light,
    gnbUtilBtn: color.gnbUtilBtn.light,
    gnbThemeMenu: color.gnbThemeMenu.light,
    sectionHeader: color.sectionHeader.light,
    visualSection: color.visual.light,
    introSection: color.intro.light,
    footer: color.footer.light,
    career: color.career.light,
    exp: color.experience.light,
    tools: color.tools.light,
    projectList: color.list.light,
    projectDetails: color.details.light,
  },
  dark: {
    page: color.page.dark,
    cursor: color.cursor.dark,
    scrollbar: color.scrollbar.dark,
    buttons: color.buttons.dark,
    transCover: color.transCover.dark,
    timer: color.timer.dark,
    gnbSitemapBtn: color.gnbSitemapBtn.dark,
    gnbUtilBtn: color.gnbUtilBtn.dark,
    gnbThemeMenu: color.gnbThemeMenu.dark,
    sectionHeader: color.sectionHeader.dark,
    visualSection: color.visual.dark,
    introSection: color.intro.dark,
    footer: color.footer.dark,
    career: color.career.dark,
    exp: color.experience.dark,
    tools: color.tools.dark,
    projectList: color.list.dark,
    projectDetails: color.details.dark,
  },
};
