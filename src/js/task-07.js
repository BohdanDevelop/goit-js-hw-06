const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

function onInputChange(event) {
  const fontSizeCurrent = event.currentTarget.value;

  spanRef.style.fontSize = fontSizeCurrent + "px";
}

inputRef.addEventListener("input", onInputChange);
