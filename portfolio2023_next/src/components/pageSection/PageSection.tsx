import React from "react";

export default function PageSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="page-section w-full flex items-start">
      {children}
    </section>
  );
}
