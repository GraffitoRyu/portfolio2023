import Image from "next/image";

// components
import Period from "@/components/period/Period";
import { PDStacks } from "@/styles/styled/components/ProjectDetail";

// images
import ToolsIcon from "./ToolsImage";

export default function DetailInfoContents({
  code,
  type,
  contents,
}: {
  code: string;
  type: string;
  contents: string | string[];
}): JSX.Element {
  if (Array.isArray(contents)) {
    switch (type) {
      case "list":
        return <ListContents code={code} data={contents} />;
      case "period":
        return <Period className={`detail-period`} date={contents} />;
      case "stacks":
        return <StackContents code={code} data={contents} />;
      default:
        <dd>{contents.join(" ")}</dd>;
    }
  }
  return <dd>{contents}</dd>;
}

function ListContents({
  code,
  data,
}: {
  code: string;
  data: string[];
}): JSX.Element {
  return (
    <dd>
      {data.map((c: string, i: number) => (
        <dd key={`detailList_${code}_${i}`}>{c}</dd>
      ))}
      ;
    </dd>
  );
}

function StackContents({
  code,
  data,
}: {
  code: string;
  data: string[];
}): JSX.Element {
  console.log(`여러 이미지 효율적으로 불러와서 적용하는 방법 할 차례`);
  return (
    <dd>
      {data.map((c: string, i: number) => (
        <PDStacks key={`detailStacks_${code}_${i}`}>
          <Image src={ToolsIcon[c.replace(".", "")]} alt={c} fill={true} />
        </PDStacks>
      ))}
    </dd>
  );
}
