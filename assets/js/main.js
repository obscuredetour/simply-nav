// main page JS - simply-nav does not need this
(stickyNav => {
  const button = document.querySelector('.button-default');
  const onOffHTML = document.querySelector('.sticky-text');
  const on = '<strong>On</strong>';
  const off = '<strong>Off</strong>';
  const navWrapper = document.querySelector('.nav-wrapper');

  button.addEventListener('click', () => {
    navWrapper.classList.toggle('-sticky');
    (navWrapper.classList.contains('-sticky') ? onOffHTML.innerHTML = on : onOffHTML.innerHTML = off);
  });
})();