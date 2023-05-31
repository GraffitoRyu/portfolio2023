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
} from "@/styles/styled/components/projectList";

// type
import { SummaryType } from "@/types/projects";

export default function ProjectButton({
  className,
  code,
  summary,
}: {
  className?: string | HTMLAttributes<HTMLDivElement>;
  code: string;
  summary: SummaryType;
}) {
  return (
    <ListBtnContainer className={`${className}`} type="button">
      <ListBtnWrap>
        <ListBtnPeriod className="period" date={summary.period} />
        <FadeContainer>
          <ListBtnTitle>{summary.title}</ListBtnTitle>
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
