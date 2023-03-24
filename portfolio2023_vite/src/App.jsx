import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import * as Pages from './templates/pageContents';

export default function app() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route element={<Pages.Profile />} path="/" />
          <Route element={<Pages.Projects />} path="/projects" />
          <Route element={<Pages.PageTransition />} path="/page_transition" />
          <Route element={<Pages.ProjectItem />} path="/project_item" />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  )
}