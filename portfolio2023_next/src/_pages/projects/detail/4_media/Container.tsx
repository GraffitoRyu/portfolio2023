import { useMemo } from "react";

// components
import DetailMediaItem from "./Item";

// style components
import { StyledPDMediaSection } from "@/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

export default function DetailMediaContainer() {
  const { category, data } = useProjectCategoryDetailData();
  const media = useMemo(
    (): MediaType[] => (typeof data?.media === "undefined" ? [] : data.media),
    [data?.media],
  );

  return (
    <StyledPDMediaSection>
      {media.map((m: MediaType, i: number) => (
        <DetailMediaItem key={`detailMedia_${category}_${i}`} data={m} />
      ))}
    </StyledPDMediaSection>
  );
}
