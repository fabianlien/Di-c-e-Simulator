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
        dieSides(this);
    })
    document.getElementById("setting-dice-container").lastChild.addEventListener("click", function() {
        dieSides(this);
    })

    displaySum();
}

/** Lets the user select the amount of sides to each die */
function dieSides(dieIndex) {
    let diceTypes = [`<i class="fa-solid fa-dice-two"></i>`, `<i class="fa-solid fa-dice-three"></i>`, `<i class="fa-solid fa-dice-four"></i>`, `<i class="fa-solid fa-dice-five"></i>`, `<i class="fa-solid fa-dice-six"></i>`, `<i class="fa-solid fa-dice-d20"></i>7`, `<i class="fa-solid fa-dice-d20"></i>8`, `<i class="fa-solid fa-dice-d20"></i>9`, `<i class="fa-solid fa-dice-d20"></i>10`, `<i class="fa-solid fa-dice-d20"></i>11`, `<i class="fa-solid fa-dice-d20"></i>12`, `<i class="fa-solid fa-dice-d20"></i>13`, `<i class="fa-solid fa-dice-d20"></i>14`, `<i class="fa-solid fa-dice-d20"></i>15`, `<i class="fa-solid fa-dice-d20"></i>16`, `<i class="fa-solid fa-dice-d20"></i>17`, `<i class="fa-solid fa-dice-d20"></i>18`, `<i class="fa-solid fa-dice-d20"></i>19`, `<i class="fa-solid fa-dice-d20"></i>20`]
    dieIndex.outerHTML = 
    `<div id="caret-container">
        <div id="increase-btn"><i class="fa-solid fa-caret-up"></i></div>
        <span id="active-setting-die" class="setting-die">${diceTypes[4]}</span>
        <div id="decrease-btn"><i class="fa-solid fa-caret-down"></i></div>
    </div>`;
    document.getElementById("increase-btn").addEventListener("click", function () {
        if (i > 17) {
            alert("You can't handle more sides!")
        } else {
            document.getElementById("active-setting-die").innerHTML = diceTypes[++i];
        }
    })
    document.getElementById("decrease-btn").addEventListener("click", function () {
        if (i < 1) {
            alert("Sorry, a one-sided die is impossible (not to mention useless)!")
        } else {
            document.getElementById("active-setting-die").innerHTML = diceTypes[--i];
        }
    })   
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