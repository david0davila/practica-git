// Paso 1: Definir objetos para representar los artículos del menú
const menuItems = [
    { name: "Hamburguesa", price: 10 },
    { name: "Pizza", price: 12 },
    { name: "Ensalada", price: 8 },
    { name: "Milanesa", price: 6 }
];

// Variables para almacenar la información del pedido
let selectedItems = [];
let totalCost = 0;

// Función para calcular el costo total del pedido
function calculateTotalCost() {
    totalCost = 0;
    // Iterar sobre los artículos seleccionados y sumar el costo total
    selectedItems.forEach((item, index) => {
        const quantity = document.getElementById(`quantity${index + 1}`).value;
        totalCost += item.price * quantity;
    });
}

// Función para validar y enviar el pedido
function placeOrder() {

    // Paso 4: Validar los campos de entrada
    const userName = document.getElementById("userName").value;
    const deliveryAddress = document.getElementById("deliveryAddress").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    if (!userName || !deliveryAddress || !phoneNumber || !email || selectedItems.length === 0) {
        alert("Por favor, complete todos los campos y seleccione al menos un artículo.");
        return;
    }

    // Validar campos con expresiones regulares
    const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
    const phoneRegex = /[0-9]{9}/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if (!nameRegex.test(userName) || !phoneRegex.test(phoneNumber) || !emailRegex.test(email)) {
    //     alert("Por favor, ingresa información válida en los campos de nombre, teléfono y correo electrónico.");
    //     return;
    // }

    if (!nameRegex.test(userName)) {
        alert("No se permiten caracteres especiales ni números en el nombre. La longitud del nombre debe ser al menos un carácter.");
        return;
    }

    if (!phoneRegex.test(phoneNumber)) {
        alert("Por favor, ingresa un número de teléfono válido.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return;
    }



    // Paso 5: Calcular el costo total del pedido
    calculateTotalCost();

    // Paso 6: Simular el envío del pedido al restaurante

    // console.log("Pedido enviado al restaurante:");
    // console.log("Nombre: " + userName);
    // console.log("Dirección de entrega: " + deliveryAddress);
    // console.log("Artículos seleccionados:", selectedItems);
    // console.log("Costo total: $" + totalCost.toFixed(2));

    const messageElement1 = document.getElementById('message1');
    const messageElement2 = document.getElementById('message2');
    const messageElement3 = document.getElementById('message3');
    const messageElement4 = document.getElementById('message4');
    const messageElement5 = document.getElementById('message5');
    messageElement1.innerHTML = "Pedido enviado al restaurante:";
    messageElement2.innerHTML += `Nombre: ${userName}`;
    messageElement3.innerHTML += `Dirección de entrega: ${deliveryAddress}`;
    messageElement4.innerHTML += `Artículos seleccionados: ${selectedItems.map(item => item.name).join(" ")}`;
    messageElement5.innerHTML += `Costo total: $${totalCost.toFixed(2)}`;

    // Paso 7: Mostrar una confirmación del pedido
    alert("¡Pedido realizado con éxito!\nNúmero de pedido: " + Math.floor(Math.random() * 10));
}

// Capturar eventos de selección del usuario
const checkboxes = document.querySelectorAll('input[name="items"]');
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function () {
        const selectedItem = menuItems.find(item => item.name === checkbox.value);
        const quantityInput = document.getElementById(`quantity${index + 1}`);

        if (checkbox.checked) {
            // Establecer la cantidad a 1 cuando se marca el artículo
            quantityInput.value = 1;
            selectedItems[index] = selectedItem;
        } else {
            // Restaurar la cantidad a 0 cuando se desmarca el artículo
            quantityInput.value = 0;
            selectedItems.splice(index, 1);
        }

        calculateTotalCost();
    });
});