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
import {
  careerEachOpenState,
  scrollCareerEachItemRefState,
} from "@/jotai/interaction/scroll.state";

// hooks
import useCheckView from "@/hooks/layout/useCheckView";

// util
import { dateFormat } from "@/utils/data/dateTime.util";
import { isValidDateType } from "@/utils/data/validation.util";

export default function CareerSummary({
  code,
  period,
  role,
  company,
}: CareerSummaryProps) {
  const itemEl = useAtomValue(scrollCareerEachItemRefState(code));

  const [isOpen, setOpen] = useAtom(careerEachOpenState(code));
  const [hover, setHover] = useState<boolean>(false);

  const { isCustomView } = useCheckView(768);

  const convertPeriod = useCallback(
    (date: string): string => {
      return date === ""
        ? "재직중"
        : !isValidDateType(date)
          ? date
          : dateFormat(date, {
              formatTimezone: "ko-KR",
              formatOptions: {
                year: isCustomView ? "2-digit" : "numeric",
                // day를 undefined하면 month가 두자리 변환되지 않음
              },
            })
              .split(" ")
              .filter((_, i) => i < 2) // day 제거
              .join(" ")
              .trim();
    },
    [isCustomView],
  );

  const onOpenDetails = useCallback(
    (e: React.SyntheticEvent) => {
      if (itemEl === null) return;
      e.preventDefault();

      const updateOpen = !isOpen;
      setOpen(updateOpen);

      if (updateOpen) itemEl.open = true;
      // 닫힘 모션 끝나고 업데이트
      else
        setTimeout(() => {
          itemEl.open = false;
        }, 400);
    },
    [isOpen, itemEl, setOpen],
  );

  // open 상태가 정의되지 않은 경우 초기화
  useEffect(() => {
    if (typeof isOpen !== "boolean") setOpen(false);
  }, [code, isOpen, setOpen]);

  return (
    <StyledCareerSummaryContainer
      className={hover ? "hover" : ""}
      onClick={onOpenDetails}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledCareerPeriod>
        <span>{convertPeriod(period[0])}</span>
      </StyledCareerPeriod>
      <StyledCareerPeriod>
        <span>{convertPeriod(period[1])}</span>
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
