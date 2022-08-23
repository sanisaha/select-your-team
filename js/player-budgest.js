document.getElementById("select-players").addEventListener("click", function () {
    const onePlayerCost = document.getElementById("player-price");
    const playerCost = parseInt(onePlayerCost.value);
    const totalPlayerCost = document.getElementById("total-player-cost");
    let totalPlayerCostAmount = totalPlayerCost.innerText;
    totalPlayerCostAmount = playerCost * 5;

    // const plyerCostString = toString(playerCost);
    console.log(totalPlayerCostAmount);

})