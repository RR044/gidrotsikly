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

    let twitSlider = new Swiper(".offer-swap", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-prev1',
      prevEl: '.swiper-button-next1',
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
            slidesPerView: 2,
            spaceBetween:10,
          },
          // desktop >= 768
          1160: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },

    
    });

    let updateSlider = new Swiper(".update-swap", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination2',
      },
      navigation: {
        nextEl: '.swiper-button-prev2',
        prevEl: '.swiper-button-next2',
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
          slidesPerView: 2,
          spaceBetween:10,
        },
        // desktop >= 768
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
  
      
      });


  // let gallarySlider = new Swiper(".gallary-swap", {
  // slidesPerView: 4,
  // spaceBetween: 30,
  // loop: true,
  // observer: true,
  // observeParents: true,
  // navigation: {
  // nextEl: '.swiper-button-prev3',
  // prevEl: '.swiper-button-next3',
  //   },
    
  //   breakpoints: {
  //     // mobile - 320-414
  //     320: {
  //       slidesPerView: 1,
  //     },
  //      // mobile - 414-576
  //      414: {
  //       slidesPerView: 2,
  //     },
  //     // mobile + tablet - 576-768
  //     576: {
  //       slidesPerView: 3,
  //       spaceBetween:20,
  //     },
  //     // desktop >= 768
  //     768: {
  //       slidesPerView: 4,
  //       spaceBetween: 30,
  //     },
  //   },
    
    // });
    

