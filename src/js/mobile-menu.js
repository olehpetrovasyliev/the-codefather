(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtns = document.querySelectorAll('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const closeMenu = (event) => {
    const target = event.target;
    const isCloseButton = target.classList.contains('js-close-menu');
    const isMenuItem = target.closest('.js-menu-container');

    if (isCloseButton || isMenuItem) {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);

      // якщо було клікнуто на якірне посилання, то переходимо на сторінку
      if (target.closest('a') && target.classList.contains('js-close-menu')) {
        const href = target.closest('a').getAttribute('href');
        if (href && href !== '#') {
          window.location.href = href;
        }
      }
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtns.forEach((btn) => {
    btn.addEventListener('click', closeMenu);
  });
  mobileMenu.addEventListener('click', closeMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
