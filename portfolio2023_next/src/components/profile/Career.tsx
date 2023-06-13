// style components
import {
  CareerCompany,
  CareerDesc,
  CareerItem,
  CareerPeriod,
  CareerRole,
  CareerTitle,
} from "@/styles/styled/components/Career";

// type
import { CareerTypes } from "@/types/profile";

export default async function Career() {
  const careerData: CareerTypes[] = await getCareer();

  return (
    <ul className="career-list w-full">
      {careerData && Object.keys(careerData)?.length > 0 ? (
        careerData.map((c: CareerTypes, i: number) => (
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
        ))
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  );
}

async function getCareer() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/career.json`
  );
  if (!res.ok) throw new Error("Failed to fetch Career Data");
  return await res.json();
}
