import { HTMLAttributes } from "react";

type PeriodDateType = {
  [index: number]: string;
};
export interface PeriodProps {
  className?: string | HTMLAttributes<HTMLDivElement>;
  $date: PeriodDateType;
}
