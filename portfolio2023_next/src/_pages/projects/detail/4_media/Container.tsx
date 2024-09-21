import { useMemo } from "react";

// components
import DetailMediaItem from "./Item";

// style components
import { StyledPDMediaSection } from "@/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

export default function DetailMediaContainer() {
  const { category, data, openComplete } = useProjectCategoryDetailData();
  const media = useMemo(
    () => (typeof data?.media === "undefined" ? [] : data.media),
    [data?.media],
  );

  return (
    <StyledPDMediaSection>
      {media.map((m, i) => (
        <DetailMediaItem
          key={`projects/detail/media/${category}/${i}`}
          data={m}
          openComplete={openComplete}
        />
      ))}
    </StyledPDMediaSection>
  );
}
