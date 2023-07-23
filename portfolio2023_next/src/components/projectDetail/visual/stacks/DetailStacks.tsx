import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import DetailInfoItem from "../../common/info/DetailInfoItem";
import DetailInfoTitle from "../../common/info/DetailInfoTitle";
import DetailInfoContents from "../../common/info/DetailInfoContents";

// style components
import { PDStacksContainer } from "@/styles/styled/components/ProjectDetail";

// state
import { detailData } from "@/states/detail";

// type
import { DetailTypes } from "@/types/projectDetails";

const stacksArr = [
  ["languages", [""]],
  ["frameworks", [""]],
  ["data", [""]],
  ["collaboration", [""]],
];

type StackSingleTypes = Array<string | string[]>;
type StackArrTypes = typeof stacksArr;

export default function DetailStacks() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [stacks, setStacks] = useState<StackArrTypes>(stacksArr);

  useEffect(() => {
    if (typeof category !== "string" || !data?.[category]) return;

    const expData = data[category]?.experience?.stacks;
    if (typeof expData !== "undefined") setStacks(Object.entries(expData));
    else setStacks(stacksArr);
  }, [category, data]);

  return (
    <PDStacksContainer>
      <DetailInfoItem code="stacks" className="details-stack-title">
        <DetailInfoTitle code="stacks" title="Tech Stacks" />
        <dd></dd>
      </DetailInfoItem>
      {stacks.map((d: StackSingleTypes, i: number) => (
        <DetailInfoItem code="stacks" key={`detailStacks_${category}_${i}`}>
          <DetailInfoTitle
            code="stacks"
            title={getStackTitle(d[0] as string)}
          />
          <DetailInfoContents
            code="stacks"
            title={d[0] as string}
            contents={d[1] as string[]}
          />
        </DetailInfoItem>
      ))}
    </PDStacksContainer>
  );
}

function getStackTitle(stackKey: string): string {
  switch (stackKey) {
    case "languages":
      return "Languages";
    case "frameworks":
      return "Frameworks & Libraries";
    case "data":
      return "Data";
    case "collaboration":
      return "Collaboration";
    default:
      return "";
  }
}
