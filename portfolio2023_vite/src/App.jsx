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
          <Route element={<Pages.Transition />} path="/transition" />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  )
}