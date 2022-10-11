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

// ------------------ Tab component ---------------------
const operationTabs = document.querySelector('.operation__tabs--container')
const tabs = document.querySelectorAll('.operation__tab')
const tabsContent = document.querySelectorAll('.operation__content')
///////////////////////////////////////
const tabComponent = function(){
  operationTabs.addEventListener('click', function (e) {
    e.preventDefault()
    const clicked = e.target.closest('.operation__tab')
  
    if (!clicked) return
    tabs.forEach((tab) => tab.classList.remove('operation__tab--active'))
    clicked.classList.add('operation__tab--active')
  
    tabsContent.forEach((content) =>
      content.classList.remove('operations__content--active'),
    )
  
    const numbers = clicked.dataset.tab
  
    const tabss = document.querySelector(`.operation__content--${numbers}`)
    tabss.classList.add('operations__content--active')
  
  })
};
tabComponent();