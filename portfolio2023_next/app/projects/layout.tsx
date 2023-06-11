import { ReactNode } from "react";

export default function ProjectsLayout({
  children,
  detail,
}: {
  children: ReactNode;
  detail?: ReactNode | null;
}) {
  return (
    <>
      {children}
      {detail}
    </>
  );
}
