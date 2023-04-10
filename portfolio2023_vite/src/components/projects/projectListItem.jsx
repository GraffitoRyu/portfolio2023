export default function projectListItem(props) {
  const d = props.data;

  const startTime = d.period[0];
  const endTime = d.period[1];

  return (
    <li className="project-item flex">
      <div className="project-summary">
        <div className="project-period flex items-center">
          <time className="project-start">{startTime.toLocaleString('en-US', {
            month: 'short',
            year: 'numeric',
          })}</time>
          <span className="period-bar"></span>
          <time className="project-end">{startTime.toLocaleString('en-US', {
            month: 'short',
            year: 'numeric',
          })}</time>
        </div>
        <h3 className="project-name">{d.title}</h3>
        <p>{d.desc}</p>
        <ul className="project-role flex items-center">
          {d.role.map((role, i) => (
            <li key={`role_${i}`}>{role}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}