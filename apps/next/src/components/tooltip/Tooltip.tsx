import { useEffect, useState } from "react";

// style components
import {
  StyledTooltipBox,
  StyledTooltipContainer,
  StyledTooltipContents,
  StyledTooltipPositionBox,
  StyledTooltipTitle,
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
  children: React.ReactNode;
  title?: string | React.ReactNode;
  contents: string | React.ReactNode;
  pos: string[];
  section: "footer" | "gnbUtilBtn";
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
    <StyledTooltipContainer>
      {children}
      <StyledTooltipPositionBox className={`${activeClass}`} $pos={pos}>
        <StyledTooltipBox
          className={`${showClass}`}
          $section={section}
          $pos={pos}
        >
          {title && (
            <StyledTooltipTitle $section={section}>{title}</StyledTooltipTitle>
          )}
          <StyledTooltipContents $section={section}>
            {contents}
          </StyledTooltipContents>
        </StyledTooltipBox>
      </StyledTooltipPositionBox>
    </StyledTooltipContainer>
  );
}
