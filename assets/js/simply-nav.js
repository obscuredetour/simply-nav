// This anonymous function can be inserted anywhere
// (eg. within a <script> tag or anywhere in an existing .js file or its own file)
(navDuty => {
  const sideNav = document.querySelector('.nav-list');
  const toggleNavBtn = document.querySelector('.toggle-nav');
  const burger = document.querySelector('.burger');
  const pageOverlay = document.querySelector('.overlay');
  const body = document.querySelector('body');
  const html = document.querySelector('html');

  // Nav listeners
  toggleNavBtn.addEventListener('click', toggleNav);
  pageOverlay.addEventListener('click', toggleNav);

  // Nav funtion (toggle)
  function toggleNav() {
    sideNav.classList.toggle('-open');
    burger.classList.toggle('open');
    body.classList.toggle('_disableScroll');
    html.classList.toggle('_disableScroll');
  };

  // (on mobile) close nav menu when link is clicked
  // this is useful on mobile when clicking an anchor tag on the current page (eg. index.html#last-section)
  let navLinks = document.querySelectorAll(".link");
  navLinks.forEach(el => {
    el.addEventListener('click', (event) => { toggleNav() });
  });
})();