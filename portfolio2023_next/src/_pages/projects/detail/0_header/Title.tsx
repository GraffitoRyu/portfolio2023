import { useCallback, useMemo, useRef } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledPDHeaderPageName,
  StyledPDHeaderProjectName,
  StyledPDHeaderTitleContainer,
} from "@/styles/styled/components/ProjectDetail";

// state
import { pageDetailLoadState } from "@/jotai/load.state";
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// hooks
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

export default function DetailHeaderTitle() {
  const { title: titleArr } = useProjectCategoryDetailData();

  const { openComplete } = useAtomValue(pageDetailLoadState);
  const sectionVisual = useAtomValue(
    scrollDetailSectionRefState("sectionVisual"),
  );
  const visualTitle = useAtomValue(scrollDetailSectionRefState("visualTitle"));
  const titleRef = useRef<HTMLSpanElement>(null);

  const title = useMemo(
    (): string => (titleArr ? titleArr.join("") : ""),
    [titleArr],
  );

  const targetStart = useCallback(
    () => (visualTitle?.offsetTop || 0) + (visualTitle?.clientHeight || 0),
    [visualTitle?.clientHeight, visualTitle?.offsetTop],
  );
  const triggerStart = useCallback(() => titleRef.current?.offsetTop || 0, []);

  useGSAPAnimation(
    {
      key: "projects/detail/header/title",
      disabled: !openComplete,
      elements: [titleRef.current, sectionVisual, visualTitle],
      options: [
        {
          target: titleRef.current,
          animation: [
            {
              opacity: 1,
              scrollTrigger: {
                trigger: sectionVisual,
                start: () => `${targetStart()} ${triggerStart()}`,
                end: () => `bottom ${triggerStart()}`,
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          ],
        },
      ],
    },
    [openComplete, targetStart, triggerStart],
  );

  return (
    <StyledPDHeaderTitleContainer>
      <StyledPDHeaderPageName>프로젝트</StyledPDHeaderPageName>
      <StyledPDHeaderProjectName ref={titleRef}>
        {title}
      </StyledPDHeaderProjectName>
    </StyledPDHeaderTitleContainer>
  );
}
