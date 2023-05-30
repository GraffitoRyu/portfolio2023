import { ReactNode } from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import PageFooter from "@/components/pageFooter/PageFooter";
import PageTransition from "../roots/PageTransition";

export default function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <PageHeader />
      <PageTransition>
        <div className="scroll-container w-full h-full overflow-x-hidden overflow-y-auto">
          {children}
          <PageFooter />
        </div>
      </PageTransition>
    </>
  );
}
