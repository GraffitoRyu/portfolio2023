// style components
import {
  PDStackTitle,
  PDSummaryTitle,
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
      return <PDStackTitle>{title}</PDStackTitle>;
    case "summary":
      return <PDSummaryTitle>{title}</PDSummaryTitle>;
    default:
      return null;
  }
}
