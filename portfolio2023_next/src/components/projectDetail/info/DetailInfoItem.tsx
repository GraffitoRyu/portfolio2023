import { ReactNode } from "react";
import { PDInfoItem } from "@/styles/styled/components/ProjectDetail";

export default function DetailInfoItem({
  className,
  title,
  children,
}: {
  className: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <PDInfoItem className={`${className}`}>
      <dt>{title}</dt>
      {children}
    </PDInfoItem>
  );
}
