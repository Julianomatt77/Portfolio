"use strict";

const experience = document.querySelector("#experienceNav");
const contact = document.querySelector("#contactNav");
const NAV = document.querySelector("nav");
const NAVA = document.querySelector("nav a");

document.addEventListener("DOMContentLoaded", function () {
  /*
  window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;

    if (scrollpos > 300) {
      experience.classList.remove("darkBlue");
      console.log(scrollpos);
    } else {
      experience.classList.add("darkBlue");
    }
    if (scrollpos > 475) {
      contact.classList.remove("darkBlue");
      console.log(scrollpos);
    } else {
      contact.classList.add("darkBlue");
    }
    console.log(scrollpos);
  });
  */
  window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    if (scrollpos > 475) {
      NAVA.classList.add("darkBlue");
      NAV.classList.add("bg-orange");
    } else {
      NAVA.classList.remove("darkBlue");
      NAV.classList.remove("bg-orange");
    }
  });
});
