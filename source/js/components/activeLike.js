import vars from '../_vars';

import { toggleCustomClass } from '../functions/customFunctions';

const btns = document.querySelectorAll('.actionCard-like');

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        toggleCustomClass(btn, 'active');
    }) 
    
});