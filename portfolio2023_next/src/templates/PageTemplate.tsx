import { ReactNode } from "react";
import PageFooter from "@/components/pageFooter/PageFooter";

export default function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="scroll-container">
        {children}
        <PageFooter />
      </div>
    </>
  );
}
