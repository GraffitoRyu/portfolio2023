export default function DetailTitle({ title }: { title: string[] }) {
  return (
    <h2>
      {title.map(d => (
        <span key={d}>{d}</span>
      ))}
    </h2>
  );
}
