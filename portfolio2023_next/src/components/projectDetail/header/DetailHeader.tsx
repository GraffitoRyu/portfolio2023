import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

// components
import CloseButton from "@/components/buttons/Close";
import DetailHeaderTitleContainer from "@/components/projectDetail/header/DetailHeaderTitleContainer";

// style components
import { PDHeader } from "@/styles/styled/components/ProjectDetail";
import { StyledHeaderWrap } from "@/styles/styled/components/PageHeader";

// types
import { pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function DetailHeader() {
  const router = useRouter();
  const setPage = useSetRecoilState<pageStateTypes>(pageState);
  const closeDetail = () => {
    setPage(prev => ({ ...prev, bottomSheetOpen: false }));

    // bottom sheet가 모두 들어 간 뒤 경로 이동
    setTimeout(() => {
      router.back();
    }, transTime.detail.sheetSlideTime);
  };
  return (
    <PDHeader>
      <StyledHeaderWrap>
        <DetailHeaderTitleContainer />
        <CloseButton clickEvent={closeDetail} />
      </StyledHeaderWrap>
    </PDHeader>
  );
}
