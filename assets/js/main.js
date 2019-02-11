// main page JS - simply-nav does not need this
(pageDuty => {
  const stickyToggle = document.querySelector('.button-default.-sticky');
  const stickyText = document.querySelector('.sticky-text');
  const menuToggle = document.querySelector('.button-default.-menu');
  const menuText = document.querySelector('.menu-text');
  const bottomNavToggle = document.querySelector('.button-default.-bottomnav');
  const bottomNavText = document.querySelector('.bottomnav-text');
  const on = '<strong>On</strong>';
  const off = '<strong>Off</strong>';
  const navWrapper = document.querySelector('.nav-wrapper');
  const mainWrapper = document.querySelector('main');
  const burgerIcon = document.querySelector('.burger');

  stickyToggle.addEventListener('click', () => {
    navWrapper.classList.toggle('-sticky');
    (navWrapper.classList.contains('-sticky') ? stickyText.innerHTML = on : stickyText.innerHTML = off);
  });

  menuToggle.addEventListener('click', () => {
    burgerIcon.classList.toggle('-offset');
    (burgerIcon.classList.contains('-offset') ? menuText.innerHTML = off : menuText.innerHTML = on);
  });

  bottomNavToggle.addEventListener('click', () => {
    navWrapper.classList.toggle('-sticky');
    navWrapper.classList.toggle('-bottom');
    mainWrapper.classList.toggle('-bottomnav');
    if (navWrapper.classList.contains('-bottom')) {
      bottomNavText.innerHTML = on;
      stickyText.innerHTML = on;
    } else {
      bottomNavText.innerHTML = off;
      stickyText.innerHTML = off;
    }
  });
})();