let nombre = document.querySelector("#nombre");
let usuario = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password");
let singup = document.querySelector(".singup__button");
let input = document.querySelectorAll("input");
let errorDiv = document.querySelector(".errorDiv");



let modalBg = document.querySelector(".modal-bg");
let modal = document.querySelector(".modal");
let modalClose = document.querySelector(".modal-close");
let singup_link = document.querySelector(".singup_link");

singup.addEventListener("click", validacion);
modalClose.addEventListener("click", modalOff);

// FUNCIONES

function validacion() {
  errorDiv.classList.add("error");
  if (
    nombre.value === "" ||
    username.value === "" ||
    email.value === "" ||""
  ) {
    errorDiv.innerHTML = `No se permiten campos vacíos.`;
  }
  
  else {
    errorDiv.innerHTML = "";
    errorDiv.remove("error");
    modalOn();
  }
}

// MODAL

function modalOn() {
  localStorage.setItem("userUser", usuario.value);
  
  modalBg.classList.add("bg-active");
  let datos = document.createElement("p");
  
  modal.appendChild(singup_link);
  modal.appendChild(datos);
  modal.innerHTML = `<p>Gracias por confiar en nosotros!</p>
                      <h2>${nombre.value}, te confirmamos el pago!</h2>
                      <p>Ya podés retirar tu producto en nuestras sucursales</p>
                      <p>Te estaremos enviando toda la
                      informaciómn a tu email: <b>${email.value}</b></p>
                      <a href="${singup_link}">Ir al inicio</a>`;
  modal.appendChild(modalClose);
  modalClose.style.color = "black";
  
  
}

function modalOff() {
  
  modalBg.classList.remove("bg-active");
  
  
  
}



