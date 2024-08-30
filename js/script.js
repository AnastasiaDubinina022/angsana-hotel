'use strict';

import createWarningModal from "./modules/warning-modal.js";
import homeAboutTabs from "./modules/home-about-tabs.js";
import createInfoCards from "./modules/info-cards.js";
import homeGallerySlider from "./modules/home-galery-slider.js";


window.addEventListener('DOMContentLoaded', () => {
    homeGallerySlider();  
    homeAboutTabs('.tabheader__item', '.tabcontent', '.tabheader', 'tabheader__item_active');
    createInfoCards();
    createWarningModal();
          
});