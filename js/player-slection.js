function getTextElementById(elementId) {
    const playerNumbers = document.getElementById(elementId);
    const playerNumbersString = playerNumbers.innerText;
    const playerNumbersValue = parseInt(playerNumbersString) + 1;
    playerNumbers.innerText = playerNumbersValue;
}

document.getElementById("kevin").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const btnColor = document.getElementById("kevin");
        btnColor.style.backgroundColor = "gray";
        const selectedPlayers = document.getElementById("selected-players");
        const playerOne = document.createElement("li");
        playerOne.innerText = "Kevin De Bryne";
        selectedPlayers.appendChild(playerOne);
        getTextElementById("player-number");

    }
}, { once: true }
)
document.getElementById("kai").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const btnColor = document.getElementById("kai");
        btnColor.style.backgroundColor = "gray";
        const selectedPlayers = document.getElementById("selected-players");
        const playerTwo = document.createElement("li");
        playerTwo.innerText = "Kai Havertz";
        selectedPlayers.appendChild(playerTwo);
        getTextElementById("player-number");
    }
}, { once: true }
)
document.getElementById("jesus").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const btnColor = document.getElementById("jesus");
        btnColor.style.backgroundColor = "gray";
        const selectedPlayers = document.getElementById("selected-players");
        const playerThree = document.createElement("li");
        playerThree.innerText = "Gabriel Jesus";
        selectedPlayers.appendChild(playerThree);
        getTextElementById("player-number");


    }
}, { once: true })
document.getElementById("virgil").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const btnColor = document.getElementById("virgil");
        btnColor.style.backgroundColor = "gray";
        const selectedPlayers = document.getElementById("selected-players");
        const playerFour = document.createElement("li");
        playerFour.innerText = "Virgil Van Dijk";
        selectedPlayers.appendChild(playerFour);
        getTextElementById("player-number");


    }
}, { once: true })
document.getElementById("haaland").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const btnColor = document.getElementById("haaland");
        btnColor.style.backgroundColor = "gray";
        const selectedPlayers = document.getElementById("selected-players");
        const playerFive = document.createElement("li");
        playerFive.innerText = "Erling Haaland";
        selectedPlayers.appendChild(playerFive);
        getTextElementById("player-number");


    }
}, { once: true })
document.getElementById("maximin").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const btnColor = document.getElementById("maximin");
        btnColor.style.backgroundColor = "gray";
        const selectedPlayers = document.getElementById("selected-players");
        const playerSix = document.createElement("li");
        playerSix.innerText = "Saint Maximin";
        selectedPlayers.appendChild(playerSix);
        getTextElementById("player-number");


    }
}, { once: true })
document.getElementById("kane").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const btnColor = document.getElementById("kane");
        btnColor.style.backgroundColor = "gray";
        const selectedPlayers = document.getElementById("selected-players");
        const playerSix = document.createElement("li");
        playerSix.innerText = "Harry Kane";
        selectedPlayers.appendChild(playerSix);
        getTextElementById("player-number");


    }
}, { once: true })
document.getElementById("odegaard").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const btnColor = document.getElementById("odegaard");
        btnColor.style.backgroundColor = "gray";
        const selectedPlayers = document.getElementById("selected-players");
        const playerSix = document.createElement("li");
        playerSix.innerText = "Martin Odegaard";
        selectedPlayers.appendChild(playerSix);
        getTextElementById("player-number");


    }
}, { once: true })
document.getElementById("son").addEventListener("click", function () {
    const totalSelectedPlayer = document.getElementById("player-number");
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer.innerText);
    if (totalSelectedPlayerValue > 4) {
        alert('Only five player is allowed');
    } else {
        const btnColor = document.getElementById("son");
        btnColor.style.backgroundColor = "gray";
        const selectedPlayers = document.getElementById("selected-players");
        const playerSix = document.createElement("li");
        playerSix.innerText = "Heung Min Son";
        selectedPlayers.appendChild(playerSix);
        getTextElementById("player-number");


    }
}, { once: true })


