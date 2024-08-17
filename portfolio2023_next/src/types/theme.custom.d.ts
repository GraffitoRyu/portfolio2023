interface CustomThemeTypes {
  page: CommonPageColorTypes;
  cursor: CommonCursorColorTypes;
  scrollbar: CommonScrollBarColorTypes;
  buttons: CommonBtnColorTypes;
  transCover: TransCoverColorTypes;
  initCover: InitCoverColorTypes;
  timer: PageHeaderTimerColorTypes;
  gnbSitemapBtn: PageHeaderGnbSitemapBtnTypes;
  gnbUtilBtn: PageHeaderGnbUtilTypes;
  gnbThemeMenu: PageHeaderThemeMenuTypes;
  sectionHeader: PageSectionHeaderTypes;
  visualSection: PageSectionVisualTypes;
  introSection: PageSectionIntroTypes;
  footer: PageFooterTypes;
  career: ProfileCareerColorTypes;
  exp: ProfileExperienceColorTypes;
  stacks: ProfileStacksColorTypes;
  projectList: ProjectsListColorTypes;
  projectDetails: ProjectsDetailColorTypes;
}

interface CustomThemeModeTypes {
  [index: string]: CustomThemeTypes;
  light: CustomThemeTypes;
  dark: CustomThemeTypes;
}
