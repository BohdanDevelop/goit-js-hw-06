const inputRef = document.querySelector("#validation-input");
const charachterNumberRequired = Number(inputRef.dataset.length);
function onInputCheck(event) {
  function validate(add, remove) {
    inputRef.classList.add(add);
    inputRef.classList.remove(remove);
  }
  const charachterNumber = event.currentTarget.value.length;
  console.log(charachterNumber);
  console.log(charachterNumberRequired);
  if (charachterNumber === charachterNumberRequired) {
    validate("valid", "invalid");
  } else {
    validate("invalid", "valid");
  }
}

inputRef.addEventListener("blur", onInputCheck);
