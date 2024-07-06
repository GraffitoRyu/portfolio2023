// style components
import { CareerContainerList } from "@/styles/styled/components/ProfileCareer";

export default function CareerContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CareerContainerList>{children}</CareerContainerList>;
}
