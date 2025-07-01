let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let NumAuxiliar = parseInt(Math.random()*10);
    let answer = "";

    if (NumAuxiliar >= 0 && NumAuxiliar <= 3){
        answer = "piedra";
    } else if (NumAuxiliar > 3 && NumAuxiliar <= 6){
        answer = "papel";
    } else {
        answer = "tijera";
    }
    return answer
}


function getHumanChoice(){
    const HumanChoice = prompt("piedra, papel o tijera?");
    return HumanChoice;
}

function playRound(humanChoice, computerChoice) {
    let result = "Empate!";
    const lowerhumanChoice = humanChoice.toLowerCase()
    if (lowerhumanChoice === "piedra"){
        if (computerChoice === "papel"){
            computerScore++;
            result = "Perdiste! papel le gana a piedra";
        }   else if (computerChoice === "tijera"){
            humanScore++;
            result = "Ganaste! piedra le gana a tijera";
        } 
    } else if (lowerhumanChoice === "papel"){
        if (computerChoice === "tijera"){
            computerScore++;
            result = "Perdiste! tijera le gana a papel";
        }   else if (computerChoice === "piedra"){
            humanScore++;
            result = "Ganaste! papel le gana a piedra";
        } 
    } else if (lowerhumanChoice === "tijera"){
        if (computerChoice === "piedra"){
            computerScore++;
            result = "Perdiste! piedra le gana a tijera";
        }   else if (computerChoice === "papel"){
            humanScore++;
            result = "Ganaste! tijera le gana a papel";
        } 
    }

    return result;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));