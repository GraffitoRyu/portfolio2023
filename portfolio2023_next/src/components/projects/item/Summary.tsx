import { HTMLAttributes } from "react";

// components
import {
  FadeContainer,
  FadeListContainer,
  ListBtnContainer,
  ListBtnDesc,
  ListBtnPeriod,
  ListBtnRole,
  ListBtnTitle,
  ListBtnWrap,
} from "@/styles/styled/components/ProjectList";

// type
import { SummaryType } from "@/types/projects";

export default function ProjectSummary({
  className,
  code,
  summary,
}: {
  className?: string | HTMLAttributes<HTMLDivElement>;
  code: string;
  summary: SummaryType;
}) {
  return (
    <ListBtnContainer className={`${className ? className : ""}`}>
      <ListBtnWrap>
        <ListBtnPeriod className="period" date={summary.period} />
        <FadeContainer>
          <ListBtnTitle>{summary.title.join(" ")}</ListBtnTitle>
        </FadeContainer>
        <FadeContainer>
          <ListBtnDesc>{summary.desc}</ListBtnDesc>
        </FadeContainer>
        <FadeListContainer as="ul">
          {summary.role.map((d: string, i: number) => (
            <ListBtnRole key={`${code}_role_${i}`}>{d}</ListBtnRole>
          ))}
        </FadeListContainer>
      </ListBtnWrap>
    </ListBtnContainer>
  );
}
