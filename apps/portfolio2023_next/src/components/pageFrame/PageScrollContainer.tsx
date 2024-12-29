// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";

// state
import SimpleScrollContainer from "../scroll/SimpleScrollContainer";

/**
 * 스크롤 컨테이너
 * @component
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function ScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledScrollContainer>
      <SimpleScrollContainer standard="page">{children}</SimpleScrollContainer>
    </StyledScrollContainer>
  );
}
