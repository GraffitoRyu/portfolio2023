"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// util
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

export default function DetailSummary() {
  const { data, title, openComplete } = useProjectCategoryDetailData();

  const delayIndex = useMemo(() => (title ? title.length : 1), [title]);
  const summaryData = useMemo(() => (data ? getSummaryData(data) : []), [data]);

  const detailContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const summaryRef = useRef<(HTMLDListElement | null)[]>(
    Array(summaryData.length).fill(null),
  );

  const isHide = useMemo(() => !openComplete, [openComplete]);
  const [isInit, setInit] = useState<boolean>(true);

  useEffect(() => {
    if (!openComplete) {
      if (isInit !== true) setInit(true);
      return;
    }

    if (isInit === false) return;

    const timer = setTimeout(() => {
      setInit(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, [isInit, openComplete]);

  const fadeOutOptions = useCallback(
    (): UseGSAPAnimationHookOptions[] =>
      summaryRef.current.map(target => ({
        target,
        animation: [
          {
            opacity: 0,
            scrollTrigger: {
              trigger: target,
              start: "top 30%",
              end: "top top",
              scrub: true,
              // markers: true,
            },
          },
        ],
      })),
    [],
  );

  useGSAPAnimation(
    {
      key: "projects/detail/visual/summary",
      container: detailContainer,
      disabled: !openComplete || isInit,
      elements: summaryRef.current,
      options: [...fadeOutOptions()],
    },
    [isInit, openComplete, fadeOutOptions],
  );

  return (
    <StyledPDSummaryContainer>
      {summaryData?.map((d: SummaryProps, i: number) => (
        <DetailInfoItem
          code="summary"
          className={`${isHide ? "hide" : ""} ${isInit ? "init-hide" : ""}`}
          key={`projects/detail/summary/item/${d.itemType}`}
          $itemIndex={i + 1}
          $delayIndex={delayIndex}
          ref={node => {
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
