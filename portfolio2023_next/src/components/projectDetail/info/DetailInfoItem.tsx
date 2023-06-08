import { PDInfoItem } from "@/styles/styled/components/ProjectDetail";
import { ReactNode } from "react";

export default function DetailInfoItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <PDInfoItem>
      <dt>{title}</dt>
      {children}
    </PDInfoItem>
  );
}
