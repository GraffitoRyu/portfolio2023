// components
import StackLegend from "./StackLegend";
import StackRow from "./StackRow";

// style components

// types
import { StackTypes, StackKeyTypes, StackDataTypes } from "@/types/profile";

export default async function TechStacks() {
  const index = await getStackKey();
  const rawData = await getStackData();
  const stackData: StackDataTypes = convertStackData(index, rawData);

  return stackData ? (
    <div className="stack-container">
      <StackLegend />
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
async function getStackKey() {
  // 인덱스 데이터
  const keyRes = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/stackKeys.json`
  );
  if (!keyRes.ok) throw new Error("Failed to fetch Tech Stack Keys Data");
  return await keyRes.json();
}

async function getStackData() {
  // 스택 데이터
  const stacksRaw = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/stacks.json`
  );
  if (!stacksRaw.ok) throw new Error("Failed to fetch Tech Stacks Data");

  return await stacksRaw.json();
}

function convertStackData(index: StackKeyTypes[], raw: StackTypes[]) {
  const dataIndex: string[] = index.map((d: StackKeyTypes) => d.code);
  const filterData = dataIndex.map((key: string) => {
    const filtered: StackTypes[] = raw.filter(
      (r: StackTypes) => r.category === key
    );
    return [key, filtered];
  });

  return Object.fromEntries(filterData);
}
