import legendData from "@/data/stackLegend";
import { StackLevelContainer } from "@/styles/styled/components/ProfileStacks";

export default function StackLevelGauge({ level }: { level: number }) {
  const title: string = legendData.filter(d => d.level === level)[0].label;
  return (
    <StackLevelContainer level={level} title={title}>
      <li>level 0</li>
      <li>level 1</li>
      <li>level 2</li>
      <li>level 3</li>
    </StackLevelContainer>
  );
}
