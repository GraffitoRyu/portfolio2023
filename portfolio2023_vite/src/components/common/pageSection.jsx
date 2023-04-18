import React from "react";

export default function section(props) {
  const sectionCode = props.sectionCode;
  const header = props.header;
  const contents = props.contents;

  return (
    <section
      className={`page-section side-padding lg:flex items-start ${sectionCode}-section relative`}
    >
      <header className={`section-header lg:w-1/2`}>
        {header ? (
          <React.Fragment>
            <h2 className="capitalize">{header.title}</h2>
            <p>
              {header.desc?.map((d, i) => (
                <React.Fragment key={`desc_${i}`}>
                  <span>{d}</span>
                  {i < header.desc.length - 1 ? <br /> : ""}
                </React.Fragment>
              ))}
            </p>
          </React.Fragment>
        ) : (
          ""
        )}
      </header>
      <div className="section-contents lg:w-1/2">{contents}</div>
    </section>
  );
}
