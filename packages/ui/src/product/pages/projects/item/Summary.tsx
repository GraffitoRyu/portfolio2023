// components
import {
  StyledFadeContainer,
  StyledFadeListContainer,
  StyledListBtnContainer,
  StyledListBtnDesc,
  StyledListBtnPeriod,
  StyledListBtnRole,
  StyledListBtnTitle,
  StyledListBtnWrap,
} from "@graffitoryu/ui/product/styles/styled/components/ProjectList";

export default function ProjectSummary({
  className,
  code,
  summary,
}: {
  className?: string | React.HTMLAttributes<HTMLDivElement>;
  code: string;
  summary: SummaryType;
}) {
  return (
    <StyledListBtnContainer className={`${className ? className : ""}`}>
      <StyledListBtnWrap>
        <StyledListBtnPeriod className="period" date={summary.period} />
        <StyledFadeContainer>
          <StyledListBtnTitle>{summary.title.join(" ")}</StyledListBtnTitle>
        </StyledFadeContainer>
        <StyledFadeContainer>
          <StyledListBtnDesc>{summary.desc}</StyledListBtnDesc>
        </StyledFadeContainer>
        <StyledFadeListContainer as="ul">
          {summary.role.map((d: string, i: number) => (
            <StyledListBtnRole key={`projects/list/summary/${code}/role/${i}`}>
              {d}
            </StyledListBtnRole>
          ))}
        </StyledFadeListContainer>
      </StyledListBtnWrap>
    </StyledListBtnContainer>
  );
}
