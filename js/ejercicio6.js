let numeroAleatorio;
let numerosIngresados = [];
let juegoActivo = false;

const btnComenzar = document.querySelector("#btnComenzar");
const formulario = document.querySelector("#formAdivinar");
const parrafo = document.querySelector("#mensajeInicial");

function comenzarJuego() {
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    juegoActivo = true;
    parrafo.textContent = "Juego iniciado! Adivina un número entre 1 y 10.";
    
    formulario.classList.remove("d-none"); 
    btnComenzar.classList.add("d-none");
    
    numerosIngresados = [];
}

function recibirNumero(e) {
    e.preventDefault();
    if (!juegoActivo) {
        alert("Primero presiona 'Comenzar juego'");
        return;
    }

    const input = document.querySelector("#numeroUsuario");
    
    const numeroRecibido = parseInt(input.value);

    if (isNaN(numeroRecibido) || numeroRecibido < 1 || numeroRecibido > 10) {
        alert("Por favor, ingresa un número entre 1 y 10.");
        input.value = "";
        return;
    }

    numerosIngresados.push(numeroRecibido);
    mostrarResultado(numeroAleatorio, numeroRecibido);
    input.value = "";
}

function mostrarResultado(numeroAleatorio, numeroRecibido) {
    if (numeroAleatorio === numeroRecibido) {
        alert(`¡Adivinaste el número! Es el: ${numeroRecibido}. Presiona 'Comenzar juego' para volver a jugar.`);
        juegoActivo = false;
        formulario.classList.add("d-none");
        btnComenzar.classList.remove("d-none");
    } else if (numeroAleatorio > numeroRecibido) {
        alert(`El número ingresado (${numeroRecibido}) es menor que el número generado.`);
    } else {
        alert(`El número ingresado (${numeroRecibido}) es mayor que el número generado.`);
    }
}

btnComenzar.addEventListener('click', comenzarJuego);
formulario.addEventListener('submit', recibirNumero);