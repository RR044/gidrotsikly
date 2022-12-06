import { auto } from '@popperjs/core';
import Swiper from '../vendor/swiper';


// (function () {
//   "use strict";

//   const breakpoint = window.matchMedia("(min-width:1024px)");
//   let slider;

//   const breakpointChecker = function () {
//     if (breakpoint.matches === true) {
//       if (slider !== undefined) slider.destroy(true, true);

//       return;
//     } else if (breakpoint.matches === false) {
//       return enableSwiper();
//     }
//   };
//   const enableSwiper = function () {
//     slider = new Swiper(".mobile-slider", {
//     slidesPerView: "auto",
//     spaceBetween: 20,
//     observer: true,
//     observeParents: true
//     });
//   };

//   breakpoint.addListener(breakpointChecker);
//   breakpointChecker();
// })();

    let boatSlide = new Swiper(".boat-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
    pagination: {
      el: '.boat-pagination'
    },

    breakpoints: {
          // mobile - 120-414
          120: {
            slidesPerView: 1,
          },
           // mobile - 414-576
           414: {
            slidesPerView: 1,
          },
          // mobile + tablet - 576-768
          576: {
            slidesPerView: 1,
            spaceBetween:10,
          },
          // desktop >= 768
          1160: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },

    });



    let popularSlide = new Swiper(".popular-container", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
      // pagination: {
      //   el: '.boat-pagination'
      // },
  
      breakpoints: {
            // mobile - 120-414
            120: {
              slidesPerView: 1,
            },
             // mobile - 414-576
             414: {
              slidesPerView: 2,
            },
            // mobile + tablet - 576-768
            576: {
              slidesPerView: 3,
              spaceBetween:10,
            },
            // desktop >= 768
            1160: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          },
  
      });





    

