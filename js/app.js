//Para poder poner cuanto de calificacion se le dio
let valP = document.getElementById("valP");
//para poder añadir la clase active
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const btnS = document.querySelector(".btn-submit");
//bloques para añadir
const section_img = document.querySelector(".section-img");
const section_select_rating = document.querySelector(".section-select_rating");
const section_thanks = document.querySelector(".section-thanks");
//bloques para remover
const section_logo = document.querySelector(".section-logo");
const section_info = document.querySelector(".section-info");
const section_rating = document.querySelector(".section-rating");
const submit = document.querySelector(".submit");
//eventos para la calificacion
num1.addEventListener("click", () => {
  num1.classList.add("active");
  valP.innerHTML = "You selected 1 out of 5";
  num2.classList.remove("active");
  num3.classList.remove("active");
  num4.classList.remove("active");
  num5.classList.remove("active");
});
num2.addEventListener("click", () => {
  num2.classList.add("active");
  valP.innerHTML = "You selected 2 out of 5";
  num1.classList.remove("active");
  num3.classList.remove("active");
  num4.classList.remove("active");
  num5.classList.remove("active");
});
num3.addEventListener("click", () => {
  num3.classList.add("active");
  valP.innerHTML = "You selected 3 out of 5";
  num1.classList.remove("active");
  num2.classList.remove("active");
  num4.classList.remove("active");
  num5.classList.remove("active");
});
num4.addEventListener("click", () => {
  num4.classList.add("active");
  valP.innerHTML = "You selected 4 out of 5";
  num1.classList.remove("active");
  num2.classList.remove("active");
  num3.classList.remove("active");
  num5.classList.remove("active");
});
num5.addEventListener("click", () => {
  num5.classList.add("active");
  valP.innerHTML = "You selected 5 out of 5";
  num1.classList.remove("active");
  num2.classList.remove("active");
  num3.classList.remove("active");
  num4.classList.remove("active");
});
//eventos para añadir y remover
btnS.addEventListener("click", () => {
  section_img.classList.add("add");
  section_select_rating.classList.add("add");
  section_thanks.classList.add("add");
  section_logo.classList.add("remove");
  section_info.classList.add("remove");
  section_rating.classList.add("remove");
  submit.classList.add("remove");
});
