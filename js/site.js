// Swiss DigiTech Solutions LLP — small progressive-enhancement script
// Mobile nav toggle + auto-updating footer year. No frameworks, no build step.

(function () {
  var toggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('navMobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu when a link inside it is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEls = document.querySelectorAll('#year');
  var year = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = year; });
})();
