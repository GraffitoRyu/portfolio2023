import { DescTypes } from "@/types/parseDesc";

export default function ParseDescDepth({ data }: DescTypes) {
  return (
    <>
      {typeof data === "string" ? (
        <p>
          <span>{data}</span>
        </p>
      ) : data?.depth1 ? (
        <>
          <p>
            <span>{data.depth1}</span>
          </p>
          <ul>
            {data.depth2?.map((d2: string, i: number) => (
              <li key={`parsed_${i}`}>
                <span>- {d2}</span>
              </li>
            )) ?? ""}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
