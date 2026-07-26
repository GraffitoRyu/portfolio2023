import { legendData } from "@portfolio/preset-data";
import { StyledStackLevelContainer } from "@/styles/styled/components/ProfileStacks";

export default function StackLevelGauge({ level }: { level: number }) {
  const title: string = legendData.filter(d => d.level === level)[0].label;
  return (
    <StyledStackLevelContainer level={level} title={title}>
      <li>level 0</li>
      <li>level 1</li>
      <li>level 2</li>
      <li>level 3</li>
    </StyledStackLevelContainer>
  );
}
