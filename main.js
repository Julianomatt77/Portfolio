"use strict";

const experience = document.querySelector("#experienceNav");
const contact = document.querySelector("#contactNav");
const NAV = document.querySelectorAll("nav li");
const NAVA = document.querySelectorAll("nav a");

document.addEventListener("DOMContentLoaded", function () {
  //Change bg color while scrolling
  window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    if (scrollpos > 250) {
      NAVA.forEach((item) => {
        item.classList.add("darkBlue");
      });
      NAVA.forEach((item) => {
        item.classList.add("bg-orange");
      });
    } else {
      NAVA.forEach((item) => {
        item.classList.remove("darkBlue");
      });
      NAVA.forEach((item) => {
        item.classList.remove("bg-orange");
      });
      experience.classList.add("darkBlue");
      contact.classList.add("darkBlue");
    }
  });
});
