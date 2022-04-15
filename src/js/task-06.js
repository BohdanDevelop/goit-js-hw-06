const inputRef = document.querySelector("#validation-input");
const charachterNumberRequired = Number(inputRef.dataset.length);
function onInputCheck(event) {
  const charachterNumber = event.currentTarget.value.length;
  console.log(charachterNumber);
  console.log(charachterNumberRequired);
  if (charachterNumber === charachterNumberRequired) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

inputRef.addEventListener("blur", onInputCheck);
