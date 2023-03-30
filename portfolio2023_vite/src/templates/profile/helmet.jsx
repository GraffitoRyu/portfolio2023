import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import PageHeader from '../../components/common/pageHeader';
import PageFooter from '../../components/common/pageFooter';
import Contents from './index';

export default function profileHelmet() {
  return (
    <>
      <Helmet>
        <title>프로필 | 류대현 포트폴리오 :: Front-end Engineer / Web Publisher</title>
      </Helmet>
      <PageHeader />
      <Contents />
      <PageFooter />
    </>
  )
}