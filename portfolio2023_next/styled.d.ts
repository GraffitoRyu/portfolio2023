import "styled-components";

// color types
import { PageColorTypes } from "@/styles/colors/common/Page";
import { CursorColorTypes } from "@/styles/colors/common/Cursor";
import { ScrollBarColorTypes } from "@/styles/colors/common/Scrollbar";
import { TimerColorTypes } from "@/styles/colors/pageHeader/Timer";
import { GnbSitemapBtnTypes } from "@/styles/colors/pageHeader/SitemapBtn";
import { GnbUtilTypes } from "@/styles/colors/pageHeader/UtilBtn";
import { ThemeMenuTypes } from "@/styles/colors/pageHeader/ThemeMenu";
import { SectionHeaderTypes } from "@/styles/colors/pageSection/Header";
import { VisualTypes } from "@/styles/colors/pageSection/Visual";
import { IntroTypes } from "@/styles/colors/pageSection/Intro";
import { FooterTypes } from "@/styles/colors/pageFooter/Footer";
import { CareerColorTypes } from "@/styles/colors/profile/Career";
import { ExpColorTypes } from "@/styles/colors/profile/Experience";
import { ToolsColorTypes } from "@/styles/colors/profile/Tools";
import { ListColorTypes } from "@/styles/colors/projects/List";
import { DetailsColorTypes } from "@/styles/colors/projects/Details";

declare module "styled-components" {
  export interface DefaultTheme {
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
}
