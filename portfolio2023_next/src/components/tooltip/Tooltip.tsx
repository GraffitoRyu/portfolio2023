import { ReactNode, useEffect, useState } from "react";

// style components
import {
  TooltipBox,
  TooltipContainer,
  TooltipContents,
  TooltipPositionBox,
  TooltipTitle,
} from "@/styles/styled/components/Tooltip";

export default function Tooltip({
  children,
  title,
  contents,
  pos = ["top", "center"],
  section,
  active,
  show,
}: {
  children: ReactNode;
  title?: string | ReactNode;
  contents: string | ReactNode;
  pos: string[];
  section: string;
  active: boolean;
  show: boolean;
}) {
  const [activeClass, setActiveClass] = useState<string>("");
  const [showClass, setShowClass] = useState<string>("");

  useEffect(() => {
    setActiveClass(active ? "active" : "");
  }, [active]);

  useEffect(() => {
    setShowClass(show ? "show" : "");
  }, [show]);

  return (
    <TooltipContainer>
      {children}
      <TooltipPositionBox className={`${activeClass}`} $pos={pos}>
        <TooltipBox className={`${showClass}`} $section={section} $pos={pos}>
          {title && <TooltipTitle $section={section}>{title}</TooltipTitle>}
          <TooltipContents $section={section}>{contents}</TooltipContents>
        </TooltipBox>
      </TooltipPositionBox>
    </TooltipContainer>
  );
}
