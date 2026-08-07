"use client";

import { useMemo } from "react";

// components
import DetailExternalBtn from "./ExternalBtn";

// style components
import { StyledPDLinkContainer } from "@graffitoryu/ui/product/styles/styled/components/ProjectDetail";

// state
import useProjectCategoryDetailData from "@graffitoryu/ui/product/hooks/data/useProjectCategoryDetailData";

export default function DetailLinkContainer() {
  const { data } = useProjectCategoryDetailData();
  const linkData = useMemo(
    () => (typeof data?.service?.link === "undefined" ? [] : data.service.link),
    [data?.service?.link],
  );

  return (
    <StyledPDLinkContainer>
      {linkData.map((l: LinkType, i: number) => (
        <DetailExternalBtn key={`DetailLink_${l.code}_${i}`} {...l} />
      ))}
    </StyledPDLinkContainer>
  );
}
