/**
 * CustomThemeTypes = {
 *  common: {
 *   Page, Cursor, Scrollbar, Buttons
 *  },
 *  pageHeader: { Timer, Sitemap, ThemeMenu, Util },
 *  pageSection: { Visual, Intro, SectionHeader, SectionContents, },
 *  pageFooter: { },
 *  Profile: { Career, Experience, Stacks },
 *  Projects: { List, Details },
 * }
 */

import * as color from "@/styles/colors/themeColors";

export const customThemes: CustomThemeModeTypes = {
  light: {
    page: color.page.light,
    cursor: color.cursor.light,
    scrollbar: color.scrollbar.light,
    buttons: color.buttons.light,
    transCover: color.transCover.light,
    initCover: color.initCover.light,
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
    stacks: color.stacks.light,
    projectList: color.list.light,
    projectDetails: color.details.light,
  },
  dark: {
    page: color.page.dark,
    cursor: color.cursor.dark,
    scrollbar: color.scrollbar.dark,
    buttons: color.buttons.dark,
    transCover: color.transCover.dark,
    initCover: color.initCover.dark,
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
    stacks: color.stacks.dark,
    projectList: color.list.dark,
    projectDetails: color.details.dark,
  },
};
