// components
import Gnb from "./Gnb";
import TimeDisplay from "./TimeDisplay";

// style components
import {
  HeaderContainer,
  StyledHeaderWrap,
} from "@/styles/styled/components/PageHeader";

export default function PageHeader() {
  return (
    <HeaderContainer>
      <StyledHeaderWrap>
        <TimeDisplay />
        <Gnb />
      </StyledHeaderWrap>
    </HeaderContainer>
  );
}
