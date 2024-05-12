import { ReactNode } from "react";

// style components
import { CareerContainerList } from "@/styles/styled/components/ProfileCareer";

export default function CareerContainer({ children }: { children: ReactNode }) {
  return <CareerContainerList>{children}</CareerContainerList>;
}
