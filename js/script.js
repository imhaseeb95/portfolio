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

// ========================
// 	 Menue Bar
// ========================
var menueBar = document.querySelector(".menue-bar");
var navMenu = document.querySelector("nav");
var closeBtn = document.querySelector(".close")



menueBar.addEventListener('click', () =>{
  navMenu.classList.add("active")
  closeBtn.classList.add("active")
  menueBar.classList.add("active")
})
closeBtn.addEventListener('click', () =>{
  navMenu.classList.remove("active")
  closeBtn.classList.remove("active")
  menueBar.classList.remove("active")
})