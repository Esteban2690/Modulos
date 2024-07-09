import { calculateQuotation, registerUser, showClientList, showAccumulatedMoney, showCityRegistrations } from '../model/model.js';

document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateQuotation);

    const registerUserButton = document.getElementById('registerUserButton');
    registerUserButton.addEventListener('click', registerUser);

    const clientListButton = document.getElementById('clientListButton');
    clientListButton.addEventListener('click', showClientList);

    const accumulatedMoneyButton = document.getElementById('accumulatedMoneyButton');
    accumulatedMoneyButton.addEventListener('click', showAccumulatedMoney);

    const cityRegistrationsButton = document.getElementById('cityRegistrationsButton');
    cityRegistrationsButton.addEventListener('click', showCityRegistrations);
});
