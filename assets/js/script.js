summonDice(1);

/**
 * Determines the amount dice to summon based on user input.
 */
function summonDice(numDice) {
    let diceContain = document.getElementById("setting-dice-container");
    diceContain.innerHTML = "";
    document.getElementById("sim-area").innerHTML = "";
    for (let i = 0; i < numDice; i++) {
        diceContain.innerHTML += `<span class="setting-die"><i class="fa-solid fa-dice-six"></i></span>`;
        rollDice(6);
    }
    
    document.getElementsByClassName("setting-die")[0].addEventListener("click", function() {
        this.style.color = "orange";
    })
    document.getElementById("setting-dice-container").lastChild.addEventListener("click", function() {
        this.style.color = "orange";
    })

    displaySum();
}

/** Lets the user select the amount of sides to each die */
function dieSides() {

}


/**
 * When called, rolls a die.
 */
function rollDice(sides) {
    let int1 = Math.floor(Math.random() * sides) + 1;
    document.getElementById("sim-area").innerHTML += `<div>${int1}</div>`;
    
}

/**
 * Displays the sum of the currently rolled dice.
 */
function displaySum() {
    let dieScore = 0;
    document.getElementById("sum-box").innerHTML = "";
    for (i = 0; i < document.getElementById("sim-area").children.length; i++) {
        dieScore += parseInt(document.getElementById("sim-area").children[i].textContent);
    }
    document.getElementById("sum-box").innerHTML = `${dieScore}`;
}





/** 
 * Displays previously rolled dice in an array 

function historyBox(latestScore) {
    let prevScores = [];
    prevScores.push(latestScore);
    document.getElementById("history-box").innerHTML = `${prevScores}`;
}
*/
 
/* Global Event listeners: */
document.getElementsByClassName("setting-select")[0].addEventListener("change", function() {
    summonDice(document.getElementsByClassName("setting-select")[0].value);
})