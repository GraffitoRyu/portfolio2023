import React, { useEffect, useState } from 'react';

import PageVisual from '../../components/common/pageVisual';

export default function projectsPage(props) {
  return (
    <main id="pageContents" className="page-contents page-projects">
      <PageVisual borderText="Selected" filledText="projects" />
      <section className="sc">
        <ul>
          {[1, 2, 3].map((d, i) => {
            return <li key={`project_${i}`}>프로젝트 {d}</li>;
          })}
        </ul>
      </section>
    </main>
  );
}