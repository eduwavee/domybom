const inputTarea = document.querySelector("#inputTarea");
const btnAgregarTarea = document.querySelector("#btnAgregarTarea");
const listaTareas = document.querySelector("#listaTareas");
const mensajeListaVacia = document.querySelector("#mensajeListaVacia");

function agregarTarea() {
    const textoTarea = inputTarea.value.trim();
    if (textoTarea === "") {
        alert("Por favor, escribe una tarea antes de agregarla.");
        return;
    }

    const nuevaTarea = document.createElement('li');
    nuevaTarea.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    const textoSpan = document.createElement('span');
    textoSpan.textContent = textoTarea;

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', function() {
        listaTareas.removeChild(nuevaTarea);
        verificarListaVacia();
    });

    nuevaTarea.appendChild(textoSpan);
    nuevaTarea.appendChild(btnEliminar);
    listaTareas.appendChild(nuevaTarea);
    inputTarea.value = "";
    inputTarea.focus();
    verificarListaVacia();
}

function verificarListaVacia() {
    if (listaTareas.children.length === 0) {
        mensajeListaVacia.classList.remove('d-none');
    } else {
        mensajeListaVacia.classList.add('d-none');
    }
}

btnAgregarTarea.addEventListener('click', agregarTarea);
inputTarea.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});
document.addEventListener('DOMContentLoaded', verificarListaVacia);