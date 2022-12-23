export const getHeaderHeight = () => {
  const headerHeight = document?.querySelectorAll('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
}
