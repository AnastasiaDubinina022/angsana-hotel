'use strict';

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

export default createWarningModal;