const fechaDisplay = document.querySelector("#fechaDisplay");
const horaDisplay = document.querySelector("#horaDisplay");
const minutosDisplay = document.querySelector("#minutosDisplay");
const segundosDisplay = document.querySelector("#segundosDisplay");
const ampmDisplay = document.querySelector("#ampmDisplay");

function actualizarReloj() {
    const ahora = new Date();

    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);
    fechaDisplay.textContent = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

    let horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    let ampm = horas >= 12 ? 'PM' : 'AM';

    horas = horas % 12;
    horas = horas ? horas : 12;
    
    const formatoDosDigitos = (numero) => numero < 10 ? '0' + numero : numero;

    horaDisplay.textContent = formatoDosDigitos(horas);
    minutosDisplay.textContent = formatoDosDigitos(minutos);
    segundosDisplay.textContent = formatoDosDigitos(segundos);
    ampmDisplay.textContent = ampm;
}

setInterval(actualizarReloj, 1000);
document.addEventListener('DOMContentLoaded', actualizarReloj);