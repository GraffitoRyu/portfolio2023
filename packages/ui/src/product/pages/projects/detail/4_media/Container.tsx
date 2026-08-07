import { useMemo } from "react";

// components
import DetailMediaItem from "./Item";

// style components
import { StyledPDMediaSection } from "@graffitoryu/ui/product/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@graffitoryu/ui/product/hooks/data/useProjectCategoryDetailData";

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
