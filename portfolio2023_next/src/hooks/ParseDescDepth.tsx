import { size } from "@/styles/styled/preset/mixins";
import { DescTypes } from "@/types/parseDesc";
import { rem } from "@/util/unit";
import { styled } from "styled-components";

const DepthItem = styled.li`
  font-size: 0;
  &:before {
    content: "";
    display: inline-block;
    ${size({ width: rem(8), height: rem(8) })}
    border-radius:50%;
    margin: ${rem(8)} ${rem(16)} 0;
  }
`;

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
