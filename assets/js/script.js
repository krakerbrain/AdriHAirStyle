const tarjetas = document.getElementById("tarjetas");
const imagenes = ["matizador", "prehidratante", "cepillo", "protector-termico", "keratina"];

imagenes.forEach((item) => {
  let mayuscula = item.toUpperCase();
  tarjetas.innerHTML += `
    <div id="" class="card text-center col-sm-2 mr-3">
    <div class="cardTop">
      <img src="assets/img/productos/${item}.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <div data-toggle="modal">
          <h5 class="card-title text-center">${mayuscula}</h5>
          <p class="card-text text-left">Ayuda a proteger el cabello de las altas temperaturas...</p>
          <p class="text-black-50 text-right btn-show-modal" data-pic="${item}" data-toggle="modal" data-target="#exampleModal">Click para más info</p>
          <p class="text-left precio">$ 5.000</p>
        </div>
        <div class="card-footer text-right pr-0">
          <button class="boton">CONTACTANOS</button>
        </div>
      </div>
    </div> 
  </div>`;
});

let modalCuerpo = document.getElementById("modalBody");
const button = document.querySelectorAll(".btn-show-modal");
let tituloModal = document.getElementById("tituloModal");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
    modal = e.target.getAttribute("data-pic");
    modalCuerpo.innerHTML = `
      <img id="imagenModal" src="assets/img/productos/${modal}.jpg" class="card-img-top" alt="..." />
      <div class="mx-5 text-left">
        <p class="pt-5">Ayuda a proteger el cabello de las altas temperaturas generadas por el secador, plancha y onduladores. Ademas lo hidrata, controla el frizz y tiene un exquisito aroma</p>
        <p class="text-left formato">Botella de 375ml</p>
      </div>
      `;
    let mayusculaModal = modal.toUpperCase();
    tituloModal.innerHTML = `${mayusculaModal}`;
  });
}
