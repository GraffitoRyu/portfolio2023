// style components
import { ExpScrollContainer } from "@/styles/styled/components/ProfileExperience";

// util
import { ExperienceTypes } from "@/types/profile";
import ExperienceList from "./ExperienceList";

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
