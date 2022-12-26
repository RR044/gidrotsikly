import { removeClassInArray,addCustomClass,addClassInArray } from "../functions/customFunctions";


const tabParents = [...document.querySelectorAll('[data-tabs-parrent]')];


function tabFunction(initAttr, navAttr, contentAttr, activeClass = 'active'){ 

    initAttr.map((tabParent) => {
      if(tabParent) {

        const tabNav = [...tabParent.querySelectorAll(`[${navAttr}]`)];
        const tabContent = [...tabParent.querySelectorAll(`[${contentAttr}]`)];
  
        tabNav.map((nav) => {
          nav.addEventListener('click', (e) => {
            e.preventDefault();
          
            const activeTabAttr = e.target.getAttribute(`${navAttr}`);

            removeClassInArray(tabNav, activeClass);
            removeClassInArray(tabContent, activeClass);
            addCustomClass(tabParent.querySelector(`[${navAttr}="${activeTabAttr}"]`), activeClass);
            addCustomClass(tabParent.querySelector(`[${contentAttr}="${activeTabAttr}"]`), activeClass);  
          });
        });
      }
    });
}

 
tabFunction(tabParents, 'data-tab', 'data-tab-content');
// tabFunction(tabParents, 'data-inner-tab', 'data-inner-content');
// tabFunction(tabParents, 'data-analitics-tab', 'data-analitics-content');
// tabFunction(tabParents, 'data-statistics-tab', 'data-statistics-content');

