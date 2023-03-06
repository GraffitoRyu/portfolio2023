import React, { useEffect, useState } from 'react';

export default function projectsPage(props) {
  return (
    <main id="pageContents" className="page-contents page-projects">
      <div className="common-wrap">
        <header className="page-title-header">
          <h1 className='page-title'><span>Projects</span></h1>
        </header>
        <section className="sc">
          <ul>
            {[1, 2, 3].map((d, i) => {
              return  (
                <li key={`project_${i}`}>프로젝트 {d}</li>
              )
            })}
          </ul>
        </section>
      </div>
    </main>
  )
}