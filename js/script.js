'use strict';

import createWarningModal from "./modules/warningModal.js";
import homeAboutTabs from "./modules/homeAboutTabs.js";
import createInfoCards from "./modules/infoCards.js";


window.addEventListener('DOMContentLoaded', () => {
    homeAboutTabs('.tabheader__item', '.tabcontent', '.tabheader', 'tabheader__item_active');
    createInfoCards();
    createWarningModal();
});