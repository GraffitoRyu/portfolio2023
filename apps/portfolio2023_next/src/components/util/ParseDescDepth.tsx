// style components
import { StyledDepthItem } from "@/styles/styled/components/Util";

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
              <StyledDepthItem key={`parseDescDepth_${d2}_${i}`}>
                <span>{d2}</span>
              </StyledDepthItem>
            )) ?? ""}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
