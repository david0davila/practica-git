const estilos = ["./css/estilos.css", "./css/estilos-peliculas.css", "./css/estilos-futuro.css"];

const estiloActual = document.querySelector('link[rel="stylesheet"]');

let indiceEstiloActual = 0;

/*-----------------BOTON DE ESTILOS----------*/

const cambiarEstilo = document.getElementById("change-style");

function cambio() {

    // Cambiar el atributo href al nuevo archivo de estilo
    estiloActual.href = estilos[indiceEstiloActual];

    // Incrementar el índice para el próximo estilo
    indiceEstiloActual = (indiceEstiloActual + 1) % estilos.length;
}

cambiarEstilo.onclick = cambio;

/*-------------------------BOTON ALEATORIO-------------------------------- */


const estilos2 = ["./css/estilos.css", "./css/estilos-peliculas.css", "./css/estilos-futuro.css", null];

const botonAleatorio = document.getElementById("change-style2");

function cambioAleatorio() {

    let nuevoEstilo = Math.floor(Math.random() * estilos2.length);

    estiloActual.href = estilos2[nuevoEstilo];

}

botonAleatorio.onclick = cambioAleatorio;


/*-------------------------BOTON RECORDAR-------------------------------- */

const estiloRecord = document.getElementById("change-record");

function recordarEstilo() {
    if (localStorage.getItem("estiloGuardado")) {
        let estiloGuardado = localStorage.getItem("estiloGuardado");
        estiloActual.href = estiloGuardado
        estiloRecord.classList.add("hundido");
    }
}

recordarEstilo();

function recordar() {
    if (localStorage.getItem("estiloGuardado")) {
        // Si ya hay un estilo guardado, eliminarlo y restaurar el estilo original.
        localStorage.removeItem("estiloGuardado");
        estiloRecord.classList.remove("hundido");
    } else {
        // Guardar el estilo actual en el almacenamiento local.
        localStorage.setItem("estiloGuardado", estiloActual.href);
        estiloRecord.classList.add("hundido");
    }
}

estiloRecord.onclick = recordar;


/*-------------------------SELECT ESTILOS-------------------------------- */

const selectEstilos = document.getElementById("select-estilos");
let selectedValue;

function change() {
    selectedValue = selectEstilos.value;

    if (selectedValue === "") {
        estiloActual.href = estilos2["3"];
    } else {
        estiloActual.href = selectedValue;
    }

    // Almacenar el estilo seleccionado en el almacenamiento local
    localStorage.setItem("estiloGuardado", estiloActual.href);

    // Guardar la opción seleccionada en el almacenamiento local
    localStorage.setItem("opcionSeleccionada", selectedValue);
}


/*-------------------------INPUT RADIO ESTILOS-------------------------------- */

if (localStorage.getItem("opcionSeleccionada")) {
    selectEstilos.value = localStorage.getItem("opcionSeleccionada");

    estiloActual.href = selectEstilos.value;
}

selectEstilos.onclick = change;



function cambioRadio() {
    let selectedValue = document.querySelector('input[name="estilos-radio"]:checked').value;

    if (selectedValue === "") {
        estiloActual.href = estilos2[estilos2.length - 1];
    } else {
        estiloActual.href = selectedValue;
    }

    // Almacenar el estilo seleccionado en el almacenamiento local
    localStorage.setItem("estiloGuardado", estiloActual.href);

    // Guardar la opción seleccionada en el almacenamiento local
    localStorage.setItem("opcionSeleccionada", selectedValue);
}

// Asignar el manejador de eventos a cada radio button
const radioButtons = document.querySelectorAll('input[name="estilos-radio"]');
radioButtons.forEach(function (radio) {
    radio.addEventListener("change", cambioRadio);
});

// Al cargar la página, seleccionar automáticamente el radio button guardado en el almacenamiento local
if (localStorage.getItem("opcionSeleccionada")) {
    const selectedValue = localStorage.getItem("opcionSeleccionada");
    const selectedRadio = document.querySelector(`input[name="estilos-radio"][value="${selectedValue}"]`);

    if (selectedRadio) {
        selectedRadio.checked = true;
        estiloActual.href = selectedValue;
    }
}