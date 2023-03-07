import React, { useEffect, useState } from 'react';

export default function profilePage(props) {
  return (
    <main id="pageContents" className="page-contents page-profile">
      <section className="mv">
        <h2 className='mv-title'>
          <span className='mv-title-border-text flex'>ready for</span>
          <span className='mv-title-fill-text flex'>interaction</span>
        </h2>
      </section>
      <section className="mc mc-career">
        <div className="common-wrap">
          <header className="section-header">
            <h2 className="section-title"><span>경력</span></h2>
          </header>
          <div className="section-contents">
            경력 내용
          </div>
        </div>
      </section>
      <section className="mc mc-skills">
        <div className="common-wrap">
          <header className="section-header">
            <h2 className="section-title"><span>기술스택</span></h2>
          </header>
          <div className="section-contents">
            기술스택 내용
          </div>
        </div>
      </section>
    </main>
  )
}