'use strict';

const header = document.querySelector('header');
const closeBtn = document.querySelector('.close');
const backTop = document.querySelector('.backTop');
const sidebar = document.querySelector('.sidebar');
const bannerSection = document.querySelector('#slider');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const fadeIns = document.querySelectorAll('.fade-in');
const slideIns = document.querySelectorAll('.slide-in');

// ----- Intersection Observer -------------------------------------------------------------------


const options = {
    threshold: 1
};

const appearOptions = {
    threshold: 0.7,
    rootMargin: '-100px 0px -100px 0px'
};

const headerObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky'));
}, options);

const scrollObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => !entry.isIntersecting ? backTop.classList.add('active') : backTop.classList.remove('active'));
}, options);

let appearObserver = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearObserver.unobserve(entry.target);
        }
    });
}, appearOptions);

headerObserver.observe(bannerSection);
scrollObserver.observe(bannerSection);

fadeIns.forEach(fadeIn => {
    appearObserver.observe(fadeIn);
});

slideIns.forEach(slideIn => {
    appearObserver.observe(slideIn);
});



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

    init: true,
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

    init: true,
    loop: true,
    speed: 1500,
    keyboard: true,
    spaceBetween: 30,
    loopedSlides: 50,
    grabCursor: true,
    slidesPerView: "auto",
    breakpointsInverse: true,
    loopFillGroupWithBlank: false,

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