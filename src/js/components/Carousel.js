import {select} from '../settings.js';

class Carousel {
    constructor(element) {
        const thisCarousel = this;

        thisCarousel.dom = {};
        thisCarousel.dom.element = element;
        thisCarousel.initCarousel();
    }

    initCarousel() {
        const thisCarousel = this;

        thisCarousel.dom.carousel = document.querySelector(select.home.carouselPlugin);
        console.log(thisCarousel.dom.carousel);
    
        const flkty = new Flickity( thisCarousel.dom.carousel, {
          cellAlign: 'left',
          contain: true,
          autoPlay: 3000,
          wrapAround: true
        });
    }
}

export default Carousel;