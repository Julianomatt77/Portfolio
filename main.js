"use strict";

const experience = document.querySelector("#experienceNav");
const contact = document.querySelector("#contactNav");
const NAV = document.querySelector("nav");
const NAVA = document.querySelectorAll("nav a");

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    if (scrollpos > 400) {
      NAVA.forEach((item) => {
        item.classList.add("darkBlue");
      });
      NAV.classList.add("bg-orange");
    } else {
      NAVA.forEach((item) => {
        item.classList.remove("darkBlue");
      });
      NAV.classList.remove("bg-orange");
      experience.classList.add("darkBlue");
      contact.classList.add("darkBlue");
    }
  });
});
