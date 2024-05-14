const parol = document.querySelector("#parol");
const showIcon = document.querySelector(".fa-regular");
const showIcon2 = document.querySelector(".eye-icon2");
const parol2 = document.querySelector("#parol2");
const email = document.getElementById("email");
const form = document.getElementById("form");
let error = document.querySelector(".message");
let errorEmail = document.querySelector(".message-email");
let error1 = document.querySelector(".message-pass1");
let error2 = document.querySelector(".message-pass2");
let svg = document.querySelector(".svg");
let svg2 = document.querySelector(".svg2");
let arrEmail = [];
let arrPass = [];
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
  const emailValue = email.value.trim();
  const parolValue = parol.value.trim();
  const parol2Value = parol2.value.trim();
  if (emailValue === "") {
    setError(email, "Email address cannot be left blank");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Email is not valid");
  } else {
    if (localStorage.getItem("email") !== emailValue) {
      setSuccess(email);
      localStorage.setItem("email", emailValue);
    } else {
      setError(email, "This email is already signed");
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
    localStorage.setItem("password", parolValue);
  }

  if (parol2Value === "") {
    setError(parol2, "Password cannot be left blank");
    error2.style.color = "red";
  } else if (parol2Value !== parolValue) {
    setError(parol2, "Password does not match");
    error2.style.color = "red";
  } else {
    setSuccess(parol2);
  }
}

function testPassword2() {
  svg.addEventListener("click", function (e) {
    e.preventDefault();
    if (parol.type === "password") {
      showIcon.classList.replace("fa-eye-slash", "fa-eye");
      parol.type = "text";
    } else {
      parol.type = "password";
      showIcon.classList.replace("fa-eye", "fa-eye-slash");
    }
    console.log(5);
  });
}
function testPassword() {
  svg2.addEventListener("click", function (e) {
    e.preventDefault();
    if (parol2.type === "password") {
      showIcon2.classList.replace("fa-eye-slash", "fa-eye");
      parol2.type = "text";
    } else {
      parol2.type = "password";
      showIcon2.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
}
testPassword();
testPassword2();
// submite basildiqdan sonra goz islemir

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInput();
});
