

// Función que obtiene la elección de la computadora
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

// Función que determina la elección del jugador
function getHumanChoice(){
    const HumanChoice = prompt("piedra, papel o tijera?");
    return HumanChoice;
}

//Función que determina quien es el ganador
//1: Gana PC; 2: Gana usuario; 3: Empate
function playRound(humanChoice, computerChoice) {
    let result = 3;
    const lowerhumanChoice = humanChoice.toLowerCase()
    if (lowerhumanChoice === "piedra"){
        if (computerChoice === "papel"){
            result = 1;
        }   else if (computerChoice === "tijera"){
            result = 2;
        } 
    } else if (lowerhumanChoice === "papel"){
        if (computerChoice === "tijera"){
            result = 1;
        }   else if (computerChoice === "piedra"){
            result = 2;
        } 
    } else if (lowerhumanChoice === "tijera"){
        if (computerChoice === "piedra"){
            result = 1;
        }   else if (computerChoice === "papel"){
            result = 2;
        } 
    }

    return result;
}

function playGame(){

let humanScore = 0;
let computerScore = 0;

 while (computerScore < 3 && humanScore < 3){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let resultadoJuego = playRound(humanSelection, computerSelection);
    if (resultadoJuego === 1){
        console.log("Gana computadora! "+ computerSelection + " le gana a " + humanSelection.toLowerCase());
        alert("Gana computadora! "+ computerSelection + " le gana a " + humanSelection.toLowerCase());
        computerScore++;
    } else if (resultadoJuego === 2){
        console.log("Ganaste! "+ humanSelection.toLowerCase() + " le gana a " + computerSelection);
        alert("Ganaste! "+ humanSelection.toLowerCase() + " le gana a " + computerSelection);
        humanScore++;
    } else {
        console.log("Empate");
        alert("Empate");
    }
}

return "Computadora: " + computerScore + " | Usuario: " + humanScore;

}

console.log(playGame());