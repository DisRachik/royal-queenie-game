const burgerMenu = document.querySelector('.nav');
const burgerMenuBtn = document.querySelector('.burger-menu');
const headerContainer = document.querySelector('.header--container');

const toggleMenu = () => {
  const isMenuOpen = burgerMenuBtn.getAttribute('aria-expanded') === 'true';
  burgerMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  burgerMenu.classList.toggle('is-open');
  headerContainer.classList.toggle('is-open');
  burgerMenuBtn.classList.toggle('is-open');
  burgerMenuBtn.blur();
  document.body.classList.toggle('no-scroll');
};

const closeMenu = e => {
  const isBurgerActive =
    window.innerWidth <= 1220 || document.body.clientWidth <= 1220;
  if (e.target.classList.contains('nav__link') && isBurgerActive) toggleMenu();
};

export const handleMenuToggle = () => {
  burgerMenuBtn.addEventListener('click', toggleMenu);
  burgerMenu.addEventListener('click', closeMenu);

  window.matchMedia('(max-width: 1220px)').addEventListener('change', e => {
    if (e.matches) return;

    burgerMenuBtn.setAttribute('aria-expanded', false);
    burgerMenu.classList.remove('is-open');
    headerContainer.classList.remove('is-open');
    burgerMenuBtn.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
};
