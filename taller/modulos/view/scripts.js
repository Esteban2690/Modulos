// scripts.js

// Variables globales para contadores
let quotationCounter = 0;
let actualTravelers = 0;

// Función para calcular la cotización y actualizar contadores
function calculateQuotation() {
    const city = document.getElementById('citySelect').value;
    const plan = document.getElementById('planSelect').value.toLowerCase();
    const people = parseInt(document.getElementById('people').value);

    let price;

    switch (plan) {
        case 'básico':
            price = 1500000 * people;
            break;
        case 'familiar':
            price = 2500000 * people;
            break;
        case 'full':
            price = 4000000 * people;
            break;
        default:
            price = 0;
            break;
    }

    // Actualizar el resultado de la cotización en el HTML
    document.getElementById('selectedCity').innerText = city.charAt(0).toUpperCase() + city.slice(1);
    document.getElementById('selectedPlan').innerText = plan.charAt(0).toUpperCase() + plan.slice(1);
    document.getElementById('selectedPeople').innerText = people;
    document.getElementById('totalPrice').innerText = `$${price.toLocaleString()} COP`;

    // Actualizar contadores
    quotationCounter++;
    document.getElementById('quotationCounter').innerText = `Usuarios que han usado el cotizador: ${quotationCounter}`;

    actualTravelers += people;
    document.getElementById('actualTravelers').innerText = `Personas que están viajando: ${actualTravelers}`;
}

// Asignar la función al evento click del botón
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculateQuotation);
