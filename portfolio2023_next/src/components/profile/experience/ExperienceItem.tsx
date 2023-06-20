// style components
import {
  ExpContents,
  ExpDesc,
  ExpItem,
  ExpTitle,
} from "@/styles/styled/components/ProfileExperience";

// types
import { ExperienceTypes } from "@/types/profile";
import { DescDepthTypes } from "@/types/util/parseDesc";

// util components
import ParseDescDepth from "@/components/util/ParseDescDepth";

export default function ExperienceItem({ code, desc }: ExperienceTypes) {
  return (
    <ExpItem>
      <ExpContents>
        <ExpTitle>{code}</ExpTitle>
        {desc?.map((p: string | DescDepthTypes, i: number) => (
          <ExpDesc key={`exp_${code}_depth1_${i}`}>
            <ParseDescDepth data={p} />
          </ExpDesc>
        ))}
      </ExpContents>
    </ExpItem>
  );
}
