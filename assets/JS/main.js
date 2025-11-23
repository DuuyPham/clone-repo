let loginBtn = document.getElementById("nav__list-item-login");
let registerBtn = document.getElementById("nav__list-item-register");
let modal = document.getElementById("modal-js");
let getCloseBtn = document.querySelector("#auth-form__close-js");
let getOverlay = document.getElementById("modal__overlay-js");
let getLoginForm = document.getElementById("auth-form-login");
let getRegisterForm = document.getElementById("auth-form-register");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "flex";
  getLoginForm.style.display = "block";
  getRegisterForm.style.display = "none";
});
registerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "flex";
  getRegisterForm.style.display = "block";
  getLoginForm.style.display = "none";
});

getCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

getOverlay.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === getOverlay) {
    modal.style.display = "none";
  }
});
