let cantidadDeGatos = Number(prompt("Cuantos emojis querés ver?"));

let contador = 0

let emoji1 = "😺";
let emoji2 = "😸";
let emoji3 = "😹";



if (cantidadDeGatos < 0) {
    console.log(`el numero debe ser positivo`)
} else {
    for (let i = 0; i < cantidadDeGatos; i++) {
        contador++;

        if (contador <= cantidadDeGatos) {
            console.log(`Gato #${contador} ${emoji1}`)
        }

        contador++;

        if (contador <= cantidadDeGatos) {
            console.log(`gato #${contador} ${emoji2}`)
        }

        contador++;

        if (contador <= cantidadDeGatos) {
            console.log(`gato #${contador} ${emoji3}`)
        }

    }
}