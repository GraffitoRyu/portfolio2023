// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useRecoilValue } from "recoil";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// // style components
// import {
//   CareerCompany,
//   CareerCompanyDivideBar,
//   CareerDesc,
//   CareerItemContainer,
//   CareerPeriod,
//   CareerRole,
//   CareerTitle,
//   CareerTitleFadeBox,
// } from "@/styles/styled/components/ProfileCareer";

// // state
// import { scrollRefState } from "@/states/scroll";

// // type
// import { CareerTypes } from "@/types/profile";
// import { ScrollRefStateTypes } from "@/types/state";

// // style
// import { transTime } from "@/styles/styled/preset/transTime";

// export default function CareerItem({
//   period,
//   role,
//   company,
//   desc,
// }: CareerTypes) {
//   const careerRef = useRef<HTMLLIElement | null>(null);
//   const periodRef = useRef<HTMLDivElement | null>(null);
//   const roleRef = useRef<HTMLElement | null>(null);
//   const companyRef = useRef<HTMLSpanElement | null>(null);
//   const descRef = useRef<HTMLParagraphElement | null>(null);

//   const [divideActive, setDivideActive] = useState<string>("");
//   const [periodActive, setPeriodActive] = useState<string>("");

//   const { container: scrollContainer } =
//     useRecoilValue<ScrollRefStateTypes>(scrollRefState);

//   useEffect(() => {
//     if (!scrollContainer) return;

//     const scrollTrigger = careerRef.current;
//     if (!scrollTrigger) return;

//     const periodTarget = periodRef.current;
//     const roleTarget = roleRef.current;
//     const companyTarget = companyRef.current;
//     const descTarget = descRef.current;
//     if (!periodTarget || !roleTarget || !companyTarget || !descTarget) return;

//     const ctx = gsap.context(() => {
//       // Scroll Trigger 플러그인 사용 시작
//       gsap.registerPlugin(ScrollTrigger);

//       // 스크롤 영역 설정
//       ScrollTrigger.defaults({
//         scroller: scrollContainer,
//       });

//       const timing = {
//         ease: "expo-out",
//         duration: transTime.career / 1000,
//       };

//       const slideUp = {
//         y: "100%",
//         opacity: 0,
//         ...timing,
//       };

//       const slideRight = {
//         x: "-100%",
//         opacity: 0,
//         ...timing,
//       };

//       const stOptions = {
//         trigger: scrollTrigger,
//         start: `bottom 90%`, // target, trigger
//         end: `bottom 90%`, // target, trigger
//       };

//       const tl = gsap.timeline({ scrollTrigger: stOptions });
//       tl.from(periodTarget, {
//         opacity: 0,
//         ...timing,
//         onStart: () => setPeriodActive("on"),
//       });
//       tl.from(
//         roleTarget,
//         {
//           ...slideUp,
//           onStart: () => setDivideActive("on"),
//         },
//         0.16
//       );
//       tl.from(companyTarget, { ...slideRight }, 0.16);
//       tl.from(descTarget, { ...slideUp }, 0.16);
//     });

//     return () => ctx.revert();
//   }, [scrollContainer]);

//   return (
//     <CareerItemContainer className={`career-item`} ref={careerRef}>
//       <CareerPeriod
//         className={`career-period ${periodActive}`}
//         date={period}
//         ref={periodRef}
//       />
//       <CareerTitle className="career-title">
//         <CareerTitleFadeBox>
//           <CareerRole className="career-role" ref={roleRef}>
//             {role}
//           </CareerRole>
//         </CareerTitleFadeBox>
//         <CareerCompanyDivideBar className={`divide-bar ${divideActive}`} />
//         <CareerTitleFadeBox>
//           <CareerCompany className="career-company" ref={companyRef}>
//             {company}
//           </CareerCompany>
//         </CareerTitleFadeBox>
//       </CareerTitle>
//       <CareerDesc className="career-desc" ref={descRef}>
//         {desc}
//       </CareerDesc>
//     </CareerItemContainer>
//   );
// }
