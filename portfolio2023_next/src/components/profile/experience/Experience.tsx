// components
import ExperienceContainer from "./ExperienceContainer";

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

  return <ExperienceContainer data={expData} />;
}
