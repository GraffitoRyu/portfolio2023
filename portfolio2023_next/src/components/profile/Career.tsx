"use client";

import { CareerTypes } from "@/types/profile";
import Period from "../period/Period";
import { styled } from "styled-components";
import { rem } from "@/util/unit";
import { flex, size } from "@/styles/styled/mixins";

const CareerItem = styled.li`
  margin-bottom: ${rem(80)};
`;

const CareerPeriod = styled(Period)`
  margin-bottom: ${rem(32)};
  color: ${({ theme }) => theme.career.period};
  span {
    background-color: ${({ theme }) => theme.career.period};
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(16)};
  }
`;

const CareerTitle = styled.h3`
  margin-bottom: ${rem(32)};
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(24)};
  }
`;

const CareerRole = styled.strong`
  font-size: ${rem(40)};
  font-weight: 500;
  color: ${({ theme }) => theme.career.role};
  line-height: 1em;
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(32)};
  }
`;

const CareerCompany = styled.span`
  ${flex({ std: "start" })}
  margin-top: ${rem(4)};
  color: ${({ theme }) => theme.career.company};
  font-size: ${rem(32)};
  font-weight: 400;
  line-height: 1em;
  &:before {
    content: "";
    display: block;
    ${size({ width: rem(2), height: rem(24) })}
    margin: 0 ${rem(16)} 0 ${rem(24)};
    background-color: ${({ theme }) => theme.career.company};
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(24)};
  }
`;

const CareerDesc = styled.p`
  color: ${({ theme }) => theme.career.desc};
  font-size: ${rem(32)};
  font-weight: 400;
  line-height: 1.5em;
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(24)};
  }
`;

export default async function Career() {
  const careerData: CareerTypes[] | [] = (await getCareer()) ?? [];

  return (
    <ul className="career-list w-full">
      {careerData?.length > 0
        ? careerData.map((c: CareerTypes) => {
            return (
              <CareerItem className="w-full" key={`career_${c.code}`}>
                {/* @ts-expect-error Async Server Component */}
                <CareerPeriod date={c.period} />
                <CareerTitle className="flex items-center">
                  <CareerRole className="role">{c.role}</CareerRole>
                  <CareerCompany className="company flex items-center">
                    {c.company}
                  </CareerCompany>
                </CareerTitle>
                <CareerDesc>{c.desc}</CareerDesc>
              </CareerItem>
            );
          })
        : ""}
    </ul>
  );
}

async function getCareer() {
  const res = await fetch("http://localhost:3000/json/career.json", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch Career Data");
  const data = await res.json();
  return data;
}
