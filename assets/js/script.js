'use strict';
import './modules/news-slider.js';
import './modules/mobile-navigation.js';

////////////////////////////////////////////////////////////////////
//// Fixing the height gap on header scroll
document.addEventListener('DOMContentLoaded', () => {
  const elNav = document.querySelector('.nav');
  const heightElNav = elNav.getBoundingClientRect().height;
  document.body.style.paddingTop = heightElNav + 'px';
});
