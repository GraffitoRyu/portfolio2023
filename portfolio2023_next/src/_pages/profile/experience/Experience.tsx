// components
import ExperienceContainer from "./ExperienceContainer";

import { useQueryProfileExperienceData } from "@/lib/query";

export default async function Experience() {
  const { data: expData } = useQueryProfileExperienceData();

  return <ExperienceContainer data={expData} />;
}
