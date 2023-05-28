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

import { page, PageColorTypes } from "../colors/common/Page";
import { cursor, CursorColorTypes } from "../colors/common/Cursor";
import { scrollbar, ScrollBarColorTypes } from "../colors/common/Scrollbar";
import { timer, TimerColorTypes } from "../colors/pageHeader/Timer";
import {
  gnbSitemapBtn,
  GnbSitemapBtnTypes,
} from "../colors/pageHeader/SitemapBtn";
import { gnbUtilBtn, GnbUtilTypes } from "../colors/pageHeader/UtilBtn";
import { GnbThemeMenu, ThemeMenuTypes } from "../colors/pageHeader/ThemeMenu";
import {
  sectionHeader,
  SectionHeaderTypes,
} from "../colors/pageSection/Header";
import { visual, VisualTypes } from "../colors/pageSection/Visual";
import { intro, IntroTypes } from "../colors/pageSection/Intro";
import { footer, FooterTypes } from "../colors/pageFooter/Footer";
import { career, CareerColorTypes } from "../colors/profile/Career";
import { experience, ExpColorTypes } from "../colors/profile/Experience";
import { tools, ToolsColorTypes } from "../colors/profile/Tools";
import { list, ListColorTypes } from "../colors/projects/List";
import { details, DetailsColorTypes } from "../colors/projects/Details";

export interface CustomThemeTypes {
  page: PageColorTypes;
  cursor: CursorColorTypes;
  scrollbar: ScrollBarColorTypes;
  timer: TimerColorTypes;
  gnbSitemapBtn: GnbSitemapBtnTypes;
  gnbUtilBtn: GnbUtilTypes;
  gnbThemeMenu: ThemeMenuTypes;
  sectionHeader: SectionHeaderTypes;
  visualSection: VisualTypes;
  introSection: IntroTypes;
  footer: FooterTypes;
  career: CareerColorTypes;
  exp: ExpColorTypes;
  tools: ToolsColorTypes;
  projectList: ListColorTypes;
  projectDetails: DetailsColorTypes;
}

export interface CustomThemeModeTypes {
  [key: string]: CustomThemeTypes;
  light: CustomThemeTypes;
  dark: CustomThemeTypes;
}

export const customThemes: CustomThemeModeTypes = {
  light: {
    page: page.light,
    cursor: cursor.light,
    scrollbar: scrollbar.light,
    timer: timer.light,
    gnbSitemapBtn: gnbSitemapBtn.light,
    gnbUtilBtn: gnbUtilBtn.light,
    gnbThemeMenu: GnbThemeMenu.light,
    sectionHeader: sectionHeader.light,
    visualSection: visual.light,
    introSection: intro.light,
    footer: footer.light,
    career: career.light,
    exp: experience.light,
    tools: tools.light,
    projectList: list.light,
    projectDetails: details.light,
  },
  dark: {
    page: page.dark,
    cursor: cursor.dark,
    scrollbar: scrollbar.dark,
    timer: timer.dark,
    gnbSitemapBtn: gnbSitemapBtn.dark,
    gnbUtilBtn: gnbUtilBtn.dark,
    gnbThemeMenu: GnbThemeMenu.dark,
    sectionHeader: sectionHeader.dark,
    visualSection: visual.dark,
    introSection: intro.dark,
    footer: footer.dark,
    career: career.dark,
    exp: experience.dark,
    tools: tools.dark,
    projectList: list.dark,
    projectDetails: details.dark,
  },
};
