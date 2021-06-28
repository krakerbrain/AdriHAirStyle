document.getElementById("click1").onclick = function () {
  changeModal1();
};
document.getElementById("click2").onclick = function () {
  changeModal2();
};
document.getElementById("click3").onclick = function () {
  changeModal3();
};
document.getElementById("click4").onclick = function () {
  changeModal4();
};
document.getElementById("click5").onclick = function () {
  changeModal5();
};
document.getElementById("click6").onclick = function () {
  changeModal6();
};

let changeModal1 = () => {
  var imgModal = document.querySelector("#imagenModal");
  imgModal.setAttribute("src", "assets/img/productos/matizador.jpg");
};
let changeModal2 = () => {
  var imgModal = document.querySelector("#imagenModal");
  imgModal.setAttribute("src", "assets/img/productos/prehidratante.jpg");
};
let changeModal3 = () => {
  var imgModal = document.querySelector("#imagenModal");
  imgModal.setAttribute("src", "assets/img/productos/cepillo.jpg");
};
let changeModal4 = () => {
  var imgModal = document.querySelector("#imagenModal");
  imgModal.setAttribute("src", "assets/img/productos/protector-termico-.jpg");
};
let changeModal5 = () => {
  var imgModal = document.querySelector("#imagenModal");
  imgModal.setAttribute("src", "assets/img/productos/keratina.jpg");
};
let changeModal6 = () => {
  var imgModal = document.querySelector("#imagenModal");
  imgModal.setAttribute("src", "assets/img/productos/sombrero_plateado.jpg");
};
