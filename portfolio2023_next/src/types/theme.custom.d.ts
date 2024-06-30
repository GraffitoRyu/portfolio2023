interface CustomThemeTypes {
  page: PageColorTypes;
  cursor: CursorColorTypes;
  scrollbar: ScrollBarColorTypes;
  buttons: BtnColorTypes;
  transCover: TransCoverColorTypes;
  initCover: InitCoverColorTypes;
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
  stacks: ColorTypes.profile.StacksColorTypes;
  projectList: ColorTypes.projectsList.ListColorTypes;
  projectDetails: ColorTypes.projectDetail.DetailColorTypes;
}

interface CustomThemeModeTypes {
  [index: string]: CustomThemeTypes;
  light: CustomThemeTypes;
  dark: CustomThemeTypes;
}
