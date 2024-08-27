'use strict';

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

export default createInfoCards;