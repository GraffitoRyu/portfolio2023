// type
import { CareerTypes } from "@/types/profile";
import CareerItem from "./CareerItem";
import CareerContainer from "./CareerContainer";

export default async function Career() {
  const careerData: CareerTypes[] = await getCareer();

  return (
    <CareerContainer>
      {careerData && Object.keys(careerData)?.length > 0 ? (
        careerData.map((c: CareerTypes, i: number) => (
          <CareerItem key={`career_${c.code}_${i}`} {...c} />
        ))
      ) : (
        <li>Loading...</li>
      )}
    </CareerContainer>
  );
}

async function getCareer() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/career.json`
  );
  if (!res.ok) throw new Error("Failed to fetch Career Data");
  return await res.json();
}
