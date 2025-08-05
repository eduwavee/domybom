const cronometroDisplay = document.querySelector("#cronometroDisplay");
const btnIniciar = document.querySelector("#btnIniciar");
const btnPausar = document.querySelector("#btnPausar");
const btnReset = document.querySelector("#btnReset");

let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;
let estaCorriendo = false;

function actualizarCronometro() {
    segundos++;
    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;
        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }
    
    const formatoDosDigitos = (numero) => numero < 10 ? '0' + numero : numero;

    cronometroDisplay.textContent = `${formatoDosDigitos(horas)}:${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
}

btnIniciar.addEventListener('click', () => {
    if (!estaCorriendo) {
        intervalo = setInterval(actualizarCronometro, 1000);
        estaCorriendo = true;
    }
});

btnPausar.addEventListener('click', () => {
    clearInterval(intervalo);
    estaCorriendo = false;
});

btnReset.addEventListener('click', () => {
    clearInterval(intervalo);
    estaCorriendo = false;
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometroDisplay.textContent = '00:00:00';
});