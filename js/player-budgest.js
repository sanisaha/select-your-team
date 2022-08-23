document.getElementById("select-players").addEventListener("click", function () {
    const onePlayerCost = document.getElementById("player-price");
    const onePlayerCostString = onePlayerCost.value;
    if (onePlayerCostString == "" || isNaN(onePlayerCostString)) {
        alert("please provide an integer number for successfull operation");
    }
    else {
        const playerCost = parseInt(onePlayerCostString);
        const totalPlayerCost = document.getElementById("total-player-cost");
        const SelectedFootballers = document.getElementById("player-number");
        const totalSelectedFootballers = parseInt(SelectedFootballers.innerText);
        totalPlayerCost.innerText = playerCost * totalSelectedFootballers;

    }


})

document.getElementById("total-calculate").addEventListener("click", function () {
    const totalFootballerCost = document.getElementById("total-player-cost");
    const totalFootballerCostValue = parseInt(totalFootballerCost.innerText);
    const managerCost = document.getElementById("manager-price");
    const managerCostString = managerCost.value;
    const coachCost = document.getElementById("coach-price");
    const coachCostString = coachCost.value;
    if (managerCostString == "" || isNaN(managerCostString) || coachCostString == "" || isNaN(coachCostString)) {
        alert("please provide an integer number for successfull operation");
    } else {
        const managerCostValue = parseInt(managerCostString);
        const coachCostValue = parseInt(coachCostString);
        const totalExpenses = document.getElementById("total-expenses");
        totalExpenses.innerText = totalFootballerCostValue + managerCostValue + coachCostValue;

    }


})