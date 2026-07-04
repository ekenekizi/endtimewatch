"use strict";
const sectionHero = document.querySelector(".hero-section");
const sectionAbout = document.querySelector(".about-section");
const sectionDiscover = document.querySelector(".discover-section");
const sectionCta = document.querySelector(".cta-section");
const header = document.querySelector(".header");
const logos = document.querySelectorAll(".header__logo");

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".header__nav-item");

const animatedElements = document.querySelectorAll(".animate");

const currentYear = document.querySelector(".current-year");

const now = new Date();
// console.log(now.getFullYear());
currentYear.textContent = now.getFullYear();

header.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains("header__nav-item")) {
    // console.log(e.target);
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });

    // console.log(id)
  }

  // if (e.target.classList.contains("header__logo")) {
  //   const id = e.target.getAttribute("href");
  //   document.querySelector(id).scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }
});

logos.forEach((logo) =>
  logo.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }),
);

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      // nav link highlight
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active-link"));

        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(
          `.header__nav-item[href="#${id}"]`,
        );

        if (activeLink) activeLink.classList.add("active-link");
      }

      // animations
      if (entry.isIntersecting && entry.target.classList.contains("animate")) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // prevents re-trigger
      }
    });
  },
  { threshold: 0.2 },
);

sections.forEach((section) => observer.observe(section));
animatedElements.forEach((el) => observer.observe(el));
