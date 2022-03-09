document.addEventListener("DOMContentLoaded", function() {

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
        displaySum();
    }

    /**
     * When called, rolls a die based on the number of sides.
     */
    function rollDice(sides) {
        let int = Math.floor(Math.random() * sides) + 1;
        document.getElementById("sim-area").innerHTML += `<div>${int}</div>`;
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
        document.getElementById("sum-box").innerHTML = dieScore;
        historyBox(dieScore);
    }

    /** 
     * Displays previously rolled dice in an array 
    */
    function historyBox(latestScore) {
        let scoreString = document.getElementById("history-box");
        let scoreArray = scoreString.textContent.split(" ");
        scoreArray.unshift(latestScore);
        scoreString.innerHTML = scoreArray;
    }
    
    
    /* Global Event listeners: */
    document.getElementById("setting-select").addEventListener("change", function() {
        summonDice(document.getElementById("setting-select").value);
    })

    document.getElementById("roll-btn").addEventListener("click", function() {
        document.getElementById("sim-area").innerHTML = "";
        let dice = document.getElementById("setting-select").value;
        for (i = 0; i < dice; i++) {
            let sides = parseInt(document.getElementsByClassName("setting-die")[i].textContent);
            rollDice(sides);
        }
        displaySum();
    })
})