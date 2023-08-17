// Import core Swiper library
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

// Initialize Swiper
const swiper = new SwiperCore('.swiper', {
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    // Include Swiper modules
    modules: [Navigation, Pagination],
});
