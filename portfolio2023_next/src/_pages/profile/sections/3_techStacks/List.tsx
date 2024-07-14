"use client";

// components
import StackRow from "./Row";

// hooks
import useTechStackData from "@/hooks/data/useTechStackData";

/**
 * 프로필 > 기술스택; 스택 목록 컨테이너 컴포넌트
 * @component
 */
export default function TechStackList() {
  const { index, stackData } = useTechStackData();

  return (
    <ul className="stack-table">
      {index.map(({ name, code }, i: number) => (
        <StackRow
          title={name}
          data={stackData[code]}
          key={`profile/techStack/item/${i}`}
        />
      ))}
    </ul>
  );
}
