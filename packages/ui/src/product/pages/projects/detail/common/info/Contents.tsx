// style components
import {
  StyledPDStackContents,
  StyledPDSummaryContents,
} from "@graffitoryu/ui/product/styles/styled/components/ProjectDetail";

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
  children: React.ReactNode;
}) {
  switch (code) {
    case "stacks":
      return <StyledPDStackContents>{children}</StyledPDStackContents>;
    case "summary":
      return <StyledPDSummaryContents>{children}</StyledPDSummaryContents>;
    default:
      return null;
  }
}
