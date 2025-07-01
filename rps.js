function getComputerChoice(){
    let NumAuxiliar = parseInt(Math.random()*10);
    let answer = "er";

    if(NumAuxiliar === 0){
        answer = "No me pude decidir, tu ganas";
    } else if (NumAuxiliar > 0 && NumAuxiliar <= 3){
        answer = "Rock";
    } else if (NumAuxiliar > 3 && NumAuxiliar <= 6){
        answer = "Paper";
    } else if (NumAuxiliar > 7 && NumAuxiliar <= 9){
        answer = "Scissor";
    }
    return answer
}

console.log(getComputerChoice());