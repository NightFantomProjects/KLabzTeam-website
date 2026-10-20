(() => {
  document.documentElement.classList.add('js');

  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.primary-nav');
  const navigationLinks = navigation ? navigation.querySelectorAll('a') : [];
  const currentYear = document.querySelector('#current-year');

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  if (!toggle || !navigation) return;

  const closeNavigation = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigationLinks.forEach((link) => link.addEventListener('click', closeNavigation));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });
})();
