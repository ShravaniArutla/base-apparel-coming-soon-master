const emailEl = document.getElementById("user_email");
const formEl = document.querySelector(".form");
const errorimgEl = document.querySelector(".error-img");
const errormsgEl = document.querySelector(".error-msg");
const successmsgEl = document.querySelector(".success-msg");

formEl.addEventListener("submit", function validation(e) {
  e.preventDefault();
  checkEmail();
});

function checkEmail() {
  const emailValue = emailEl.value.trim();
  if (emailEl == "") {
    setError();
  } else if (!isEmail(emailValue)) {
    setError();
  } else {
    setSuccess();
  }
}

function setError() {
  successmsgEl.style.display = "none";
  errorimgEl.style.display = "block";
  errormsgEl.style.display = "block";
  emailEl.classList.add("error-border");
}

function setSuccess() {
  emailEl.value = "";
  successmsgEl.style.display = "block";
  errorimgEl.style.display = "none";
  errormsgEl.style.display = "none";
  emailEl.classList.remove("error-border");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
