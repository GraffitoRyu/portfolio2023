// style components
import {
  StyledExpContents,
  StyledExpDesc,
  StyledExpItem,
  StyledExpTitle,
} from "@/styles/styled/components/ProfileExperience";

interface ExpItemProps extends ExperienceTypes {
  isActive: boolean;
  $totalLength: number;
}

export default function ProfileExperienceItem({
  code,
  desc,
  isActive,
  $totalLength,
}: ExpItemProps) {
  return (
    <StyledExpItem className={isActive ? "on" : ""} $totalLength={$totalLength}>
      <StyledExpContents>
        <StyledExpTitle>
          <span>{code}</span>
        </StyledExpTitle>
        {desc?.map((p: string, i: number) => (
          <StyledExpDesc key={`exp_${code}_depth1_${i}`}>
            <span>{p}</span>
          </StyledExpDesc>
        ))}
      </StyledExpContents>
    </StyledExpItem>
  );
}
