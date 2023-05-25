import { DescDepthTypes } from "@/types/common";
import { ExperienceTypes } from "@/types/profile";
import ParseDescription from "@/util/parseDesc";

export default async function Experience() {
  const expData: ExperienceTypes[] | [] = (await getExp()) ?? [];

  return (
    <ul className="experience-list w-full">
      {expData?.map((ex: ExperienceTypes) => (
        <li className="w-full" key={ex.code}>
          <dl>
            <dt className="Capitalize">{ex.code}</dt>
            {ex.desc?.map((desc: string | DescDepthTypes, i) => (
              <dd key={`depth1_${i}`}>
                <ParseDescription data={desc} />
              </dd>
            ))}
          </dl>
        </li>
      )) ?? ""}
    </ul>
  );
}

async function getExp() {
  const res = await fetch("http://localhost:3000/json/experience.json");
  // if (!res.ok) throw new Error("Failed to fetch Experience Data");
  const data = await res.json();
  return data;
}
