// style components
import {
  ExpContents,
  ExpDesc,
  ExpItem,
  ExpTitle,
} from "@/styles/styled/components/ProfileExperience";

// types
import { ExperienceTypes } from "@/types/profile";

interface ExpItemProps extends ExperienceTypes {
  $totalLength: number;
  $itemIndex: number;
  $activeIndex: number;
}

export default function ExperienceItem({
  code,
  desc,
  $totalLength,
  $itemIndex,
  $activeIndex,
}: ExpItemProps) {
  return (
    <ExpItem
      className={$activeIndex === $itemIndex ? "on" : ""}
      $totalLength={$totalLength}
    >
      <ExpContents>
        <ExpTitle>
          <span>{code}</span>
        </ExpTitle>
        {desc?.map((p: string, i: number) => (
          <ExpDesc key={`exp_${code}_depth1_${i}`}>
            <span>{p}</span>
          </ExpDesc>
        ))}
      </ExpContents>
    </ExpItem>
  );
}
