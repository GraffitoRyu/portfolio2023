import { ReactNode } from "react";

// style components
import {
  PDStackContents,
  PDSummaryContents,
} from "@/styles/styled/components/ProjectDetail";

export default function DetailInfoContents({
  code,
  title,
  contents,
}: {
  code: string;
  title: string;
  contents?: string[];
}) {
  return (
    <>
      {contents && contents.length > 0
        ? contents.map((c: string, i: number) => (
            <SwitchContents
              code={code}
              key={`detailsInfo_${title.replace(" ", "_")}_${i}`}
            >
              {c}
            </SwitchContents>
          ))
        : null}
    </>
  );
}

function SwitchContents({
  code,
  children,
}: {
  code: string;
  children: ReactNode;
}) {
  switch (code) {
    case "stacks":
      return <PDStackContents>{children}</PDStackContents>;
    case "summary":
      return <PDSummaryContents>{children}</PDSummaryContents>;
    default:
      return null;
  }
}
