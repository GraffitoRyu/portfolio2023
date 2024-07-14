"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

// components
import DetailExternalBtn from "./DetailExternalBtn";

// style components
import { PDLinkContainer } from "@/styles/styled/components/ProjectDetail";

// state
import { projectDetailDataState } from "@/jotai/pages/project.detail.state";

export default function DetailLinkContainer() {
  const { category } = useParams();
  const data = useAtomValue<DetailTypes>(projectDetailDataState);
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
