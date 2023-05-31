const botonYes = document.getElementById("boton-yes");
const botonNo = document.getElementById("boton-no");

botonYes.addEventListener("click", function() {
  alert("Otro día será...");
});

botonNo.addEventListener("click", function() {
  alert("¡ERES UN HACKER, FELICIDADES!");
});

const words = [
  "¿Quieres un deseo?",
  "¿Quieres cambiar tu presente?",
  "¿Quieres cambiar tu futuro?",
];
let part = "";
let i = 0;
let offset = 0;
const len = words.length;
let forwards = true;
let skip_count = 0;
const skip_delay = 15;
const speed = 70;

const wordflick = () => {
  setInterval(() => {
    if (forwards) {
      if (offset >= words[i].length) {
        skip_count++;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector(".word").textContent = part;
  }, speed);
};

document.addEventListener("DOMContentLoaded", function() {
  wordflick();
});

function moverBotonNo() {
  const anchoVentana = window.innerWidth;
  const altoVentana = window.innerHeight;
  const anchoBoton = botonNo.offsetWidth;
  const altoBoton = botonNo.offsetHeight;

  const nuevaPosicionX = Math.random() * (anchoVentana - anchoBoton);
  const nuevaPosicionY = Math.random() * (altoVentana - altoBoton);

  botonNo.style.left = nuevaPosicionX + "px";
  botonNo.style.top = nuevaPosicionY + "px";
}

botonNo.addEventListener("mouseover", moverBotonNo);
