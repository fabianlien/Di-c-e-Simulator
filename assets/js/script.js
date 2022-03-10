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
        displaySum();
    

    } 

    /**
     * Determines the amount of sides of the dice based on user input.
     */
    function summonSides(sides) {
        let sidesHTML = [`<span class="setting-die"><i class="fa-solid fa-circle-half-stroke"></i><span>2</span></i></span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-three"><span>3</span></i></span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-four"><span>4</span></i></span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-six"><span>6</span></i></span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"><span>8</span></i>8</span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"><span>8</span></i>10</span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"><span>8</span></i>12</span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"><span>8</span></i>16</span>`,
            `<span class="setting-die"><i class="fa-solid fa-dice-d20"><span>8</span></i>20</span>`];
        let settingDice = document.getElementsByClassName("setting-die");
        [...settingDice].forEach(element => element.outerHTML = sidesHTML[sides]);
    }
    


    /** Lets the user select the amount of sides to each die */
    /*function dieSides(dieIndex) {
        let diceTypes = [`<i class="fa-solid fa-dice-two"><span>2</span></i>`, `<i class="fa-solid fa-dice-three"><span>3</span></i>`, `<i class="fa-solid fa-dice-four"><span>4</span></i>`, `<i class="fa-solid fa-dice-five"><span>5</span></i>`, `<i class="fa-solid fa-dice-six"><span>6</span></i>`, `<i class="fa-solid fa-dice-d20"><span>7</span></i>7`, `<i class="fa-solid fa-dice-d20"><span>8</span></i>8`, `<i class="fa-solid fa-dice-d20"><span>9</span></i>9`, `<i class="fa-solid fa-dice-d20"><span>10</span></i>10`, `<i class="fa-solid fa-dice-d20"><span>11</span></i>11`, `<i class="fa-solid fa-dice-d20"><span>12</span></i>12`, `<i class="fa-solid fa-dice-d20"><span>13</span></i>13`, `<i class="fa-solid fa-dice-d20"><span>14</span></i>14`, `<i class="fa-solid fa-dice-d20"><span>15</span></i>15`, `<i class="fa-solid fa-dice-d20"><span>16</span></i>16`, `<i class="fa-solid fa-dice-d20"><span>17</span></i>17`, `<i class="fa-solid fa-dice-d20"><span>18</span></i>18`, `<i class="fa-solid fa-dice-d20"><span>19</span></i>19`, `<i class="fa-solid fa-dice-d20"><span>20</span></i>20`]
        dieIndex.outerHTML = 
        `<div id="caret-container">
            <div id="increase-btn"><i class="fa-solid fa-caret-up"></i></div>
            <span id="active-setting-die">${diceTypes[4]}</span>
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
    }*/

    /**
     * When called, rolls a die based on the number of sides.
     */
    function rollDice(sides) {
        let int = Math.floor(Math.random() * sides) + 1;
        document.getElementById("sim-area").innerHTML += `<div class="sim-die">${int}</div>`;
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
                })
            }
            
        }
    
        function holdDeactivate() {
            let holdDie = document.getElementsByClassName("hold-die");
            for (i = 0; i < holdDie.length; i++) {
                holdDie[i].addEventListener("click", function() {
                    this.removeAttribute("class");
                    this.classList.add("sim-die");
                })
            }
        }

    /** 
     *  Global event listeners: 
     * */
    /** Dice quantity setting */
    document.getElementById("setting-select").addEventListener("change", function() {
        summonDice(document.getElementById("setting-select").value);
    })

    /** Dice sides setting */
    document.getElementById("sides-select").addEventListener("change", function() {
        summonSides(document.getElementById("sides-select").value);
    })

    /** Roll button */
    document.getElementById("roll-btn").addEventListener("click", function() {
        let elements = document.getElementsByClassName("sim-die");
        let newDice = 0;
        [...elements].forEach(element => (newDice += 1, element.outerHTML = ""));
        for (i = 0; i < newDice; i++) {
            let sides = parseInt(document.getElementsByClassName("setting-die")[i].textContent);
            rollDice(sides);
        }
        displaySum();
        holdDeactivate();
    })
})