import { useParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import DetailInfoItem from "../../common/info/DetailInfoItem";
import DetailInfoTitle from "../../common/info/DetailInfoTitle";
import DetailInfoContents from "../../common/info/DetailInfoContents";

// style components
import { PDSummaryContainer } from "@/styles/styled/components/ProjectDetail";

// state
import { detailData, detailLayoutState } from "@/states/detail";
import { detailScrollRefState } from "@/states/scroll";

// type
import { DetailTypes } from "@/types/projectDetails";
import { ProjectsType } from "@/types/projects";
import {
  DetailLayoutStateTypes,
  DetailScrollRefStateTypes,
} from "@/types/state";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

type SummaryProps = {
  itemType: string;
  title: string;
  contents: string[];
};

export default function DetailSummary() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [summaryData, setSummaryData] = useState<SummaryProps[] | null>(null);

  const { openComplete } =
    useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);
  const [delayIndex, setDelayIndex] = useState<number>(1);
  const [hide, setHide] = useState<string>("init-hide hide");

  const { container: scrollContainer, scrollHeight } =
    useRecoilValue<DetailScrollRefStateTypes>(detailScrollRefState);
  const summaryRef = useRef<HTMLDListElement[]>([]);

  useLayoutEffect(() => {
    if (typeof category === "string" && data?.[category]) {
      setSummaryData(getSummaryData(data[category]));
      const d = data[category].summary;
      if (d?.title?.length > 0 && d?.desc) setDelayIndex(d.title.length);
    } else {
      setSummaryData([]);
      setDelayIndex(1);
    }
  }, [category, data]);

  useEffect(() => {
    if (openComplete) {
      setHide("init-hide");
      setTimeout(() => {
        setHide("");
      }, 1600);
    } else {
      setHide("init-hide hide");
    }
  }, [openComplete]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!openComplete) return;

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
  }, [openComplete, scrollContainer, scrollHeight]);

  return (
    <PDSummaryContainer>
      {summaryData?.map((d: SummaryProps, i: number) => (
        <DetailInfoItem
          code="summary"
          className={`${hide}`}
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
    </PDSummaryContainer>
  );
}

function getSummaryData({ summary, service }: ProjectsType): SummaryProps[] {
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
