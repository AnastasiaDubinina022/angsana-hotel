'use strict';

// import { tns } from "/node_modules/tiny-slider/src/tiny-slider";
import { tns } from 'tiny-slider';

function homeGallerySlider() {
    try {
        tns({ 
            container: '.home-gallery__gallery-slider', 
            items: 3, 
            slideBy: 1, 
            autoplay: true,
            autoplayButtonOutput: false,
            arrowKeys: true,
            mouseDrag: true,
            rewind: true,
            gutter: 25,
            edgePadding: 25,
            navAsThumbnails: true,
            controlsContainer: '#gallery-slider-control',
            nav: false,
            touch: true
        }); 
    } catch(error) {
        console.error(error);
    }
    
} 

export default homeGallerySlider;

