const form = document.querySelector(".form");
const first = document.getElementById("firstname");
const last = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstValue = first.value;
  const lastValue = last.value;
  const emailValue = email.value;
  const pass = password.value;
  if (firstValue === "") {
    addErrorTo(first, "First Name is required");
  } else {
    removeErrorFrom(first);
  }
  if (lastValue === "") {
    addErrorTo(last, "Last Name is required");
  } else {
    removeErrorFrom(last);
  }
  if (emailValue === "") {
    addErrorTo(email, "Email is required");
  } else if (!isValid(emailValue)) {
    addErrorTo(email, "Email is not valid");
  } else {
    removeErrorFrom(email);
  }
  if (pass === "") {
    addErrorTo(password, "Password is required");
  } else {
    removeErrorFrom(password);
  }
});

function addErrorTo(field, message) {
  const formControl = field.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function removeErrorFrom(field) {
  const formControl = field.parentElement;
  formControl.classList.remove("error");
}

function isValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
