//selecting elements
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");//work same
const current0 = document.getElementById("current--0")
const current1 = document.getElementById("current--1")
const dice = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

//total score couter 


//start lay out 
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
let currentScore = 0;
//function for roll btn 

    btnRoll.addEventListener("click", function () {
    //  create random number
    const diceNum = Math.trunc(Math.random() * 6) +1;
    console.log(diceNum)


    //image matches with btn display
    dice.classList.remove("hidden");
    dice.src = `dice${diceNum}.png`;
   
    //current score 
    if(diceNum !== 0){
    currentScore += diceNum;
    current0.textContent = currentScore;
    }

    


})


