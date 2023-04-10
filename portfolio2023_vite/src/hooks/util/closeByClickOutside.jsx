export default function closeByClickOutside(ref, isOpen, callback) {
  const close = (e) => {
    if (isOpen && ref.current && !ref.current.contains(e.target)) callback();
  };

  window.addEventListener("click", close);
  return () => {
    window.removeEventListener("click", close);
  };
}
