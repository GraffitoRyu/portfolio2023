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
import {
  careerOpenState,
  scrollCareerRefState,
} from "@/jotai/interaction/scroll.state";

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
  const { [code]: itemRef } = useAtomValue(scrollCareerRefState);
  const [{ [code]: isOpen }, setOpen] = useAtom(careerOpenState);

  const [hover, setHover] = useState<string>("");

  const openDetails = useCallback(
    (e: React.SyntheticEvent) => {
      const container = itemRef;
      if (!container) return;

      e.preventDefault();

      if (isOpen) {
        setOpen(prev => ({
          ...prev,
          [code]: false,
        }));
        // 닫힘 모션 끝나고 업데이트
        setTimeout(() => {
          container.open = false;
        }, 400);
      } else {
        container.open = true;
        setOpen(prev => ({
          ...prev,
          [code]: true,
        }));
      }
    },
    [code, isOpen, itemRef, setOpen],
  );

  useEffect(() => {
    if (typeof isOpen !== "boolean")
      setOpen(prev => ({
        ...prev,
        [code]: false,
      }));
  }, [code, isOpen, setOpen]);

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
