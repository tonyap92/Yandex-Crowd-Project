"use strict";

// Скролл
const buttonsElement = document.querySelectorAll(".ct-header__btn");

const handleClick = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetBlock = document.querySelector(targetId);
  targetBlock.scrollIntoView({ behavior: "smooth" });
};

buttonsElement.forEach((button) => {
  button.addEventListener("click", handleClick);
});

// Код для первой карусели
const carouselCardsSteps = document.querySelector(".ct-steps__coll");
const prevButtonSteps = document.querySelector(".ct-steps__prev");
const nextButtonSteps = document.querySelector(".ct-steps__next");
const indicatorsSteps = document.querySelectorAll(".ct-steps__indicator");
let currentSlideSteps = 0;


// Общая функция для обновления каруселей
const updateSlider = () => {
  // Обновление первой карусели
  carouselCardsSteps.style.transform = `translateX(-${currentSlideSteps * carouselCardsSteps.offsetWidth}px)`;
  prevButtonSteps.disabled = currentSlideSteps === 0;
  nextButtonSteps.disabled = currentSlideSteps === 4;
  indicatorsSteps.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlideSteps);
  });


// Обработчики событий для первой карусели
prevButtonSteps.addEventListener("click", () => {
  if (currentSlideSteps > 0) {
    currentSlideSteps--;
    updateSlider();
  }
});

nextButtonSteps.addEventListener("click", () => {
  if (currentSlideSteps < 4) {
    currentSlideSteps++;
    updateSlider();
  }
});

indicatorsSteps.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlideSteps = index;
    updateSlider();
  });
});


updateSlider();
