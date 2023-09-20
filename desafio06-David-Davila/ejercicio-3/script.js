let cantidadDeGatos = Number(prompt("Indique la cantidad de gatos"));

let cantidadDePasos = Number(prompt("Indique la cantidad de pasos"))

let contador = 0

let contadorDePasos = "🐾";

let emoji1 = "🐈";

let emoji2 = "🐈‍⬛";


for (let j = 1; j < cantidadDePasos; j++) {
    contadorDePasos += "🐾"
}

for (let i = 0; i < cantidadDeGatos; i++) {
    contador++;

    if (contador <= cantidadDeGatos) {
        console.log(`Gato #${contador} ${emoji1} ${contadorDePasos}`)
    }

    contador++;

    if (contador <= cantidadDeGatos) {
        console.log(`Gato #${contador} ${emoji2} ${contadorDePasos}`)
    }
}