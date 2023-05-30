const botonNo = document.getElementById("boton-no");

botonNo.addEventListener("mouseover", moverBotonNo);

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
