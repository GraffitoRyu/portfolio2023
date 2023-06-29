// components
import { Suspense } from "react";
import ExperienceContainer from "./ExperienceContainer";
import ExperienceItem from "./ExperienceItem";

// type
import { ExperienceTypes } from "@/types/profile";

// util
import { getSSRData } from "@/util/getData";

export default async function Experience() {
  const expData: ExperienceTypes[] = await getSSRData({
    page: "profile",
    queryName: "item",
    queryValue: "experience",
  });

  return (
    <ExperienceContainer>
      <Suspense fallback={<li>Loading...</li>}>
        {expData.map((ex: ExperienceTypes, i: number) => (
          <ExperienceItem key={`exp_${ex.code}_${i}`} {...ex} />
        ))}
      </Suspense>
    </ExperienceContainer>
  );
}
