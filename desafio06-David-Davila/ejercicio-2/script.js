let cantidadDeGatos = Number(prompt("Indique la cantidad de gatos"));

let cantidadDePasos = Number(prompt("Indique la cantidad de pasos"))

let contador = 0

let contadorDePasos = "🐾";


for (let j = 1; j < cantidadDePasos; j++) {
    contadorDePasos += "🐾"
}

for (let i = 0; i < cantidadDeGatos; i++) {
    contador++;

    console.log(`Gato #${contador} 🐈 ${contadorDePasos}`)
}