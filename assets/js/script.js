
function summonDice(numDice) {
    let diceContain = document.getElementById("setting-dice-container");
    diceContain.innerHTML = "";
    for (let i = 0; i < numDice; i++) {
        diceContain.innerHTML += `<span><i class="fa-solid fa-dice-six"></i></span>`;
    }
}
summonDice(6)
