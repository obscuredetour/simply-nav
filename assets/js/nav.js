// This anonymous function can be inserted anywhere
// (eg. within a <script> tag or anywhere in an existing .js file or its own file)
(navDuty => {   
  const sideNav = document.getElementById('sideNav');
  const closeNavBtn = document.querySelector('.closeBtn');
  const toggleNavBtn = document.querySelector('.toggleNav');
  const pageOverlay = document.querySelector('.page__overlay');

  // Nav listeners
  closeNavBtn.addEventListener('click', toggleNav);
  toggleNavBtn.addEventListener('click', toggleNav);
  pageOverlay.addEventListener('click', toggleNav);
  // Nav funtion
  function toggleNav() {
    sideNav.classList.toggle('open');
  };

  // (on mobile) close nav menu when link is clicked
  // this is useful on mobile when clicking an anchor tag on the current page (eg. index.html#last-section)
  let navItems = document.querySelectorAll(".nav__item");                     
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function (event) {
      toggleNav();
    });
  }
})();


//non related - this can be deleted
(stickyNav => {
  const button = document.querySelector('button');
  const onOffHTML = document.querySelector('.sticky-on-off');
  const on = '<strong>On</strong>';
  const off = '<strong>Off</strong>';
  const navWrapper = document.querySelector('.nav-wrapper');

  button.addEventListener('click', toggleStickyNav => {
    navWrapper.classList.toggle('sticky-nav');
    (navWrapper.classList.contains('sticky-nav') ? onOffHTML.innerHTML = on : onOffHTML.innerHTML = off);
  });

})();