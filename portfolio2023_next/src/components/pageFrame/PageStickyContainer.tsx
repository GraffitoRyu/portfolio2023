// components
import PageHeader from "./pageHeader/PageHeader";

// style components
import { StyledStickyContainer } from "@/styles/styled/components/Page";

/**
 * 페이지 공통 요소; Sticky Header를 위한 컨테이너
 * @component
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function PageStickyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledStickyContainer className="sticky-container">
      <PageHeader />
      {children}
    </StyledStickyContainer>
  );
}
