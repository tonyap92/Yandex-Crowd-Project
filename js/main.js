"use strict";

// Scroll
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
