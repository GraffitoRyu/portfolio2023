// components
import ExperienceContainer from "./ExperienceContainer";
import ExperienceItem from "./ExperienceItem";

// type
import { ExperienceTypes } from "@/types/profile";

export default async function Experience() {
  const expData: ExperienceTypes[] = await getExp();

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

async function getExp() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/experience.json`
  );
  if (!res.ok) throw new Error("Failed to fetch Experience Data");
  const data = await res.json();
  return data;
}
