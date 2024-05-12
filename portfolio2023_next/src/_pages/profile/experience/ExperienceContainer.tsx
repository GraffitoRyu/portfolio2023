// components
import ExperienceList from "./ExperienceList";

// style components
import { ExpScrollContainer } from "@/styles/styled/components/ProfileExperience";

// util
import { ExperienceTypes } from "@/types/profile";

export default function ExperienceContainer({
  data,
}: {
  data: ExperienceTypes[];
}) {
  return (
    <ExpScrollContainer>
      <ExperienceList data={data} />
    </ExpScrollContainer>
  );
}
