let quotationCounter = 0;
let actualTravelers = 0;
let clients = [];

export function updateCounters(people) {
    quotationCounter++;
    actualTravelers += people;
    document.getElementById('quotationCounter').innerText = `Usuarios que han usado el cotizador: ${quotationCounter}`;
    document.getElementById('actualTravelers').innerText = `Personas que están viajando: ${actualTravelers}`;
}

export function addClient(client) {
    clients.push(client);
}

export function getClients() {
    return clients;
}

export function getAccumulatedMoney() {
    const accumulatedMoney = { Básico: 0, Familiar: 0, Full: 0 };

    clients.forEach(client => {
        const plan = client.plan.toLowerCase();
        switch (plan) {
            case 'básico':
                accumulatedMoney.Básico += 1500000;
                break;
            case 'familiar':
                accumulatedMoney.Familiar += 2500000;
                break;
            case 'full':
                accumulatedMoney.Full += 4000000;
                break;
            default:
                break;
        }
    });

    return accumulatedMoney;
}

export function getCityRegistrations() {
    const cityRegistrations = { Cartagena: 0, 'Santa Marta': 0, 'San Andrés': 0 };

    clients.forEach(client => {
        cityRegistrations[client.city]++;
    });

    return cityRegistrations;
}
