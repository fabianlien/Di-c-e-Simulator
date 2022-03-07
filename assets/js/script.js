summonDice(1);

/**
 * Determines the amount dice to summon based on user input and rolls.
 */
function summonDice(numDice) {
    let diceContain = document.getElementById("setting-dice-container");
    diceContain.innerHTML = "";
    document.getElementById("sim-area").innerHTML = "";
    for (let i = 0; i < numDice; i++) {
        diceContain.innerHTML += `<span class="setting-die"><i class="fa-solid fa-dice-six"><span>6</span></i></span>`;
        rollDice(6);
    }
    
    document.getElementsByClassName("setting-die")[0].addEventListener("click", function() {
        dieSides(this);
    })
    document.getElementById("setting-dice-container").lastChild.addEventListener("click", function() {
        dieSides(this);
    })
}

/** Lets the user select the amount of sides to each die */
function dieSides(dieIndex) {
    let diceTypes = [`<i class="fa-solid fa-dice-two"><span>2</span></i>`, `<i class="fa-solid fa-dice-three"><span>3</span></i>`, `<i class="fa-solid fa-dice-four"><span>4</span></i>`, `<i class="fa-solid fa-dice-five"><span>5</span></i>`, `<i class="fa-solid fa-dice-six"><span>6</span></i>`, `<i class="fa-solid fa-dice-d20"><span>7</span></i>7`, `<i class="fa-solid fa-dice-d20"><span>8</span></i>8`, `<i class="fa-solid fa-dice-d20"><span>9</span></i>9`, `<i class="fa-solid fa-dice-d20"><span>10</span></i>10`, `<i class="fa-solid fa-dice-d20"><span>11</span></i>11`, `<i class="fa-solid fa-dice-d20"><span>12</span></i>12`, `<i class="fa-solid fa-dice-d20"><span>13</span></i>13`, `<i class="fa-solid fa-dice-d20"><span>14</span></i>14`, `<i class="fa-solid fa-dice-d20"><span>15</span></i>15`, `<i class="fa-solid fa-dice-d20"><span>16</span></i>16`, `<i class="fa-solid fa-dice-d20"><span>17</span></i>17`, `<i class="fa-solid fa-dice-d20"><span>18</span></i>18`, `<i class="fa-solid fa-dice-d20"><span>19</span></i>19`, `<i class="fa-solid fa-dice-d20"><span>20</span></i>20`]
    dieIndex.outerHTML = 
    `<div id="caret-container">
        <div id="increase-btn"><i class="fa-solid fa-caret-up"></i></div>
        <span id="active-setting-die" class="setting-die">${diceTypes[4]}</span>
        <div id="decrease-btn"><i class="fa-solid fa-caret-down"></i></div>
    </div>`;
    document.getElementById("increase-btn").addEventListener("click", function () {
        if (i > 17) {
            alert("You can't handle more sides!");
        } else {
            document.getElementById("active-setting-die").innerHTML = diceTypes[++i];
        }
    })
    document.getElementById("decrease-btn").addEventListener("click", function () {
        if (i < 1) {
            alert("Sorry, a one-sided die is impossible (not to mention useless)!");
        } else {
            document.getElementById("active-setting-die").innerHTML = diceTypes[--i];
        }
    })   
}


/**
 * When called, rolls a die based on the number of sides.
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
    for (i = 0; i <= document.getElementById("sim-area").children.length; i++) {
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
document.getElementById("setting-select").addEventListener("change", function() {
    summonDice(document.getElementById("setting-select").value);
})

document.getElementById("roll-btn").addEventListener("click", function() {
    document.getElementById("sim-area").innerHTML = "";
    let dice = document.getElementById("setting-select").value;
    for (i = 0; i < dice; i++) {
        let sides = parseInt(document.getElementsByClassName("setting-die")[i].firstChild.textContent);
        rollDice(sides);
    }
})