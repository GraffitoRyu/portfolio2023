import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import PageHeader from '../../components/pageHeader/pageHeader';
import PageFooter from '../../components/pageFooter/pageFooter';
import Contents from './index';

export default function projectsHelmet() {
  return (
    <>
      <Helmet>
        <title>프로젝트 | 류대현 포트폴리오 :: Front-end Engineer / Web Publisher</title>
      </Helmet>
      <PageHeader />
      <Contents />
      <PageFooter />
    </>
  )
}