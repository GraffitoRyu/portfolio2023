// style components
import {
  CareerCompany,
  CareerDesc,
  CareerItem,
  CareerPeriod,
  CareerRole,
  CareerTitle,
} from "@/styles/styled/components/career";

// type
import { CareerTypes } from "@/types/profile";

export default async function Career() {
  const careerData: CareerTypes[] | undefined =
    (await getCareer()) ?? undefined;

  return (
    <ul className="career-list w-full">
      {careerData
        ? careerData.map((c: CareerTypes, i: number) => {
            return (
              <CareerItem className="w-full" key={`career_${c.code}_${i}`}>
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/career.json`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Career Data");
  const data = await res.json();
  return data;
}
