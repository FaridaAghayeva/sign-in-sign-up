const parol = document.querySelector("#parol");
const showIcon = document.querySelector(".far");
const showIcon2 = document.querySelector(".fa-regular");

const email = document.getElementById("email");

const form = document.getElementById("form");
let error = document.querySelector(".message");
let errorEmail = document.querySelector(".message-email");
let error1 = document.querySelector(".message-pass1");

let svg = document.querySelector(".svg");
let svg2 = document.querySelector(".svg2");

function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".message");
  errorDisplay.innerText = message;
  error.style.color = "red";
}
function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".message");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

function isValidEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}

function isValidPassword(parol) {
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return passw.test(String(parol));
}
function validateInput() {
  const parolValue = parol.value.trim();
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setError(email, "Email address cannot be left blank");
    error.style.paddingTop = "40px";
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Email is not valid");
    error.style.paddingTop = "40px";
  } else {
    if (
      localStorage.getItem("email") === emailValue &&
      localStorage.getItem("password") === parolValue
    ) {
      setSuccess(email);
      alert("Log in edildi");
    } else {
      setError(email, "This email is not signed");
      error.style.paddingTop = "40px";
    }
  }

  if (parolValue === "") {
    setError(parol, "Password cannot be left blank");
    error1.style.color = "red";
  } else if (!isValidPassword(parolValue)) {
    setError(parol, "Password is not valid");
    error1.style.color = "red";
  } else {
    setSuccess(parol);
  }
}

function testPassword() {
  svg2.addEventListener("click", function (e) {
    e.preventDefault();
    if (parol.type === "password") {
      showIcon2.classList.replace("fa-eye-slash", "fa-eye");
      parol.type = "text";
    } else {
      parol.type = "password";
      showIcon2.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
}
testPassword();
email.addEventListener("keyup", function (e) {
  e.preventDefault();
  const emailValue = email.value.trim();
  if (isValidEmail(emailValue)) {
    showIcon.classList.replace("far", "fas");
  } else {
    showIcon.classList.replace("fas", "far");
  }
});
// submite basildiqdan sonra goz islemir

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInput();
});
