import "styled-components";

// color types
import type * as ColorTypes from "@/types/colors/colorTypes";

declare module "styled-components" {
  export interface DefaultTheme {
    page: ColorTypes.common.PageColorTypes;
    cursor: ColorTypes.common.CursorColorTypes;
    scrollbar: ColorTypes.common.ScrollBarColorTypes;
    buttons: ColorTypes.common.BtnColorTypes;
    transCover: ColorTypes.common.TransCoverColorTypes;
    initCover: ColorTypes.common.InitCoverColorTypes;
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
}
