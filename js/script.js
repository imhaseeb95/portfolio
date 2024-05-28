'use strict';

// ========================
// 	 Header scroll
// ========================

var headerScroll = document.querySelector("header");
var headerY = 0;

window.addEventListener("scroll", function () {
  var haederTop = window.scrollY;
  if (haederTop > headerY) {
    headerScroll.classList.add("active");
  } else {
    headerScroll.classList.remove("active");
  }
});