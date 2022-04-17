const inputRef = document.querySelector("#name-input");
const textRef = document.querySelector("#name-output");

inputRef.addEventListener("input", outputTextHandler);

function outputTextHandler(event) {
  let currentValue = event.currentTarget.value.trim();
  console.log(currentValue);

  textRef.textContent = currentValue ? currentValue : "Anonymous";
}
