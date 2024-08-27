/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/homeAboutTabs.js":
/*!*************************************!*\
  !*** ./js/modules/homeAboutTabs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homeAboutTabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    try {
        const tabs = document.querySelectorAll(tabsSelector);
        const tabsContent = document.querySelectorAll(tabsContentSelector);
        const tabsParent = document.querySelector(tabsParentSelector);
    
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.remove('show');
                item.classList.add('hide');
            });
    
            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
    
        function showTabContent(i = 3) {
            tabsContent[i].classList.remove('hide');
            tabsContent[i].classList.add('show', 'fade');
            tabs[i].classList.add(activeClass);
        }
    
        hideTabContent();   
        showTabContent();
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
    
            if(target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((item, i) => {
                    if(target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    } catch(error) {
        console.error(error);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeAboutTabs);

/***/ }),

/***/ "./js/modules/infoCards.js":
/*!*********************************!*\
  !*** ./js/modules/infoCards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


 // facilities cards

function createInfoCards() {

    class InfoCard {
        constructor(src, alt, title, descr, addition, btn, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.addition = addition;
            this.btn = btn;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0 || !this.classes.includes('facilities__facilities-item')) {
                this.classes = 'facilities__facilities-item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                <div class="facilities-item__image content-image">
                    <img src=${this.src} alt=${this.alt} />
                </div>
                <div class="facilities-item__info">
                    <div class="facilities-item__title">
                        <h3>${this.title}</h3>
                    </div>
                    <div class="facilities-item__text">
                        <p>${this.descr}</p>
                        <p>${this.addition}</p>
                    </div>

                    <div class="facilities-item__button yellow-button blocked">
                        <a href="#" target="_blank">${this.btn}</a>
                    </div>
                </div>
            `;
            this.parent.append(element);  
        }
    }

    try {

        const spaCard = new InfoCard(
            "../images/facilities-spa.jpg",
            "facilities-spa",
            'Angsana SPA',
            'Relax and rejuvenate with invigorating treatments using sustainable products at our award-winning Angsana spa. Enjoy perfected massage sessions with our therapists or salon services with our specialists.',
            'Open: 10:00 - 21:00 hrs.',
            '360 virtual tour',
            '.facilities__container'
        );
    
        spaCard.render();
    
        const fitnessCard = new InfoCard(
            "../images/facilities-fitness.jpg",
            "facilities-fitness",
            'Fitness centre',
            'Enjoy a Yoga or Pilates class while soaking in the sights and sounds of this tropical oasis. Experience the thrill of Thai boxing or stay in shape with a fitness session in our fully equipped gym.',
            'Open: 24 hrs.',
            '360 virtual tour',
            '.facilities__container'
        );
        
        fitnessCard.render();
    
        const restaurantsCard = new InfoCard(
            "../images/facilities-restaurants.jpg",
            "facilities-restaurants",
            'Restaurants',
            'Our resort offers an extensive range of dining options that cater to all taste buds and occasions. Whether you are looking for a quick bite or a fine-dining experience, we have got you covered.',
            'Open: 10:00 - 00:00 hrs.',
            '360 virtual tour',
            '.facilities__container'
        );
        
        restaurantsCard.render();
    
        const swimingPoolCard = new InfoCard(
            "../images/facilities-swimming-pool.jpg",
            "facilities-swimming-pool",
            'Swimming pool',
            'Dive into pure bliss at our resorts 323-meter free-form pool! Swim across the winding pool course, soak up the sun on our artificial beach, or relax on our lazy river. That is not all - our activity zone and jet pool will take your resort experience to a whole new level of awesome!',
            'Open: 8:00- 23:30 hrs.',
            '360 virtual tour',
            '.facilities__container'
        );
        
        swimingPoolCard.render();
    
        const poolsideBarCard = new InfoCard(
            "../images/facilities-poolside-bar.jpg",
            "facilities-poolside-bar",
            'Poolside bar',
            'Fresh juices, delicious treats, and unique cocktail blends. Our bars provide an elegant and relaxed atmosphere, perfect for any occasion.',
            '11:00 - 22:00 hrs.',
            '360 virtual tour',
            '.facilities__container'
        );
        
        poolsideBarCard.render();
    
        const beachCard = new InfoCard(
            "../images/facilities-baech.jpg",
            "facilities-beach",
            'Beach',
            'Wade into the aquamarine waters of the Andaman Sea or soak in the sun on our sandy beach, a short 2-minute walk from the resort.',
            'Open: 24 hrs.',
            '360 virtual tour',
            '.facilities__container'
        );
        
        beachCard.render();
    
        const golfCard = new InfoCard(
            "../images/facilities-golf.jpg",
            "facilities-golf",
            'Golf',
            'Tee off at our award-winning Laguna Golf Phuket. This international standard championship golf course with picturesque views offers an experience like no other.',
            'Open: 06:00 - 19:00 hrs.',
            '360 virtual tour',
            '.facilities__container'
        );
        
        golfCard.render();
    
        const eventsCard = new InfoCard(
            "../images/facilities-events.jpeg",
            "facilities-events",
            'Events and meetengs',
            'With a capacity to host over 1,000 guests both indoors and outdoors, our resort is the ultimate destination for unforgettable weddings, meetings, events, and gala celebrations.',
            'MISE-lagunaphuket@angsana.com',
            'Get in touch now!',
            '.facilities__container'
        );
        
        eventsCard.render();
    } catch(error) {
        console.error(error);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInfoCards);

/***/ }),

/***/ "./js/modules/warningModal.js":
/*!************************************!*\
  !*** ./js/modules/warningModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function createWarningModal() { 

    function createModal() {
        const body =  document.querySelector('body');
        const wrapper = document.querySelector('.wrapper');
        const modalWrapper = document.createElement('div');
        const modalText = document.createElement('div');

        modalWrapper.classList.add('warning-modal');
        modalText.classList.add('warning-modal__text');
        modalText.textContent = 'This section is currently under development.';
        modalWrapper.append(modalText);
        wrapper.append(modalWrapper);

        const showModal = () => {
            modalWrapper.classList.remove('warning-modal_hide');
            modalWrapper.classList.add('warning-modal_show');
            body.classList.remove('unlocked-scroll');
            body.classList.add('locked-scroll');

        };

        const hideModal = () => {
            modalWrapper.classList.remove('warning-modal_show');
            modalWrapper.classList.add('warning-modal_hide');
            body.classList.remove('locked-scroll');
            body.classList.add('unlocked-scroll');
        };

        modalWrapper.addEventListener('click', (event) => {
            if (event.target.classList.value !== 'warning-modal__text') {
                hideModal();
            }
        });
        
        const blockedList = document.querySelectorAll('.blocked');

        // console.log('blockedList: ', blockedList)
        
        blockedList.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                showModal();
            });
        });
    }

    createModal();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWarningModal);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_warningModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/warningModal.js */ "./js/modules/warningModal.js");
/* harmony import */ var _modules_homeAboutTabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homeAboutTabs.js */ "./js/modules/homeAboutTabs.js");
/* harmony import */ var _modules_infoCards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/infoCards.js */ "./js/modules/infoCards.js");







window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_homeAboutTabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.tabheader__item', '.tabcontent', '.tabheader', 'tabheader__item_active');
    (0,_modules_infoCards_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_warningModal_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map