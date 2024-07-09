import { updateCounters, addClient, getClients, getAccumulatedMoney, getCityRegistrations } from './data.js';

export function calculateQuotation() {
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

    document.getElementById('selectedCity').innerText = city;
    document.getElementById('selectedPlan').innerText = plan;
    document.getElementById('selectedPeople').innerText = people;
    document.getElementById('totalPrice').innerText = `$${price.toLocaleString()} COP`;

    updateCounters(people);
}

export function registerUser() {
    const name = document.getElementById('userName').value;
    const doc = document.getElementById('userDocument').value;
    const address = document.getElementById('userAddress').value;
    const phone = document.getElementById('userPhone').value;
    const plan = document.getElementById('userPlan').value;
    const city = document.getElementById('citySelect').value;

    addClient({ name, document: doc, address, phone, plan, city });
    alert('Usuario registrado correctamente');
}

export function showClientList() {
    const clients = getClients();
    const resultDiv = document.getElementById('summaryResult');
    resultDiv.innerHTML = '<h3>Listado de Clientes</h3>';

    clients.forEach(client => {
        resultDiv.innerHTML += `<p>${client.name} - ${client.document} - ${client.address} - ${client.phone} - ${client.plan} - ${client.city}</p>`;
    });
}

export function showAccumulatedMoney() {
    const accumulatedMoney = getAccumulatedMoney();
    const sortedPlans = Object.keys(accumulatedMoney).sort((a, b) => accumulatedMoney[b] - accumulatedMoney[a]);
    const resultDiv = document.getElementById('summaryResult');
    resultDiv.innerHTML = '<h3>Acumulado de Dinero por Plan</h3>';

    sortedPlans.forEach(plan => {
        resultDiv.innerHTML += `<p>${plan}: $${accumulatedMoney[plan].toLocaleString()} COP</p>`;
    });
}

export function showCityRegistrations() {
    const cityRegistrations = getCityRegistrations();
    const sortedCities = Object.keys(cityRegistrations).sort((a, b) => cityRegistrations[b] - cityRegistrations[a]);
    const resultDiv = document.getElementById('summaryResult');
    resultDiv.innerHTML = '<h3>Cantidad de Registros por Ciudad</h3>';

    sortedCities.forEach(city => {
        resultDiv.innerHTML += `<p>${city}: ${cityRegistrations[city]} registros</p>`;
    });
}
