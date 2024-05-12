// components
import StackRow from "./StackRow";

// types
import { StackTypes, StackKeyTypes, StackDataTypes } from "@/types/profile";

// util
import { getSSRData } from "@/util/getData";

const getOptions = {
  page: "profile",
  queryName: "item",
};

export default async function TechStacks() {
  const index = await getSSRData(
    Object.assign(getOptions, { queryValue: "stackKeys" }),
  );
  const rawData = await getSSRData(
    Object.assign(getOptions, { queryValue: "stacks" }),
  );
  const stackData: StackDataTypes = convertStackData(index, rawData);

  return stackData ? (
    <div className="stack-container">
      <ul className="stack-table">
        {index.map(({ name, code }: StackKeyTypes, i: number) => (
          <StackRow
            title={name}
            data={stackData[code]}
            key={`StacksItem_${i}`}
          />
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
}

function convertStackData(index: StackKeyTypes[], raw: StackTypes[]) {
  const dataIndex: string[] = index.map((d: StackKeyTypes) => d.code);
  const filterData = dataIndex.map((key: string) => {
    const filtered: StackTypes[] = raw.filter(
      (r: StackTypes) => r.category === key,
    );
    return [key, filtered];
  });

  return Object.fromEntries(filterData);
}
