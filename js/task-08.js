const formRef = document.querySelector(".login-form");

function onSubmitCollect(event) {
  event.preventDefault();
  const emailRef = event.currentTarget.elements.email.value.trim();
  const passwordlRef = event.currentTarget.elements.password.value.trim();
  const dict = {};
  if (emailRef === "" || passwordlRef === "") {
    alert("Empty fields must be filled");
  } else {
    const dataForm = new FormData(event.currentTarget);

    dataForm.forEach((value, name) => {
      dict[name] = value;

      event.currentTarget.reset();
    });
    console.log(dict);
  }
}

formRef.addEventListener("submit", onSubmitCollect);
