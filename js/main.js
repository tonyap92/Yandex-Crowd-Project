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

// Код для второй карусели
const carouselCardsParticipants = document.querySelector(".ct-participants__cards");
const cardsParticipants = Array.from(document.querySelectorAll(".ct-participants__card"));
const prevButtonParticipants = document.querySelector(".ct-participants__prev");
const nextButtonParticipants = document.querySelector(".ct-participants__next");
const stepElementParticipants = document.querySelector(".ct-participants__step");
const totalParticipants = document.querySelector(".ct-participants__total");
let currentSlideParticipants = 0;

// Общая функция для обновления каруселей
const updateSlider = () => {
  // Обновление первой карусели
  carouselCardsSteps.style.transform = `translateX(-${currentSlideSteps * carouselCardsSteps.offsetWidth}px)`;
  prevButtonSteps.disabled = currentSlideSteps === 0;
  nextButtonSteps.disabled = currentSlideSteps === 4;
  indicatorsSteps.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlideSteps);
  });

  // Обновление второй карусели
  carouselCardsParticipants.style.transform = `translateX(-${
    currentSlideParticipants * cardsParticipants[0].offsetWidth
  }px)`;
  const currentStepParticipants = currentSlideParticipants + 1;
  stepElementParticipants.textContent = currentStepParticipants;
};

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

// Обработчики событий для второй карусели
prevButtonParticipants.addEventListener("click", () => {
  moveSlidesParticipants("prev");
});

nextButtonParticipants.addEventListener("click", () => {
  moveSlidesParticipants("next");
});

setInterval(() => {
  moveSlidesParticipants("next");
}, 4000);

// Функция для перемещения слайдов во второй карусели
const moveSlidesParticipants = (direction) => {
  if (direction === "prev") {
    currentSlideParticipants--;
    if (currentSlideParticipants < 0) {
      currentSlideParticipants = 0;
    }
  } else if (direction === "next") {
    currentSlideParticipants++;
    if (currentSlideParticipants > cardsParticipants.length - 1) {
      currentSlideParticipants = cardsParticipants.length - 1;
    }
  }
  updateSlider();
};

updateSlider();
