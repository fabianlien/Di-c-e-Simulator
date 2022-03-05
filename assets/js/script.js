/**
 * Determines the amount dice to summon based on user input.
 */
function summonDice(numDice) {
    let diceContain = document.getElementById("setting-dice-container");
    diceContain.innerHTML = "";
    for (let i = 0; i < numDice; i++) {
        diceContain.innerHTML += `<span><i class="fa-solid fa-dice-six"></i></span>`;
    }
}
summonDice(1);

/* Event listeners: */
document.getElementsByClassName("setting-select")[0].addEventListener("change", function() {
    summonDice(document.getElementsByClassName("setting-select")[0].value);
})
