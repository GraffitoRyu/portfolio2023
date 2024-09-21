import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// components
import DetailInfoItem from "../../common/info/Item";
import DetailInfoTitle from "../../common/info/Title";
import DetailInfoContents from "../../common/info/Contents";

// style components
import { StyledPDSummaryContainer } from "@/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

// state
import { pageDetailLoadState } from "@/jotai/load.state";
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function DetailSummary() {
  const { data, title } = useProjectCategoryDetailData();

  const { openComplete } =
    useAtomValue<PageDetailLoadStateTypes>(pageDetailLoadState);

  const delayIndex = useMemo(() => (title ? title.length : 1), [title]);
  const summaryData = useMemo(
    (): SummaryProps[] => (data ? getSummaryData(data) : []),
    [data],
  );

  const scrollContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const summaryRef = useRef<HTMLDListElement[]>([]);

  const isHide = useMemo((): boolean => !openComplete, [openComplete]);
  const [isInit, setInit] = useState<boolean>(true);

  useEffect(() => {
    if (!openComplete) {
      setInit(true);
      return;
    }

    setTimeout(() => {
      setInit(false);
    }, 1600);
  }, [openComplete]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (isInit) return;

    if (!scrollContainer) return;

    const summaryItems = summaryRef.current;
    if (!summaryItems || summaryItems?.length == 0) return;

    const tweenArr = summaryItems.map((target: HTMLDListElement) => ({
      target,
      options: [
        {
          opacity: 0,
          scrollTrigger: {
            trigger: target,
            start: `top 30%`,
            end: `top top`,
            scrub: true,
          },
        },
      ],
    }));

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      timeline: true,
      tweenArr,
    });

    return () => ctx.revert();
  }, [isInit, scrollContainer]);

  return (
    <StyledPDSummaryContainer>
      {summaryData?.map((d: SummaryProps, i: number) => (
        <DetailInfoItem
          code="summary"
          className={`${isHide ? "hide" : ""} ${isInit ? "init-hide" : ""}`}
          key={`detailSummaryItem_${d.itemType}_${i}`}
          $itemIndex={i + 1}
          $delayIndex={delayIndex}
          ref={(node: HTMLDListElement) => {
            summaryRef.current[i] = node;
          }}
        >
          <DetailInfoTitle code="summary" title={d.title} />
          <DetailInfoContents
            code="summary"
            title={d.title}
            contents={d.contents}
          />
        </DetailInfoItem>
      ))}
    </StyledPDSummaryContainer>
  );
}

function getSummaryData({
  summary,
  service,
}: ProjectsAPIDataType): SummaryProps[] {
  return [
    {
      itemType: "serviceType",
      title: "Type",
      contents: [service?.serviceType ?? "---"],
    },
    {
      itemType: "provider",
      title: "Provider",
      contents: [service?.provider ?? "---"],
    },
    {
      itemType: "period",
      title: "Period",
      contents: [
        summary?.period
          ? `${getPeriod(summary.period[0])} - ${getPeriod(summary.period[1])}`
          : "0000.00. - 0000.00.",
      ],
    },
    {
      itemType: "role",
      title: "Role",
      contents: [summary?.role.join(" / ") ?? "---"],
    },
  ];

  function getPeriod(date: string): string {
    return `${convertDate("year", date)}. ${convertDate("month", date)}.`;
  }

  function convertDate(type: string, value: string) {
    return new Date(value).toLocaleString("en-US", {
      [type]: type === "year" ? "numeric" : "2-digit",
    });
  }
}
