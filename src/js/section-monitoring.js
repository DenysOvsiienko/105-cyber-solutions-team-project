function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveLinks() {
  const scrollWindowPosition = window.scrollY;
  const headerHeight = header.offsetHeight;

  menuLinks.forEach(link => {
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;
      const sectionBottom = sectionTop + section.clientHeight;

      link.classList.toggle(
        'active',
        scrollWindowPosition >= sectionTop &&
          scrollWindowPosition < sectionBottom
      );
    }
  });
}

const header = document.querySelector('.page-header');
const menuLinks = document.querySelectorAll(
  '.header-menu-link, .menu-nav-link'
);
const scrollToTopLink = document.querySelector('a[href="#hero"]');

window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 0);
  updateActiveLinks();
});

scrollToTopLink.addEventListener('click', scrollToTop);
