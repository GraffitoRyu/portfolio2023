// components
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
      {expData && Object.keys(expData)?.length > 0 ? (
        expData.map((ex: ExperienceTypes, i: number) => (
          <ExperienceItem key={`exp_${ex.code}_${i}`} {...ex} />
        ))
      ) : (
        <li>Loading...</li>
      )}
    </ExperienceContainer>
  );
}
