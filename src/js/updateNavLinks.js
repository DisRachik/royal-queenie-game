const navLinks = document.querySelectorAll('.nav__link');

export const updateNavLinks = () => {
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      link.setAttribute('href', '/' + href);
    }
  });
};
