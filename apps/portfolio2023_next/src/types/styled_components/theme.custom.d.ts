interface CustomThemeTypes {
  page: PageColorTypes;
  cursor: CursorColorTypes;
  scrollbar: ScrollBarColorTypes;
  buttons: BtnColorTypes;
  transCover: TransCoverColorTypes;
  initCover: InitCoverColorTypes;
  timer: PageHeaderTimerColorTypes;
  gnbSitemapBtn: PageHeaderGnbSitemapBtnTypes;
  gnbUtilBtn: PageHeaderGnbUtilTypes;
  gnbThemeMenu: PageHeaderThemeMenuTypes;
  sectionHeader: PageSectionHeaderColorTypes;
  visualSection: PageSectionVisualTypes;
  introSection: PageSectionIntroColorTypes;
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
