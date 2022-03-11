document.addEventListener("DOMContentLoaded", function() {

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
        document.getElementById("sides-select").value = 3;
        setTimeout(delayCall, 810)
        function delayCall() {
            displaySum();
        }
    } 

    /**
     * Determines the amount of sides of the dice based on user input.
     */
    function summonSides(sides) {
        let sidesHTML = [`<span class="setting-die"><i class="fa-solid fa-circle-half-stroke"></i><span>2</span></i></span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-three"><span>3</span></i></span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-four"><span>4</span></i></span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-six"><span>6</span></i></span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"></i>8</span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"></i>10</span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"></i>12</span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"></i>16</span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"></i>20</span>`];
        let settingDice = document.getElementsByClassName("setting-die");
        [...settingDice].forEach(element => element.outerHTML = sidesHTML[sides]);
    }
    
    /**
     * When called, rolls the dice.
     */
    function rollDice(sides) {
        let int = Math.floor(Math.random() * sides) + 1;
        let settingDice = document.getElementById("setting-dice-container").children;
        let simDice = document.getElementById("sim-area").children;
        if (settingDice.length > simDice.length) {
            document.getElementById("sim-area").innerHTML += `<div class="sim-die">${int}</div>`;
        } 
        psuedoRoll(sides);
    }

    /**
     * Call after dice are rolled. Rolls the dice repeatedly over .05 second intervals until cleared (based on the number of sides).
     */
    function psuedoRoll(sides) {
        let rollInterval = setInterval(rollLoad, 50);
        function rollLoad() {
            let nonHoldDie = document.getElementsByClassName("sim-die");
            [...nonHoldDie].forEach(element => element.outerHTML = `<div class="sim-die">${Math.floor(Math.random() * sides) + 1}</div>`);
        }
        setTimeout(ceaseRollDelay, 800)
        function ceaseRollDelay() {
            clearInterval(rollInterval);
        }
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
        holdListener();
    }

    /** 
     * Displays previously rolled dice in an array 
     */
    function historyBox(latestScore) {
        let scoreString = document.getElementById("history-box");
        let scoreArray = scoreString.textContent.split(" ");
        scoreArray.unshift(latestScore);
        //let testArray = ["0", "4"]
        //testArray += "yes";
        //testArray.forEach(index => index += "yes");
        //console.log(testArray);
        scoreString.innerHTML = scoreArray;
    }
    
    /** 
     * Allows the user to select which dice to hold on next draw.
    */
         function holdListener() {
            let simDie = document.getElementsByClassName("sim-die");
            for (i = 0; i < simDie.length; i++) {
                simDie[i].addEventListener("click", function() {
                    this.removeAttribute("class");
                    this.classList.add("hold-die");
                    holdDeactivate();
                });
            }
            
        }
        function holdDeactivate() {
            let holdDie = document.getElementsByClassName("hold-die");
            for (i = 0; i < holdDie.length; i++) {
                holdDie[i].addEventListener("click", function() {
                    this.removeAttribute("class");
                    this.classList.add("sim-die");
                });
            }
        }

    /** 
     *  Global event listeners: 
     * */

    /** Dice quantity setting */
    document.getElementById("setting-select").addEventListener("change", function() {
        summonDice(document.getElementById("setting-select").value);
    });

    /** Dice sides setting */
    document.getElementById("sides-select").addEventListener("change", function() {
        summonSides(document.getElementById("sides-select").value);
    });

    /** Instructions on how to play */
    document.getElementById("instructions").addEventListener("mouseover", function() {
        document.getElementById("instructions").innerHTML += `<div>
        <h3>How to play:</hr>
        <hr>
        <p>Use the selectors to the left to choose how many dice and how many sides you wish to simulate, respectively.</p>
        <p>Once selected, click the "Roll!" button. The score of each die appears as a number in its center. The sum of the scores is displayed in the bottom left corner (and the sums of previous rolls to the right).</p>
        <p>"Hold" a die to stop it from rolling by clicking on it. The die will change to color to indicate its being "held". To "unhold", click the die again.</p>
        </div>`
    });
    document.getElementById("instructions").addEventListener("mouseout", function() {
        document.getElementById("instructions").innerHTML = `?`;
    });

    /** Roll button */
    document.getElementById("roll-btn").addEventListener("click", function() {
        let elements = document.getElementsByClassName("sim-die");
        let newDice = 0;
        [...elements].forEach(element => (newDice += 1, element.outerHTML = ""));
        for (i = 0; i < newDice; i++) {
            let sides = parseInt(document.getElementsByClassName("setting-die")[i].textContent);
            rollDice(sides);
        }
        setTimeout(delayCall, 810)
        function delayCall() {
            displaySum();
            holdDeactivate();
        }  
    });

    /** About */
    document.getElementById("about").addEventListener("click", function() {
        document.getElementById("footer").innerHTML += `<div class="footer-box"><span>Di[c]e Simulator</span> was created as a school project and is free to use and distribute. 
        Its primary purpose is to be a handy replacement for actual dice in situations where table surface area may be limited, or simply, if you can't find any dice. Have fun with it!
        For instructions on how to play hover the mouse over/tap the questionmark "?" towards the top right of the window.</div>`;
    });

    /** Attribution */
    document.getElementById("attribution").addEventListener("click", function() {
        document.getElementsByTagName("footer")[0].innerHTML += `<div class="footer-box">Sound File</div>`;
    });

    /** Footer box remove */
    document.getElementById("footer").addEventListener("mouseleave", function() {
        document.getElementById("footer").innerHTML = `<button id="about">About</button><button id="attribution">Attribution</button>`;
    });
});