// components
import ExperienceList from "./ExperienceList";

// style components
import { ExpScrollContainer } from "@/styles/styled/components/ProfileExperience";

export default function ExperienceContainer({
  data,
}: {
  data?: ExperienceTypes[];
}) {
  return (
    <ExpScrollContainer>
      <ExperienceList data={data} />
    </ExpScrollContainer>
  );
}
