function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("#controls input");
const createButtonRef = document.querySelector("[data-create]");
const destroyButtonRef = document.querySelector("[data-destroy]");
const divRef = document.querySelector("#boxes");

createButtonRef.addEventListener("click", onButtonCreate);
destroyButtonRef.addEventListener("click", onButtonDestroy);
function onButtonDestroy(event) {
  const boxesNumber = inputRef.value;
  for (let i = 0; i < boxesNumber; i += 1) {
    divRef.removeChild(divRef.firstElementChild);
  }
}
function onButtonCreate(event) {
  const boxesNumber = inputRef.value;
  let width = 30;
  let height = 30;

  for (let i = 0; i < boxesNumber; i += 1) {
    const randomColor = getRandomHexColor();

    const div = `<div   style="background-color:${randomColor}; width:${width}px; height:${height}px" ></div>`;

    divRef.insertAdjacentHTML("beforeend", div);
    width += 10;
    height += 10;
  }
}
