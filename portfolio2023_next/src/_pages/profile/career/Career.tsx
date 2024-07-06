// components
import CareerContainer from "./CareerContainer";
import CareerItem from "./CareerItem";

import { useQueryProfileCareerData } from "@/lib/query";

export default function Career() {
  const { data: careerData } = useQueryProfileCareerData();

  return (
    <CareerContainer>
      {careerData?.map((c: CareerTypes, i: number) => (
        <CareerItem
          key={`profile/career/${c.code}`}
          {...c}
          last={i === careerData.length - 1}
        />
      ))}
    </CareerContainer>
  );
}
