import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

// components
import CloseButton from "@/components/buttons/Close";

// style components
import { ProjectDetailHeader } from "@/styles/styled/components/ProjectDetail";

// state
import { pageState, pageStateTypes } from "@/states/page";
import DetailHeaderTitle from "./header/DetailHeaderTitle";

export default function DetailHeader() {
  const router = useRouter();
  const setPage = useSetRecoilState<pageStateTypes>(pageState);
  const closeDetail = () => {
    setPage(prev => ({ ...prev, bottomSheetOpen: false }));
    router.back();
  };
  return (
    <ProjectDetailHeader>
      <DetailHeaderTitle />
      <CloseButton clickEvent={closeDetail} />
    </ProjectDetailHeader>
  );
}
