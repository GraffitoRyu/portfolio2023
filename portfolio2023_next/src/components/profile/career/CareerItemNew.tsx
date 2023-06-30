"use client";

import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  CareerBorder,
  CareerCompany,
  CareerDetailContainer,
  CareerDetailItem,
  CareerDetailItemDesc,
  CareerDetailItemTitle,
  CareerDetailList,
  CareerExpandCell,
  CareerExpandIcon,
  CareerItemContainer,
  CareerPeriod,
  CareerRole,
  CareerSummaryContainer,
  CareerWrap,
} from "@/styles/styled/components/ProfileCareer";

// type
import { CareerTypes } from "@/types/profile";

interface CareerItemProps extends CareerTypes {
  last?: boolean;
}

export default function CareerItemNew({
  code,
  summary,
  details,
  last,
}: CareerItemProps) {
  const [open, setOpen] = useState<string>("");
  const [hover, setHover] = useState<string>("");
  const detailsContainerRef = useRef<HTMLDetailsElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const [detailHeight, setDetailHeight] = useState<number>(0);

  const updateDetailHeight = useCallback(() => {
    if (detailRef?.current) setDetailHeight(detailRef.current.offsetHeight);
  }, []);

  const openDetails = useCallback((e: SyntheticEvent) => {
    if (!detailsContainerRef.current) return;
    e.preventDefault();
    const isOpen = detailsContainerRef.current.open;

    if (isOpen) {
      setOpen("");
      setTimeout(() => {
        if (detailsContainerRef?.current)
          detailsContainerRef.current.open = false;
      }, 400);
    } else {
      detailsContainerRef.current.open = true;
      setOpen("open");
    }
  }, []);

  useEffect(() => {
    if (detailRef?.current) setDetailHeight(detailRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", updateDetailHeight);
    return () => window.addEventListener("resize", updateDetailHeight);
  }, [updateDetailHeight]);

  return (
    <CareerItemContainer>
      <CareerBorder className="top" />
      <CareerWrap
        ref={detailsContainerRef}
        className={`${hover} ${open}`}
        onMouseEnter={() => setHover("hover")}
        onMouseLeave={() => setHover("")}
        $height={detailHeight}
      >
        <CareerSummaryContainer onClick={openDetails}>
          <CareerPeriod>
            <span>{period(summary.period[0])}</span>
          </CareerPeriod>
          <CareerPeriod>
            <span>{period(summary.period[1])}</span>
          </CareerPeriod>
          <CareerRole>
            <span>{summary.role}</span>
          </CareerRole>
          <CareerCompany>
            <span>{summary.company}</span>
          </CareerCompany>
          <CareerExpandCell>
            <CareerExpandIcon />
          </CareerExpandCell>
        </CareerSummaryContainer>
        <CareerDetailContainer>
          <CareerDetailList ref={detailRef}>
            <CareerDetailItem>
              <CareerDetailItemTitle>
                <span>담당 업무</span>
              </CareerDetailItemTitle>
              {details.task.map((t: string, i: number) => (
                <CareerDetailItemDesc key={`careerTask_${code}_${i}`}>
                  <span>{t}</span>
                </CareerDetailItemDesc>
              ))}
            </CareerDetailItem>
            <CareerDetailItem>
              <CareerDetailItemTitle>
                <span>주요 활용기술</span>
              </CareerDetailItemTitle>
              <CareerDetailItemDesc>
                <span>{details.stacks.join(", ")}</span>
                {/* {details.stacks.map((stack: string, i: number) => (
                  <span key={`careerStacks_${code}_${i}`}>{stack}</span>
                ))} */}
              </CareerDetailItemDesc>
            </CareerDetailItem>
            <CareerDetailItem>
              <CareerDetailItemTitle>
                <span>참여 프로젝트</span>
              </CareerDetailItemTitle>
              {details.projects.map((project: string, i: number) => (
                <CareerDetailItemDesc key={`careerProjects_${code}_${i}`}>
                  <span>{project}</span>
                </CareerDetailItemDesc>
              ))}
            </CareerDetailItem>
          </CareerDetailList>
        </CareerDetailContainer>
      </CareerWrap>
      {last ? <CareerBorder className="bottom" /> : null}
    </CareerItemContainer>
  );
}

function period(date: string): string {
  return `${periodVal("year", date)}. ${periodVal("month", date)}.`;
}

function periodVal(type: string, value: string) {
  return new Date(value).toLocaleString("en-US", {
    [type]: type === "year" ? "numeric" : "2-digit",
  });
}
