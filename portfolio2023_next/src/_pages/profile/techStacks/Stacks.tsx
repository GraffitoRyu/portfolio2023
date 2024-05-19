// components
import StackRow from "./StackRow";

import {
  useQueryProfileStackKeys,
  useQueryProfileStacksData,
} from "@/lib/query";

export default async function TechStacks() {
  const { data: index } = useQueryProfileStackKeys();
  const { data: rawData } = useQueryProfileStacksData();
  const stackData: StackDataTypes = convertStackData(index, rawData);

  return stackData ? (
    <div className="stack-container">
      <ul className="stack-table">
        {index?.map(({ name, code }: StackKeyTypes, i: number) => (
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

function convertStackData(index?: StackKeyTypes[], raw?: StackTypes[]) {
  if (typeof index === "undefined" || typeof raw === "undefined") return {};
  const dataIndex: string[] = index.map((d: StackKeyTypes) => d.code);
  const filterData = dataIndex.map((key: string) => {
    const filtered: StackTypes[] = raw.filter(
      (r: StackTypes) => r.category === key,
    );
    return [key, filtered];
  });

  return Object.fromEntries(filterData);
}
