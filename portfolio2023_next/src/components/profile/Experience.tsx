// type
import { ExperienceTypes } from "@/types/profile";
import { DescDepthTypes } from "@/types/parseDesc";

// util components
import ParseDescDepth from "../common/ParseDescDepth";

export default async function Experience() {
  const expData: ExperienceTypes[] | [] = (await getExp()) ?? [];

  return (
    <ul className="experience-list w-full">
      {expData?.map((ex: ExperienceTypes) => (
        <li className="w-full" key={`exp_${ex.code}`}>
          <dl>
            <dt className="Capitalize">{ex.code}</dt>
            {ex.desc?.map((desc: string | DescDepthTypes, i) => (
              <dd key={`exp_depth1_${i}`}>
                <ParseDescDepth data={desc} />
              </dd>
            ))}
          </dl>
        </li>
      )) ?? ""}
    </ul>
  );
}

async function getExp() {
  const res = await fetch("http://localhost:3000/json/experience.json", {
    cache: "no-store",
  });
  // if (!res.ok) throw new Error("Failed to fetch Experience Data");
  const data = await res.json();
  return data;
}