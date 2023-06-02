// style components
import {
  ExpDesc,
  ExpItem,
  ExpTitle,
} from "@/styles/styled/components/experience";

// type
import { ExperienceTypes } from "@/types/profile";
import { DescDepthTypes } from "@/types/parseDesc";

// util components
import ParseDescDepth from "@/hooks/ParseDescDepth";

export default async function Experience() {
  const expData: ExperienceTypes[] | undefined = (await getExp()) ?? undefined;

  return (
    <ul className="experience-list w-full">
      {expData
        ? expData.map((ex: ExperienceTypes, i: number) => (
            <ExpItem className="w-full" key={`exp_${ex.code}_${i}`}>
              <dl>
                <ExpTitle className="Capitalize">{ex.code}</ExpTitle>
                {ex.desc?.map((desc: string | DescDepthTypes, i) => (
                  <ExpDesc key={`exp_${ex.code}_depth1_${i}`}>
                    <ParseDescDepth data={desc} />
                  </ExpDesc>
                ))}
              </dl>
            </ExpItem>
          ))
        : ""}
    </ul>
  );
}

async function getExp() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/experience.json`,
    {
      cache: "no-store",
    }
  );
  // if (!res.ok) throw new Error("Failed to fetch Experience Data");
  const data = await res.json();
  return data;
}
