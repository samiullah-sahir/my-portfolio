const nav = document.querySelector('.navbar');

const linksFadOut = function () {
  const handleHover = function (e, opacity) {
    if (e.target.classList.contains('nav-link')) {
      const link = e.target;

      const siblings = link.closest('.navbar').querySelectorAll('.nav-link');

      const logo = link.closest('.navbar').querySelector('.navbar-brand');

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = opacity;
      });
      logo.style.opacity = opacity;
    }
  };

  nav.addEventListener('mouseover', (e) => {
    handleHover(e, 0.5);
  });

  nav.addEventListener('mouseout', (e) => {
    handleHover(e, 1);
  });
};
linksFadOut();