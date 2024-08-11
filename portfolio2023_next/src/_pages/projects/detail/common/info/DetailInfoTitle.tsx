// style components
import {
  StyledPDStackTitle,
  StyledPDSummaryTitle,
} from "@/styles/styled/components/ProjectDetail";

export default function DetailInfoTitle({
  code,
  title,
}: {
  code: string;
  title: string;
}) {
  switch (code) {
    case "stacks":
      return <StyledPDStackTitle>{title}</StyledPDStackTitle>;
    case "summary":
      return <StyledPDSummaryTitle>{title}</StyledPDSummaryTitle>;
    default:
      return null;
  }
}
