import './about.css';
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";

const swiper = new Swiper(".swiper__container", {
    slidesPerView: 1,
    spaceBetween: 16,
    wrapperClass: "swiper__wrapper",
    slideClass: "swiper__commit",
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
        nextEl: ".swiper__button-next",
        prevEl: ".swiper__button-prev",
    },
    pagination: {
        el: ".swiper__pagination",
        type: 'bullets',
        bulletClass: 'swiper__pagination-bullet',
        bulletActiveClass: 'swiper__pagination-bullet_active',
        clickable: true,
    },

});


