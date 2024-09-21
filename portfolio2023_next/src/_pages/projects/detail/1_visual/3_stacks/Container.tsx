import { useMemo } from "react";

// components
import DetailInfoItem from "../../common/info/Item";
import DetailInfoTitle from "../../common/info/Title";
import DetailInfoContents from "../../common/info/Contents";

// style components
import { StyledPDStacksContainer } from "@/styles/styled/components/ProjectDetail";

// state
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

export default function DetailStacks() {
  const { category, data } = useProjectCategoryDetailData();

  const stacks = useMemo(() => {
    const stackSet = {
      languages: [],
      frameworks: [],
      data: [],
      collaboration: [],
    };

    if (!data) return Object.entries(stackSet);

    const expData = data?.experience?.stacks;

    return typeof expData !== "undefined"
      ? Object.entries(expData)
      : Object.entries(stackSet);
  }, [data]);

  const getStackTitle = (stackKey: string): string => {
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
  };

  return (
    <StyledPDStacksContainer>
      <DetailInfoItem code="stacks" className="details-stack-title">
        <DetailInfoTitle code="stacks" title="Tech Stacks" />
        <dd></dd>
      </DetailInfoItem>
      {stacks.map(([stackKey, list]) => (
        <DetailInfoItem
          code="stacks"
          key={`projects/detail/stacks/${category}/${stackKey}`}
        >
          <DetailInfoTitle code="stacks" title={getStackTitle(stackKey)} />
          <DetailInfoContents code="stacks" title={stackKey} contents={list} />
        </DetailInfoItem>
      ))}
    </StyledPDStacksContainer>
  );
}
