const navLinks = document.querySelectorAll('.nav__link');

const handleIntersection = (entries, navLinks) => {
  entries.forEach(entry => {
    const targetId = entry.target.getAttribute('id');
    const navLink = document.querySelector(`.nav__link[href="#${targetId}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
};

const createObserver = (callback, options) =>
  new IntersectionObserver(callback, options);

const observeSections = (observer, navLinks) => {
  navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      observer.observe(targetSection);
    }
  });
};

export const initNavigationHighlight = (options = {}) => {
  const defaultOptions = {
    rootMargin: '-50px 0px -50% 0px',
    threshold: 0,
  };

  const observerOptions = { ...defaultOptions, ...options };

  const observer = createObserver(
    entries => handleIntersection(entries, navLinks),
    observerOptions
  );

  observeSections(observer, navLinks);
};
