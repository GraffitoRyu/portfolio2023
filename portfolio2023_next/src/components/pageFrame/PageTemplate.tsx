// components
import ScrollContainer from "./ScrollContainer";
import PageStickyContainer from "./PageStickyContainer";
import PageFooter from "@/components/pageFrame/pageFooter/PageFooter";

/**
 * 페이지 공통 구조 템플릿
 * @component
 */
export default function PageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollContainer>
      <PageStickyContainer>{children}</PageStickyContainer>
      <PageFooter />
    </ScrollContainer>
  );
}
