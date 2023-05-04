import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function closeByClickOutside(ref, selector) {
  // 열림 상태 조회
  const [state, setState] = useRecoilState(selector);

  useEffect(() => {
    document.addEventListener("click", closeRef);
    return () => {
      document.removeEventListener("click", closeRef);
    };
  }, [ref, state]);

  function closeRef(e) {
    // 열려있을 때, 바깥을 클릭했을 때
    if (state.isOpen && ref.current && !ref.current.contains(e.target))
      setState(prev => ({
        ...prev,
        isOpen: false, // 닫기
      }));
  }
}
