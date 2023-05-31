"use client";

import { styled } from "styled-components";

// type
import { ExperienceTypes } from "@/types/profile";
import { DescDepthTypes } from "@/types/parseDesc";

// util components
import ParseDescDepth from "@/hooks/ParseDescDepth";

// util
import { rem } from "@/util/unit";

const ExpItem = styled.li`
  margin-bottom: ${rem(120)};
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(80)};
  }
`;

const ExpTitle = styled.dt`
  margin-bottom: ${rem(16)};
  color: ${({ theme }) => theme.exp.title};
  text-transform: capitalize;
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(80)};
    font-size: ${rem(40)};
  }
`;

const ExpDesc = styled.dd`
  p,
  span {
    color: ${({ theme }) => theme.exp.desc};
    font-size: ${rem(32)};
    font-weight: 400;
    line-height: 2em;
  }
  .depth-desc {
    li:before {
      background-color: ${({ theme }) => theme.exp.desc};
    }
  }
  @media only screen and (min-width: 1024px) {
    p,
    span {
      font-size: ${rem(24)};
    }
  }
`;

export default async function Experience() {
  const expData: ExperienceTypes[] | undefined = (await getExp()) ?? undefined;

  return (
    <ul className="experience-list w-full">
      {expData
        ? expData.map((ex: ExperienceTypes, i: number) => (
            <ExpItem className="w-full" key={`exp_${ex.code}_${i}`}>
              <dl>
                <ExpTitle className="Capitalize">{ex.code}</ExpTitle>
                {ex.desc?.map((desc: string | DescDepthTypes, i) => (
                  <ExpDesc key={`exp_${ex.code}_depth1_${i}`}>
                    <ParseDescDepth data={desc} />
                  </ExpDesc>
                ))}
              </dl>
            </ExpItem>
          ))
        : ""}
    </ul>
  );
}

async function getExp() {
  const res = await fetch("http://localhost:3000/json/experience.json", {
    cache: "no-store",
  });
  // if (!res.ok) throw new Error("Failed to fetch Experience Data");
  const data = await res.json();
  return data;
}
