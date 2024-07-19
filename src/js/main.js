import burger from './burger.js';
import cart from './cart.js';
import dropMenu from './dropMenu.js';
import logo from './logo.js';
import quickOrderConsultPopup from './quickOrderConsultPopup.js';
import consultationOrder from './consultationOrder.js';
import shadow from './shadow.js';
import uCash from './uCash.js';
import tabs from './tabs.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.reviews__card__arrow-left',
		prevEl: '.reviews__card__arrow-right',
		// nextEl: '.swiper-button-prev',
		// prevEl: '.swiper-button-next',
	},

	slidesPerView: 1,
	autoHeight: true,
	effect: 'fade',
	speed: 1000,
	fadeEffect: {
		crossFade: true,
		// duration: 5000,
	},
});

const carouselSwiper = new Swiper('.carousel__image', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.carousel__arrow-left',
		prevEl: '.carousel__arrow-right',
	},

	slidesPerView: 1,
	// autoHeight: true,
	speed: 600,

	pagination: {
		el: '.carousel__pagination',
		clickable: true,
	},
});

const artifactsSlider = new Swiper('.artifacts-card .slider-swiper', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.artifacts-card .arrow-left',
		prevEl: '.artifacts-card .arrow-right',
	},

	slidesPerView: 1,
	breakpoints: {
		360: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		769: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
	},
	// autoHeight: true,
	speed: 600,
});

const cardsSwiper1 = new Swiper('.cards__swiper_cards1', {
	loop: true,

	slidesPerView: 1,
	// autoHeight: true,
	speed: 600,

	pagination: {
		el: '.cards__pagination',
		clickable: true,
	},
});

const cardsSwiper2 = new Swiper('.cards__swiper_cards2', {
	loop: true,

	slidesPerView: 1,
	// autoHeight: true,
	speed: 600,

	pagination: {
		el: '.cards__pagination',
		clickable: true,
	},
});

const cardsSwiper3 = new Swiper('.cards__swiper_cards3', {
	loop: true,

	slidesPerView: 1,
	// autoHeight: true,
	speed: 600,

	pagination: {
		el: '.cards__pagination',
		clickable: true,
	},
});

const cardsSwiper4 = new Swiper('.cards__swiper_cards4', {
	loop: true,

	slidesPerView: 1,
	// autoHeight: true,
	speed: 600,

	pagination: {
		el: '.cards__pagination',
		clickable: true,
	},
});

const cardsSwiper5 = new Swiper('.cards__swiper_cards5', {
	loop: true,

	slidesPerView: 1,
	// autoHeight: true,
	speed: 600,

	pagination: {
		el: '.cards__pagination',
		clickable: true,
	},
});

const cardsSwiper6 = new Swiper('.cards__swiper_cards6', {
	loop: true,

	slidesPerView: 1,
	// autoHeight: true,
	speed: 600,

	pagination: {
		el: '.cards__pagination',
		clickable: true,
	},
});

const cardsSwiper7 = new Swiper('.cards__swiper_cards7', {
	loop: true,

	slidesPerView: 1,
	// autoHeight: true,
	speed: 600,

	pagination: {
		el: '.cards__pagination',
		clickable: true,
	},
});

const cardsSwiper8 = new Swiper('.cards__swiper_cards8', {
	loop: true,

	slidesPerView: 1,
	// autoHeight: true,
	speed: 600,

	pagination: {
		el: '.cards__pagination',
		clickable: true,
	},
});

Fancybox.bind('[data-fancybox]', {
	// Your custom options
	imageScale: true,
});

burger();

logo();

dropMenu();

cart();

quickOrderConsultPopup();

consultationOrder();

shadow();

uCash();

tabs();
