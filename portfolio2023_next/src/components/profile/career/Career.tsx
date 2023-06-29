import { Suspense } from "react";

// components
import CareerContainer from "./CareerContainer";
import CareerItem from "./CareerItem";

// type
import { CareerTypes } from "@/types/profile";

// util
import { getSSRData } from "@/util/getData";

export default async function Career() {
  const careerData: CareerTypes[] = await getSSRData({
    page: "profile",
    queryName: "item",
    queryValue: "career",
  });

  return (
    <CareerContainer>
      <Suspense fallback={<li>Loading...</li>}>
        {careerData.map((c: CareerTypes, i: number) => (
          <CareerItem key={`career_${c.code}_${i}`} {...c} />
        ))}
      </Suspense>
    </CareerContainer>
  );
}
