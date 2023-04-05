import React, { useEffect, useState } from 'react';

import PageVisual from '../../components/common/pageVisual';
import ProjectListItem from '../../components/projects/projectListItem';
import { projectList } from '../../hooks/recoil/projectList';
import { useRecoilValue } from 'recoil';

export default function projectsPage(props) {
  const projectListData = useRecoilValue(projectList);
  return (
    <main id="pageContents" className="page-contents page-projects">
      <PageVisual borderText="Selected" filledText="projects" />
      <section className="page-section side-padding">
        <ul className='project-list'>
          {projectListData.map((d, i) => (
            <ProjectListItem data={d} key={d.key} />
          ))}
        </ul>
      </section>
    </main>
  );
}