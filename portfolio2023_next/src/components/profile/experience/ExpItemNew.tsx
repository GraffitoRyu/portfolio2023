import { ExperienceTypes } from "@/types/profile";

export default function ExperienceItemNew({
  code,
  title,
  desc,
}: ExperienceTypes) {
  return (
    <li className="exp-item">
      <dl className="exp-container">
        <dt className="exp-title">{title}</dt>
        {desc.map((line: string, i: number) => (
          <dd className="exp-desc" key={`expDesc_${code}_${i}`}>
            <span>{line}</span>
          </dd>
        ))}
      </dl>
    </li>
  );
}
