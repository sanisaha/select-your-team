document.getElementById("select-players").addEventListener("click", function () {
    const onePlayerCost = document.getElementById("player-price");
    const playerCost = parseInt(onePlayerCost.value);
    const totalPlayerCost = document.getElementById("total-player-cost");
    const SelectedFootballers = document.getElementById("player-number");
    const totalSelectedFootballers = parseInt(SelectedFootballers.innerText);
    totalPlayerCost.innerText = playerCost * totalSelectedFootballers;

})