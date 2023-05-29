import { templates, select, classNames } from '../settings.js';

class Home {
    constructor(element){
        const thisHome = this;
    
        thisHome.render(element);
        thisHome.initActions();
    }

    render(element) {
        const thisHome = this;

        const generatedHTML = templates.homePage();

        thisHome.dom = {};
        thisHome.dom.wrapper = element;
        thisHome.dom.wrapper.innerHTML = generatedHTML;
    }

    initActions() {
      const thisHome = this;
  
      thisHome.pages = document.querySelector(select.containerOf.pages).children;
      thisHome.navLinks = document.querySelectorAll(select.nav.links);
      thisHome.homeNavLinks = document.querySelectorAll(select.home.links);
  
      for (let link of thisHome.homeNavLinks){
        link.addEventListener('click', function(event){
          event.preventDefault();
          const clickedElement = this;
  
          const pageId = clickedElement.getAttribute('href').replace('#', '');
          thisHome.activatePage(pageId);
          window.location.hash = '#/' + pageId;
        });
      }
    }
  
    activatePage(pageId) {
      const thisHome = this;
  
      for(let page of thisHome.pages) {
        page.classList.toggle(classNames.pages.active, page.id == pageId);
      }
  
      for(let link of thisHome.navLinks) {
        link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
      }
    }
}

export default Home;