function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonRef.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor(event) {
  const currentColor = getRandomHexColor();

  bodyRef.style.backgroundColor = currentColor;
  spanRef.textContent = currentColor;
}
