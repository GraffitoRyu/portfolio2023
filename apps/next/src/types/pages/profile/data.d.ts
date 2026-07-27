import type {
  CareerData,
  CareerDetailsData,
  CareerSummaryData,
  ExperienceData,
  StackData,
  StackKeyData,
} from "@graffitoryu/preset-data";

declare global {
  type CareerAPIDataType = CareerData;
  type CareerSummaryTypes = CareerSummaryData;
  type CareerDetailsTypes = CareerDetailsData;
  type ExperienceAPIDataTypes = ExperienceData;
  type StackAPIDataTypes = StackData;
  type StackKeyAPIDataTypes = StackKeyData;
}

export {};
