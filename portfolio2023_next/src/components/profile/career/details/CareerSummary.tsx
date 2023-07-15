"use client";

import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import {
  CareerCompany,
  CareerExpandCell,
  CareerExpandIcon,
  CareerPeriod,
  CareerRole,
  CareerSummaryContainer,
} from "@/styles/styled/components/ProfileCareer";

// types
import { CareerSummaryTypes } from "@/types/profile";
import { ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";

interface CareerSummaryProps extends CareerSummaryTypes {
  code: string;
}

export default function CareerSummary({
  code,
  period,
  role,
  company,
}: CareerSummaryProps) {
  const [{ careerItems, careerOpen }, setScrollRef] =
    useRecoilState<ScrollRefStateTypes>(scrollRefState);

  const [hover, setHover] = useState<string>("");

  const openDetails = useCallback(
    (e: SyntheticEvent) => {
      const container = careerItems[code];
      if (!container) return;

      e.preventDefault();
      const isOpen = careerOpen[code];
      // console.log(`[${code}] isOpen`, isOpen);
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
    [careerItems, careerOpen, code, setScrollRef]
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
    <CareerSummaryContainer
      className={`${hover}`}
      onClick={openDetails}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <CareerPeriod>
        <span>{convertPeriod(period[0])}</span>
      </CareerPeriod>
      <CareerPeriod>
        <span>{convertPeriod(period[1])}</span>
      </CareerPeriod>
      <CareerRole>
        <span>{role}</span>
      </CareerRole>
      <CareerCompany>
        <span>{company}</span>
      </CareerCompany>
      <CareerExpandCell>
        <CareerExpandIcon />
      </CareerExpandCell>
    </CareerSummaryContainer>
  );
}

function convertPeriod(date: string): string {
  return `${periodVal("year", date)}. ${periodVal("month", date)}.`;
}

function periodVal(type: string, value: string) {
  return new Date(value).toLocaleString("en-US", {
    [type]: type === "year" ? "numeric" : "2-digit",
  });
}
