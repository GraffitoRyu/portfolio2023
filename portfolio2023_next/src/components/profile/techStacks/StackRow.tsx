import {
  StackCategory,
  StackFigure,
  StackList,
  StackRowContainer,
} from "@/styles/styled/components/ProfileStacks";
import { StackTypes } from "@/types/profile";
import StackLevelGauge from "./StackLevel";

export default function StackRow({
  title,
  data,
}: {
  title: string;
  data: StackTypes[];
}) {
  return (
    <StackRowContainer>
      <StackCategory>
        <h4>{title}</h4>
      </StackCategory>
      <StackList>
        {data.map(({ code, name, level }: StackTypes, i: number) => (
          <StackFigure key={`stackList_${code}_${i}`}>
            <figcaption>{name}</figcaption>
            <StackLevelGauge level={level} />
          </StackFigure>
        ))}
      </StackList>
    </StackRowContainer>
  );
}
