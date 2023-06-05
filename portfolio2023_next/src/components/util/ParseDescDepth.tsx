// style components
import { DepthItem } from "@/styles/styled/components/Hooks";

// type
import { DescTypes } from "@/types/util/parseDesc";

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
          <ul className="depth-desc">
            {data.depth2?.map((d2: string, i: number) => (
              <DepthItem
                key={`parseDescDepth_${Math.floor(
                  Math.random() * 100000000
                )}_${i}`}
              >
                <span>{d2}</span>
              </DepthItem>
            )) ?? ""}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
