import { useParams } from "next/navigation";
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
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [linkData, setLinkData] = useState<LinkType[] | []>([]);

  useEffect(() => {
    if (typeof category !== "string" || !data?.[category]) return;

    const d = data[category];
    if (d?.service) setLinkData(d?.service.link);
  }, [category, data]);

  return (
    <PDLinkContainer>
      {linkData.map((l: LinkType, i: number) => (
        <DetailExternalBtn key={`DetailLink_${l.code}_${i}`} {...l} />
      ))}
    </PDLinkContainer>
  );
}
