/**
 * 컴포넌트 props; <PageSectionContainer />
 * @props
 */
interface PageSectionContainerProps {
  /**
   * 페이지 카테고리
   */
  page: string;
  /**
   * 섹션 코드
   */
  code: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * 컴포넌트 props; <PageSectionHeader />
 * @props
 */
interface SectionHeaderProps {
  empty: boolean;
  title: string;
  desc: Array<string | React.ReactNode>;
  className: string;
}

interface PageSectionHeaderTypes {
  title: string;
  desc: string | string[];
  empty: boolean;
  className: string;
}

interface PageSectionHeaderModeTypes {
  [index: string]: Partial<PageSectionHeaderTypes>;
  light: Partial<PageSectionHeaderTypes>;
  dark: Partial<PageSectionHeaderTypes>;
}

/**
 * 컴포넌트 props; <PageSectionContents />
 * @props
 */
interface PageSectionContentsProps {
  code?: string;
  children: React.ReactNode;
  sideContents?: React.ReactNode;
  sectionClassName?: string;
  sideClassName?: string;
}

interface PageSectionIntroTypes {
  category: string;
  title: (string | React.ReactNode)[];
  desc: (string | React.ReactNode)[];
}

interface PageSectionIntroColorTypes {
  bgFrom: string;
  bgTo: string;
  title: string;
  strong: string;
  desc: string;
}

interface PageSectionIntroModeTypes {
  [index: string]: PageSectionIntroColorTypes;
  light: PageSectionIntroColorTypes;
  dark: PageSectionIntroColorTypes;
}

interface PageSectionVisualTypes {
  border: string;
  fill: string;
}

interface PageSectionVisualModeTypes {
  [index: string]: PageSectionVisualTypes;
  light: PageSectionVisualTypes;
  dark: PageSectionVisualTypes;
}
