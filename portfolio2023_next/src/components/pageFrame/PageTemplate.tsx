// components
import ScrollContainer from "./ScrollContainer";
import PageStickyContainer from "./PageStickyContainer";
import PageFooter from "@/components/pageFrame/pageFooter/PageFooter";

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
