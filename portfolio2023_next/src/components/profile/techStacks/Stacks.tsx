// components
import StackLegend from "./StackLegend";
import StackRow from "./StackRow";

// style components

// types
import { StackTypes, StackKeyTypes, StackDataTypes } from "@/types/profile";

export default async function TechStacks() {
  const { index, data } = await getStacks();

  return index && data ? (
    <div className="stack-container">
      <StackLegend />
      <ul className="stack-table">
        {index.map(({ name, code }: StackKeyTypes, i: number) => (
          <StackRow title={name} data={data[code]} key={`StacksItem_${i}`} />
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
}

async function getStacks() {
  // 인덱스 데이터
  const keyRes = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/stackKeys.json`
  );
  if (!keyRes.ok) throw new Error("Failed to fetch Tech Stack Keys Data");
  const stackKey = await keyRes.json();

  // 스택 데이터
  const stacksRaw = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/stacks.json`
  );
  if (!stacksRaw.ok) throw new Error("Failed to fetch Tech Stacks Data");

  const rawData = await stacksRaw.json();

  const dataIndex: string[] = stackKey.map((d: StackKeyTypes) => d.code);
  const filterData = dataIndex.map((key: string) => {
    const filtered: StackTypes[] = rawData.filter(
      (r: StackTypes) => r.category === key
    );
    return [key, filtered];
  });

  const dataRes: StackDataTypes = Object.fromEntries(filterData);

  return { index: stackKey, data: dataRes };
}
