document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  function showPage(pageId) {
    pages.forEach(page => {
      page.classList.remove('active');
      if (page.id === pageId) {
        page.classList.add('active');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      }
    });

    window.scrollTo(0, 0);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageTarget = link.getAttribute('data-page');
      showPage(pageTarget);
    });
  });

  window.navigateTo = function(pageId) {
    showPage(pageId);
  };
});
