import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { handleMenuToggle, initNavigationHighlight } from './js';

handleMenuToggle();
initNavigationHighlight();

const gallerySwiper = new Swiper('.gallery__wrap', {
  pagination: {
    el: '.gallery--swiper-pagination__wrap',
    clickable: true,
    renderBullet: function (_, className) {
      return '<button class="' + className + '" type="button"></button>';
    },
  },
  navigation: {
    nextEl: '.gallery--swiper-button__next',
    prevEl: '.gallery--swiper-button__prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1220: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
  },
  modules: [Navigation, Pagination],
});

const reviewsSwiper = new Swiper('.reviews-card__wrap', {
  pagination: {
    el: '.reviews--swiper-pagination__wrap',
    clickable: true,
    renderBullet: function (_, className) {
      return '<button class="' + className + '" type="button"></button>';
    },
  },
  navigation: {
    nextEl: '.reviews--swiper-button__next',
    prevEl: '.reviews--swiper-button__prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1220: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
  },
  modules: [Navigation, Pagination],
});
