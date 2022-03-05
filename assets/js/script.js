summonDice(1);

/**
 * Determines the amount dice to summon based on user input.
 */
function summonDice(numDice) {
    let diceContain = document.getElementById("setting-dice-container");
    diceContain.innerHTML = "";
    document.getElementById("sim-area").innerHTML = "";
    for (let i = 0; i < numDice; i++) {
        diceContain.innerHTML += `<span><i class="fa-solid fa-dice-six"></i></span>`;
        rollDice(6);
    }
}


/* Event listeners: */
document.getElementsByClassName("setting-select")[0].addEventListener("change", function() {
    summonDice(document.getElementsByClassName("setting-select")[0].value);
})

/**
 * When called, rolls a die.
 */
function rollDice(sides) {
    let int1 = Math.floor(Math.random() * sides) + 1;
    alert(int1);
    document.getElementById("sim-area").innerHTML += `<div>${int1}</div>`;
}