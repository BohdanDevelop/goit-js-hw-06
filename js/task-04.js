const decreaseButton = document.querySelector('[data-action="decrement"]');
const increaseButton = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");
let counterValue = 0;
function onIncreaseButton(event) {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

function onDecreaseButton(event) {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}
increaseButton.addEventListener("click", onIncreaseButton);
decreaseButton.addEventListener("click", onDecreaseButton);
