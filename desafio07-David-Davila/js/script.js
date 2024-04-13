// Desafio 07

let title = document.querySelector("title") //Buscamos el texto dentro del Title
console.log(title.innerHTML) // Mostramos por consola el texto dentro del Title

const datosListas = document.querySelectorAll("dd");


const datosIntegrante1 = [datosListas[0], datosListas[1], datosListas[2], datosListas[3]];
const datosIntegrante2 = [datosListas[4], datosListas[5], datosListas[6], datosListas[7]];

let integrante1 = ("Integrante 1:" + '"' +mostrarDatos(datosIntegrante1) + '"');
let integrante2 = ("Integrante 2:" + '"' + mostrarDatos(datosIntegrante2) + '"');


console.log(integrante1 + "\n" + integrante2);

console.log(datosIntegrante1)

compararDatos(datosIntegrante1, datosIntegrante2);

function mostrarDatos(datos){
    let longitudDatos = "";
    let nombre = "";
    let apellido = "";

    for (let i = 0; i < datos.length; i++){
        longitudDatos = datos[i].innerHTML.length;
        if (longitudDatos > 0 & (i == 0 || i == 1)){
            nombre += datos[i].innerHTML + " ";
        }
        if (longitudDatos > 0 & (i == 2 || i == 3)) {
            apellido += datos[i].innerHTML + " ";
        }
    }

    return nombre + apellido.trim().toUpperCase();
}


function compararDatos(datos1,datos2){
    let color = "";
    let compararApellidos = "";

    for (let i = 0; i < (datos1.length - 2); i++){
        if (datos1[i].innerHTML === datos2[i].innerHTML){
            color = window.prompt("Ingrese un color para resaltar las coincidencias!", "En inglés o valores hexa, ej: #001100 ")
            datos1[i].style.color = color;
            datos2[i].style.color = color;
            console.log("Hubo coincidencias de nombres entre " + datos1[i].innerHTML + " y " + datos2[i].innerHTML);
        } else {
            console.log("No hubo coincidencias de nombres entre " + datos1[i].innerHTML + " y " + datos2[i].innerHTML)
        }

    }

    compararApellidos = window.confirm("Desea comparar los apellidos?");

    if (compararApellidos) {
        console.log("Vamos a comparar los apellidos");
        for (let i = 2; i < datos1.length; i++) {
            if (datos1[i].innerHTML === datos2[i].innerHTML) {
                console.log("Hubo coincidencias de apellidos entre " + datos1[i].innerHTML + " y " + datos2[i].innerHTML);
                color = window.prompt("Ingrese un color para resaltar las coincidencias!", "En inglés o valores hexa, ej: #001100 ")
                datos1[i].style.color = color;
                datos2[i].style.color = color;
            } else {
                console.log("No hubo coincidencia de apellidos entre " + datos1[i].innerHTML + " y " + datos2[i].innerHTML);
            }
        }
    } else {
        console.log("No vamos a comparar los apellidos")
    }
}