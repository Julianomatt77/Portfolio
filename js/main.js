"use strict";

const experience = document.querySelector("#experienceNav");
const contact = document.querySelector("#contactNav");
const NAV = document.querySelectorAll("nav");
const NAVA = document.querySelectorAll("nav a");
const navLink = document.querySelectorAll(".nav-link");
const navList = document.querySelector("#navList");
const burger = document.querySelector("#burgerMenu");
const burgerIcon = document.querySelector(".navbar-toggler-icon");
const a =
	"url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(32, 43, 103, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\") !important;";

const events = ["resize", "scroll"];

document.addEventListener("DOMContentLoaded", function () {
	//Change bg color while scrolling

	// events.forEach((evt) => {
	// 	window.addEventListener(evt, function () {
	// 		let screenWidth = document.documentElement.clientWidth;
	// 		console.log(screenWidth);
	// 		let scrollpos = window.scrollY;
	// 		if (screenWidth > 767) {
	// 			if (scrollpos > 250) {
	// 				NAVA.forEach((item) => {
	// 					item.classList.add("darkBlue");
	// 				});

	// 				NAV.forEach((item) => {
	// 					item.classList.add("bg-orange");
	// 				});
	// 			} else {
	// 				NAVA.forEach((item) => {
	// 					item.classList.remove("darkBlue");
	// 				});
	// 				NAV.forEach((item) => {
	// 					item.classList.remove("bg-orange");
	// 				});
	// 			}
	// 		}
	// 	});
	// });

	AOS.init();
});
