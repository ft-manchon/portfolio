import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import 'swipper/css';
import 'swipper/css/navigation';
import 'swipper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});