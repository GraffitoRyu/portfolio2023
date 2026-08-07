"use client";

// components
import CareerItem from "./Item";

// styled component
import { StyledCareerList } from "@graffitoryu/ui/product/styles/styled/components/ProfileCareer";

// fetch
import { useQueryProfileCareerData } from "@graffitoryu/ui/product/lib/query";

export default function CareerList() {
  const { data: careerData = [] } = useQueryProfileCareerData();

  return (
    <StyledCareerList>
      {careerData?.map((c: CareerAPIDataType, i: number) => (
        <CareerItem
          key={`profile/career/${c.code}`}
          {...c}
          last={i === careerData.length - 1}
        />
      ))}
    </StyledCareerList>
  );
}
