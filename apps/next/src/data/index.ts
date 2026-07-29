import { local } from "@graffitoryu/preset-data";
import { remote } from "./http";

const dataSource = process.env.NEXT_PUBLIC_DATA_SOURCE;

if (
  dataSource !== undefined &&
  dataSource !== "local" &&
  dataSource !== "remote"
) {
  throw new Error(`Invalid NEXT_PUBLIC_DATA_SOURCE: ${dataSource}`);
}

export const source = dataSource === "remote" ? remote : local;
