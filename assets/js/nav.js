// This anonymous function can be inserted anywhere
// (eg. within a <script> tag or anywhere in an existing .js file or its own file)
(navDuty => {
  const sideNav = document.querySelector('.nav-list');
  const toggleNavBtn = document.querySelector('.toggle-nav');
  const burger = document.querySelector('.burger');
  const pageOverlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  // Nav listeners
  toggleNavBtn.addEventListener('click', toggleNav);
  pageOverlay.addEventListener('click', toggleNav);
  // Nav funtion
  function toggleNav() {
    sideNav.classList.toggle('-open');
    burger.classList.toggle('open');
    body.classList.toggle('_overflowy-hidden');
    // if (sideNav.classList.contains('-open')) {
    //   sideNav.addEventListener('touchmove', (e) => { e.preventDefault() })
    // }
  };

  // (on mobile) close nav menu when link is clicked
  // this is useful on mobile when clicking an anchor tag on the current page (eg. index.html#last-section)
  let navLinks = document.querySelectorAll(".link");
  navLinks.forEach(el => {
    el.addEventListener('click', (event) => { toggleNav() });
  });
})();


//non related - this can be deleted
(stickyNav => {
  const button = document.querySelector('.button-default');
  const onOffHTML = document.querySelector('.sticky-text');
  const on = '<strong>On</strong>';
  const off = '<strong>Off</strong>';
  const navWrapper = document.querySelector('.nav-wrapper');

  button.addEventListener('click', toggleStickyNav => {
    navWrapper.classList.toggle('-sticky');
    (navWrapper.classList.contains('-sticky') ? onOffHTML.innerHTML = on : onOffHTML.innerHTML = off);
  });

})();