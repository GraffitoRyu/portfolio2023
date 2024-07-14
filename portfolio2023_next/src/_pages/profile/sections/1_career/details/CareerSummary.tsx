"use client";

import { useCallback, useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";

import {
  StyledCareerCompany,
  StyledCareerExpandCell,
  StyledCareerExpandIcon,
  StyledCareerPeriod,
  StyledCareerRole,
  StyledCareerSummaryContainer,
} from "@/styles/styled/components/ProfileCareer";

// state
import { viewportState } from "@/jotai/viewport.state";
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";

interface CareerSummaryProps extends CareerSummaryTypes {
  code: string;
}

export default function CareerSummary({
  code,
  period,
  role,
  company,
}: CareerSummaryProps) {
  const { windowWidth } = useAtomValue(viewportState);
  const [{ careerItems, careerOpen }, setScrollRef] =
    useAtom<ScrollRefStateTypes>(scrollPageRefState);

  const [hover, setHover] = useState<string>("");

  const openDetails = useCallback(
    (e: React.SyntheticEvent) => {
      const container = careerItems[code];
      if (!container) return;

      e.preventDefault();
      const isOpen = careerOpen[code];
      if (isOpen) {
        setScrollRef(prev => ({
          ...prev,
          careerOpen: {
            ...prev.careerOpen,
            [code]: false,
          },
        }));
        // 닫힘 모션 끝나고 업데이트
        setTimeout(() => {
          container.open = false;
        }, 400);
      } else {
        container.open = true;
        setScrollRef(prev => ({
          ...prev,
          careerOpen: {
            ...prev.careerOpen,
            [code]: true,
          },
        }));
      }
    },
    [careerItems, careerOpen, code, setScrollRef],
  );

  useEffect(() => {
    if (typeof careerOpen[code] !== "boolean")
      setScrollRef(prev => ({
        ...prev,
        careerOpen: {
          ...prev.careerOpen,
          [code]: false,
        },
      }));
  }, [careerOpen, code, setScrollRef]);

  return (
    <StyledCareerSummaryContainer
      className={`${hover}`}
      onClick={openDetails}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <StyledCareerPeriod>
        <span>{convertPeriod(period[0], windowWidth)}</span>
      </StyledCareerPeriod>
      <StyledCareerPeriod>
        <span>{convertPeriod(period[1], windowWidth)}</span>
      </StyledCareerPeriod>
      <StyledCareerRole>
        <span>{role}</span>
      </StyledCareerRole>
      <StyledCareerCompany>
        <span>{company}</span>
      </StyledCareerCompany>
      <StyledCareerExpandCell>
        <StyledCareerExpandIcon />
      </StyledCareerExpandCell>
    </StyledCareerSummaryContainer>
  );
}

function convertPeriod(date: string, windowWidth: number): string {
  if (
    typeof date !== "undefined" &&
    new Date(date) instanceof Date &&
    !isNaN(new Date(date).valueOf())
  )
    return `${periodVal("year", date)}. ${periodVal("month", date)}.`.slice(
      windowWidth < 768 ? 2 : 0,
    );
  return date === "" ? "재직중" : date;
}

function periodVal(type: string, value: string) {
  return new Date(value).toLocaleString("en-US", {
    [type]: type === "year" ? "numeric" : "2-digit",
  });
}
