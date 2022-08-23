document.getElementById("select-players").addEventListener("click", function () {
    const onePlayerCost = document.getElementById("player-price");
    const playerCost = parseInt(onePlayerCost.value);
    const totalPlayerCost = document.getElementById("total-player-cost");
    const SelectedFootballers = document.getElementById("player-number");
    const totalSelectedFootballers = parseInt(SelectedFootballers.innerText);
    totalPlayerCost.innerText = playerCost * totalSelectedFootballers;

})

document.getElementById("total-calculate").addEventListener("click", function () {
    const totalFootballerCost = document.getElementById("total-player-cost");
    const totalFootballerCostValue = parseInt(totalFootballerCost.innerText);
    const managerCost = document.getElementById("manager-price");
    const managerCostValue = parseInt(managerCost.value);
    const coachCost = document.getElementById("coach-price");
    const coachCostValue = parseInt(coachCost.value);
    const totalExpenses = document.getElementById("total-expenses");
    totalExpenses.innerText = totalFootballerCostValue + managerCostValue + coachCostValue;

})