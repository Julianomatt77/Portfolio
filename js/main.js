"use strict";

const experience = document.querySelector("#experienceNav");
const contact = document.querySelector("#contactNav");
const NAV = document.querySelectorAll("nav");
const NAVA = document.querySelectorAll("nav a");
const navLink = document.querySelectorAll(".nav-link");
const navList = document.querySelector("#navList");

document.addEventListener("DOMContentLoaded", function () {
	//Change bg color while scrolling
	window.addEventListener("scroll", function () {
		let scrollpos = window.scrollY;
		if (scrollpos > 250) {
			NAVA.forEach((item) => {
				item.classList.add("darkBlue");
			});
			NAV.forEach((item) => {
				item.classList.add("bg-orange");
			});
		} else {
			NAVA.forEach((item) => {
				item.classList.remove("darkBlue");
			});
			NAV.forEach((item) => {
				item.classList.remove("bg-orange");
			});
			// experience.classList.add("darkBlue");
			// contact.classList.add("darkBlue");
		}
	});

	navList.addEventListener("mouseover", function (event) {
		event.target.classList.add("darkBlue");
	});
	navList.addEventListener("mouseout", function (event) {
		let scrollpos = window.scrollY;
		if (scrollpos < 250) {
			event.target.classList.remove("darkBlue");
		}
	});

	AOS.init();
});
