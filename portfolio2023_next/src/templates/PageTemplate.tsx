import { ReactNode } from "react";
import PageHeader from "@/components/common/PageHeader";
import PageFooter from "@/components/common/PageFooter";

export default function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <PageHeader />
      <div className="scroll-container">
        {children}
        <PageFooter />
      </div>
    </>
  );
}
