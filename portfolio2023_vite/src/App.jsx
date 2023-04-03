import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

import * as Pages from './templates/pageContents';

import checkScreenSize from './hooks/util/checkScreenSize';
import windowResizeCheck from './hooks/util/windowResize';

export default function app() {
  useEffect(() => {
    checkScreenSize();
    windowResizeCheck(checkScreenSize, 20);
  }, [])

  return (
    <RecoilRoot>
      <BrowserRouter>
        <HelmetProvider>
          <Routes>
            <Route element={<Pages.Profile />} path="/" />
            <Route element={<Pages.Projects />} path="/projects" />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </RecoilRoot>
  )
}