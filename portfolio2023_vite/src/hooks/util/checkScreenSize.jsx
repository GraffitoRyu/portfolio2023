export default function checkScreenSize() {
  const size_ = [window.innerWidth, window.innerHeight];
  document.documentElement.style.setProperty('--screen-size-x', `${size_[0]}px`);
  document.documentElement.style.setProperty('--screen-size-y', `${size_[1]}px`);
}