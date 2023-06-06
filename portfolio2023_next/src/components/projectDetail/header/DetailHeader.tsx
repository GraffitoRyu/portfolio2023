import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

// components
import CloseButton from "@/components/buttons/Close";
import DetailHeaderTitleContainer from "@/components/projectDetail/header/DetailHeaderTitleContainer";

// style components
import {
  PDHeaderContainer,
  PDHeader,
} from "@/styles/styled/components/ProjectDetail";

// state
import { pageState, pageStateTypes } from "@/states/page";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function DetailHeader() {
  const router = useRouter();
  const setPage = useSetRecoilState<pageStateTypes>(pageState);
  const closeDetail = () => {
    setPage(prev => ({ ...prev, bottomSheetOpen: false }));
    // bottom sheet가 모두 들어 간 뒤 경로 이동
    console.log("close time:", transTime.detail.sheetSlideTime);
    setTimeout(() => {
      router.back();
    }, transTime.detail.sheetSlideTime);
  };
  return (
    <PDHeader>
      <PDHeaderContainer>
        <DetailHeaderTitleContainer />
        <CloseButton clickEvent={closeDetail} />
      </PDHeaderContainer>
    </PDHeader>
  );
}
