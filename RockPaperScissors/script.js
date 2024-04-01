function getCompAnswer(){
    randNum = Math.floor(Math.random() * 3 + 1);
    switch (randNum){
        case 1:
            compAnswer = "rock";
        break;
        case 2:
            compAnswer = "paper";
        break;
        case 3:
            compAnswer = "scissors";
        break;
    }
    return compAnswer;
}

function detWinner(compChoice, pInput){
    if(compChoice === pInput){ return "It's a tie." }
    else if(
        (pInput === "rock" && compChoice === "scissors") ||
        (pInput === "paper" && compChoice === "rock") ||
        (pInput === "scissors" && compChoice === "paper")
    ) { return "You win!" }
    else {
        return "Computer wins!"
    }
}

let pScore = 0, cScore = 0;

for(let i = 1; i <= 5; i++){
    let compChoice = getCompAnswer(); //Assigns compAnswer to variable
    pInput = prompt("Enter rock, paper or scissors").toLowerCase();
    console.log("-----------------" + "Round " + i + "/5" + "-------------------");
    console.log("Computer chose: " + compChoice);
    console.log("You chose: " + pInput);
    if (detWinner(compChoice, pInput) == "It's a tie."){
        console.log("Round " + i + "/5");
        console.log(detWinner(compChoice, pInput) + " Redo the round!");
        i--;
    } else if (detWinner(compChoice, pInput) == "You win!"){
        console.log(detWinner(compChoice, pInput));
        console.log("Round " + i + "/5");
        pScore = pScore + 1;
    } else{
        console.log(detWinner(compChoice, pInput));
        console.log("Round " + i + "/5");
        cScore = cScore + 1;
    }
}

let winner = Math.max(pScore, cScore);

if (winner == pScore){
    console.log("-----------------Results-------------------");
    console.log("Player came out best in 5 rounds");
    console.log("-------------------------------------------");
} else {
    console.log("-----------------Results-------------------");
    console.log("Computer came out best in 5 rounds")
    console.log("-------------------------------------------");
}