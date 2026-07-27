/**
 * 컴포넌트 props; <PageSectionContainer />
 * @props
 */
interface PageSectionContainerProps {
  /** 페이지 카테고리 */
  page: string;
  /** 섹션 코드 */
  code: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * 컴포넌트 props; <PageSectionHeader />
 * @props
 */
interface SectionHeaderProps {
  title: string;
  desc: (string | React.ReactNode)[];
  empty: boolean;
  className: string;
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
