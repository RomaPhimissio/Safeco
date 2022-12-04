"use strict";
const burger = document.querySelector(".burger"),
   header = document.querySelector(".page-header"),
   body = document.querySelector("body");

window.addEventListener("load", () => {
   function qs(element) {
      let newEl = document.querySelector(element);
      if (newEl) return newEl;
   }
   function qa(element) {
      let newEl = document.querySelectorAll(element);
      if (newEl) return newEl;
   }

   // ! Burger
   if (burger) {
      body.addEventListener("click", burgerToggle);
      function burgerToggle(e) {
         if (e.target.closest(".burger")) {
            if (burger.classList.contains("active")) {
               burger.classList.remove("active");
               body.classList.remove("lock");
            } else {
               burger.classList.add("active");
               body.classList.add("lock");
               window.addEventListener("scroll", closeBurger); // Закрывает бургер при скролле в том случае, когда для Body не задан класс 'lock'
            }
         } else if (!e.target.closest(".burger") && !e.target.closest(".menu")) {
            burger.classList.remove("active");
            body.classList.remove("lock");
            window.removeEventListener("scroll", closeBurger);
         }
      }
      function closeBurger() {
         //Необязательная дополнительная проверка
         if (burger.classList.contains("active")) {
            burger.classList.remove("active");
            menu.classList.remove("active");
            body.classList.remove("lock");
            window.removeEventListener("scroll", closeBurger);
         }
      }
   }


   body.addEventListener("click", toggleSpoiler);
   function toggleSpoiler(e) {
      if (e.target.closest(".page-header")) {
         e.target.closest(".page-header").classList.toggle("active");
         let ceoWrapper = qs(".page-header__nav");
         if (!e.target.closest(".page-header").classList.contains("active")) {
            ceoWrapper.style.height = null;
         } else {
            ceoWrapper.style.height = ceoWrapper.scrollHeight + "px";
         }
      }
   }
});


// ! Species 
new Swiper('.species__list-wrap', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-btn-right',
      prevEl: '.swiper-btn-left',
   },
   // ширина слайда
   slidesPerView: 'auto',

   // Отступ между слайдами
   spaceBetween: 30
});


// ! Benefits 
new Swiper('.benefits__wrap-list', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },
   // Navigation arrows
   navigation: {
      nextEl: '.benefits__btn-right',
      prevEl: '.benefits__btn-left',
   },
   // ширина слайда
   slidesPerView: 'auto',

   // Отступ между слайдами
   spaceBetween: 44
});


// ! Benefits 
new Swiper('.news__list-wrap', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },
   // Navigation arrows
   navigation: {
      nextEl: '.news__btn-right',
      prevEl: '.news__btn-left',
   },
   // ширина слайда
   slidesPerView: 'auto',

   // Отступ между слайдами
   spaceBetween: 30
});

// ! Footer-Spoiler

// let body = document.querySelector('.home');
body.addEventListener("click", toggleSpoiler);

function toggleSpoiler(e) {
   if (e.target.closest(".service__subject")) {
      e.target.closest(".service__content").classList.toggle("opened");
      let spoilerWrapper = e.target.closest(".service__subject").nextElementSibling;
      if (!e.target.closest(".service__content").classList.contains("opened")) {
         spoilerWrapper.style.height = null;
      } else {
         spoilerWrapper.style.height = spoilerWrapper.scrollHeight + "px";
      }
   }
}