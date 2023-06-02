// components
import Gnb from "./Gnb";
import TimeDisplay from "./TimeDisplay";

// style components
import { HeaderContainer } from "@/styles/styled/components/pageHeader";

export default function PageHeader() {
  return (
    <HeaderContainer>
      <TimeDisplay />
      <Gnb />
    </HeaderContainer>
  );
}
