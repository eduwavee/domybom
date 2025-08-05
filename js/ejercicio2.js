const formPersona = document.querySelector("#formPersona");
const personaInfoCard = document.querySelector("#personaInfoCard");
const infoPersonaDisplay = document.querySelector("#infoPersona");
const btnMostrarGeneracion = document.querySelector("#btnMostrarGeneracion");
const btnEsMayorDeEdad = document.querySelector("#btnEsMayorDeEdad");
const btnMostrarDatos = document.querySelector("#btnMostrarDatos");

let personaActual = {};

function crearPersona(e) {
    e.preventDefault();

    personaActual = {
        nombre: document.querySelector("#nombre").value,
        edad: parseInt(document.querySelector("#edad").value),
        dni: document.querySelector("#dni").value,
        sexo: document.querySelector("#sexo").value,
        peso: parseFloat(document.querySelector("#peso").value),
        altura: parseFloat(document.querySelector("#altura").value),
        anioNacimiento: parseInt(document.querySelector("#anioNacimiento").value)
    };

    infoPersonaDisplay.textContent = `¡Persona "${personaActual.nombre}" creada con éxito!`;
    personaInfoCard.classList.remove("d-none");
    formPersona.classList.add("d-none");
}

function mostrarGeneracion() {
    const anio = personaActual.anioNacimiento;
    let generacion = "";
    let rasgoCaracteristico = "";

    if (anio >= 1994 && anio <= 2010) {
        generacion = "Generación Z";
        rasgoCaracteristico = "Irreverencia";
    } else if (anio >= 1981 && anio <= 1993) {
        generacion = "Generación Y (Millennials)";
        rasgoCaracteristico = "Frustración";
    } else if (anio >= 1969 && anio <= 1980) {
        generacion = "Generación X";
        rasgoCaracteristico = "Obsesión por el éxito";
    } else if (anio >= 1949 && anio <= 1968) {
        generacion = "Baby Boom";
        rasgoCaracteristico = "Ambición";
    } else if (anio >= 1930 && anio <= 1948) {
        generacion = "Silent Generation";
        rasgoCaracteristico = "Austeridad";
    } else {
        generacion = "No definida";
        rasgoCaracteristico = "No aplica según la tabla";
    }

    alert(`La persona ${personaActual.nombre} pertenece a la ${generacion}. Rasgo característico: ${rasgoCaracteristico}.`);
}

function esMayorDeEdad() {
    if (personaActual.edad >= 18) {
        alert(`${personaActual.nombre} es mayor de edad.`);
    } else {
        alert(`${personaActual.nombre} NO es mayor de edad.`);
    }
}

function mostrarDatos() {
    let datos = `
        Nombre: ${personaActual.nombre}
        Edad: ${personaActual.edad} años
        DNI: ${personaActual.dni}
        Sexo: ${personaActual.sexo}
        Peso: ${personaActual.peso} kg
        Altura: ${personaActual.altura} metros
        Año de Nacimiento: ${personaActual.anioNacimiento}
    `;
    alert(`Datos de la Persona:\n${datos}`);
}

formPersona.addEventListener('submit', crearPersona);
btnMostrarGeneracion.addEventListener('click', mostrarGeneracion);
btnEsMayorDeEdad.addEventListener('click', esMayorDeEdad);
btnMostrarDatos.addEventListener('click', mostrarDatos);