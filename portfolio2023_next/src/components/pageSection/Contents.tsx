import React from "react";

export default function SectionContents({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="section-contents">{children}</div>;
}
