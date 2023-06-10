import Image from "next/image";
import { useState } from "react";

// style components
import {
  PDPeriod,
  PDStackImg,
  PDStackList,
  PDStackName,
  PDStacks,
} from "@/styles/styled/components/ProjectDetail";

// util components
import ParseDescDepth from "@/components/util/ParseDescDepth";

// icons
import toolIcons from "./icon";

// type
import { ExpDepthType } from "@/types/projects";

export default function DetailInfoContents<T>({
  code,
  type,
  contents,
}: {
  code: string;
  type: string;
  contents: T;
}): JSX.Element {
  if (Array.isArray(contents)) {
    switch (type) {
      case "list":
        return <ListContents code={code} data={contents} />;
      case "period":
        return <PeriodContents data={contents} />;
      case "stacks":
        return <StackContents code={code} data={contents} />;
      default:
        <dd>{contents.join(" ")}</dd>;
    }
  }
  return <dd>{typeof contents === "string" ? contents : ""}</dd>;
}

function ListContents({
  code,
  data,
}: {
  code: string;
  data: Array<string | ExpDepthType>;
}): JSX.Element {
  return (
    <>
      {data.map((c: string | ExpDepthType, i: number) => (
        <dd key={`detailList_${code}_${i}`}>
          {typeof c === "string" ? c : <ParseDescDepth data={c} />}
        </dd>
      ))}
    </>
  );
}

function PeriodContents({ data }: { data: string[] }): JSX.Element {
  return (
    <dd>
      <PDPeriod date={data} />
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
  return (
    <dd>
      <PDStackList>
        {data.map((c: string, i: number) => (
          <PDStacks key={`detailStacks_${code}_${i}`}>
            <StackIcons code={c} />
            <PDStackName>{c}</PDStackName>
          </PDStacks>
        ))}
      </PDStackList>
    </dd>
  );
}

function StackIcons({ code }: { code: string }) {
  const [hide, setHide] = useState("");
  const icon = toolIcons?.[code.replace(".", "")];
  return icon ? (
    <PDStackImg className={`${hide}`}>
      <Image
        src={icon}
        alt={code}
        width={32}
        height={32}
        onError={() => setHide("hidden")}
      />
    </PDStackImg>
  ) : null;
}
