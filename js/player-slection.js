document.getElementById("neymar").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const selectedPlayers = document.getElementById("selected-players");
        const playerOne = document.createElement("li");
        playerOne.innerText = "neymar";
        selectedPlayers.appendChild(playerOne);
        let playerNumbers = document.getElementById("player-number");
        playerNumbersString = playerNumbers.innerText;
        playerNumbersValue = parseInt(playerNumbersString) + 1;
        playerNumbers.innerText = playerNumbersValue;

    }
}, { once: true }
)
document.getElementById("messi").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        console.log("please stop");
    } else {
        const selectedPlayers = document.getElementById("selected-players");
        const playerTwo = document.createElement("li");
        playerTwo.innerText = "messi";
        selectedPlayers.appendChild(playerTwo);
        let playerNumbers = document.getElementById("player-number");
        playerNumbersString = playerNumbers.innerText;
        playerNumbersValue = parseInt(playerNumbersString) + 1;
        playerNumbers.innerText = playerNumbersValue;
    }
}, { once: true }
)
document.getElementById("ronaldo").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        console.log("please stop");
    } else {
        const selectedPlayers = document.getElementById("selected-players");
        const playerThree = document.createElement("li");
        playerThree.innerText = "ronaldo";
        selectedPlayers.appendChild(playerThree);
        let playerNumbers = document.getElementById("player-number");
        playerNumbersString = playerNumbers.innerText;
        playerNumbersValue = parseInt(playerNumbersString) + 1;
        playerNumbers.innerText = playerNumbersValue;


    }
}, { once: true })
document.getElementById("kevin").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        console.log("please stop");
    } else {
        const selectedPlayers = document.getElementById("selected-players");
        const playerFour = document.createElement("li");
        playerFour.innerText = "kevin";
        selectedPlayers.appendChild(playerFour);
        let playerNumbers = document.getElementById("player-number");
        playerNumbersString = playerNumbers.innerText;
        playerNumbersValue = parseInt(playerNumbersString) + 1;
        playerNumbers.innerText = playerNumbersValue;


    }
}, { once: true })
document.getElementById("Kane").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        console.log("please stop");
    } else {
        const selectedPlayers = document.getElementById("selected-players");
        const playerFive = document.createElement("li");
        playerFive.innerText = "Kane";
        selectedPlayers.appendChild(playerFive);
        let playerNumbers = document.getElementById("player-number");
        playerNumbersString = playerNumbers.innerText;
        playerNumbersValue = parseInt(playerNumbersString) + 1;
        playerNumbers.innerText = playerNumbersValue;


    }
}, { once: true })
document.getElementById("Haaland").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        console.log("please stop");
    } else {
        const selectedPlayers = document.getElementById("selected-players");
        const playerSix = document.createElement("li");
        playerSix.innerText = "Haaland";
        selectedPlayers.appendChild(playerSix);
        let playerNumbers = document.getElementById("player-number");
        playerNumbersString = playerNumbers.innerText;
        playerNumbersValue = parseInt(playerNumbersString) + 1;
        playerNumbers.innerText = playerNumbersValue;


    }
}, { once: true })


