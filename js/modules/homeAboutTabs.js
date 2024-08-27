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

export default homeAboutTabs;