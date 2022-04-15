'use strict';

const header = document.querySelector('header');
const closeBtn = document.querySelector('.close');
const backTop = document.querySelector('.backTop');
const sidebar = document.querySelector('.sidebar');
const bannerSection = document.querySelector('#slider');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// ----- Intersection Observer -------------------------------------------------------------------


const options = {
    threshold: 1
};

const headerObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky'));
}, options);

const scrollObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => !entry.isIntersecting ? backTop.classList.add('active') : backTop.classList.remove('active'));
}, options);

headerObserver.observe(bannerSection);
scrollObserver.observe(bannerSection);


// ----- Event Listeners -------------------------------------------------------------------


const openSidebar = () => {
    sidebar.classList.add('show');
    sidebar.classList.remove('hide');
};

const closeSidebar = () => {
    sidebar.classList.add('hide');
    sidebar.classList.remove('show');
};

closeBtn.addEventListener('click', closeSidebar);
hamburgerMenu.addEventListener('click', openSidebar);
document.addEventListener('keydown', (e) => e.key === 'Escape' ? closeSidebar() : false);
document.addEventListener('click', e => !e.target.closest('header') ? closeSidebar() : false);

backTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ----- Swiper -------------------------------------------------------------------


const swiperSlider = new Swiper('#banner-slider', {

    loop: true,
    effect: "fade",
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    }
});

const swiperClient = new Swiper('#client-slider', {

    loop: true,
    keyboard: true,
    slidesPerView: 3,
    loopedSlides: 50,
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        350: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1440: { slidesPerView: 3 }
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});