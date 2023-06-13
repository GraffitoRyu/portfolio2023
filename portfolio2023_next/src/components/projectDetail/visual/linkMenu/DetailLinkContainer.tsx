import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import DetailExternalBtn from "./DetailExternalBtn";

// style components
import { PDLinkContainer } from "@/styles/styled/components/ProjectDetail";

// types
import { DetailTypes } from "@/types/projectDetails";
import { LinkType } from "@/types/projects";

// state
import { detailData } from "@/states/detail";

export default function DetailLinkContainer() {
  const params = useSearchParams();
  const code = params.get("code");
  const data = useRecoilValue<DetailTypes>(detailData);
  const [linkData, setLinkData] = useState<LinkType[] | []>([]);

  useEffect(() => {
    if (!code) return;
    const d = data[code];
    if (d?.service) setLinkData(d?.service.link);
  }, [code, data]);

  return (
    <PDLinkContainer>
      {linkData.map((l: LinkType, i: number) => (
        <DetailExternalBtn key={`DetailLink_${l.code}_${i}`} {...l} />
      ))}
    </PDLinkContainer>
  );
}
