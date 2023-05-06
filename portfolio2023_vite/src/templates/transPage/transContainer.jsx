import React, { createRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import ScrollContainer from "./scrollContainer";
import TransCover from "../../components/trans/cover";
import ProjectDetails from "../projectDetails/container";

// data
import { sitemapData } from "../../data/sitemap";

// state
import { pageState } from "../../hooks/state/page";

export default function transContainer() {
  const loc = useLocation();
  const nowPagePath = loc.pathname;
  const [page, setPageState] = useRecoilState(pageState);
  const _outlet = useOutlet();

  // 페이지 전환 컨텐츠 ref 설정
  const routesData = sitemapData
    .filter(r => !r.external && !r.contact)
    .map(d => ({ ...d, nodeRef: createRef() }));
  const { nodeRef } = routesData.find(r => r.path === nowPagePath) ?? {};

  const updateTransState = state => {
    // console.log(`[ UPDATE TRANSITION STATE ] :: state: `, state);
    setPageState(prev => ({ ...prev, transStep: state }));
  };

  return (
    <TransitionGroup className="trans-container w-full h-full overflow-hidden">
      <CSSTransition
        classNames="trans"
        key={nowPagePath}
        nodeRef={nodeRef}
        timeout={page.transDuration}
        unmountOnExit
        // enter -> exit => entering -> exiting -> entered -> exited
        onEnter={() => updateTransState("enter")}
        onEntering={() => updateTransState("entering")}
        onEntered={() => updateTransState("entered")}
        onExit={() => updateTransState("exit")}
        onExiting={() => updateTransState("exiting")}
        onExited={() => updateTransState("exited")}
      >
        {state => {
          // 스크롤 컨테이너 분리; 페이지 이동 시 스크롤 안먹힘 수정 필요
          return (
            <div
              className="w-full h-full overflow-hidden top-0 left-0"
              ref={nodeRef}
            >
              <ScrollContainer contents={_outlet} />
              <ProjectDetails />
            </div>
          );
        }}
      </CSSTransition>
      <TransCover type="slide" />
    </TransitionGroup>
  );
}
