// function to get the computer choice
function getComputerChoice (){
    const num=Math.floor((Math.random()) *3); //make the random number output in the integer range of 0,3
    switch(num){
        case 0:
            return ("rock");
        case 1:
            return ("paper");
        case 2:
            return ("scissors");
    }
};
//function to get the human choice 
/*function getHumanChoice (){
    let humanChoice=(prompt("Enter 'rock', 'paper' or 'scissors' ")).toLowerCase() || "Please enter one of the options";
    const choices=["rock","paper", "scissors"];
    humanChoice=(choices.includes(humanChoice)? humanChoice : "Please enter only one of the three options");
    if (!(choices.includes(humanChoice))){
        alert(humanChoice);
        return;
    }
    return(humanChoice);
};*/
let humanScore=0;//gloabal variable to track human's win count
let computerScore=0;// ""   ""           ""    computers's ""
let round=0;
let game=0;
// call the playgame function which calls the play round function 5 times.
//function that computes the play of a single round.
function playRound (humanChoice,computerChoice){ 
    round++
    switch(`${humanChoice} ${computerChoice}`){ 
        case 'rock paper':
            result.textContent=(` Round : ${round} => you lose 🤣🙃 ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'rock scissors':
            result.textContent=(` Round : ${round} => you win 😎 ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'paper rock':
            result.textContent=(` Round : ${round} => you win 😎 ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'paper scissors':
            result.textContent=(` Round : ${round} => you lose 🤣🙃 ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'scissors paper':
            result.textContent=(` Round : ${round} => you win 😎 ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'scissors rock':
            result.textContent=(` Round : ${round} => you lose 🤣🙃 ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'scissors scissors':
        case 'rock rock':
        case 'paper paper':
            result.textContent=(` Round : ${round} => It was a Draw!🤝`);
            break;
        default:
            result.textContent=('please correct your inputs based on the choices and replay 👀 ');
    };
    finalResult();
};
/*function playGame(){
    let winner;// final winner announcing statement
    for (let count=0; count<5;count++){// loop 5 times to play 5 rounds
        let humanselect= getHumanChoice();// reinvoke the getHumanCh.. function 5 times to get new guess
        let computerselect=getComputerChoice();// reinvoke the getComp.. function 5 times
        playRound(humanselect,computerselect);// reinvoke playRoound(humanChoice,ComputerChoice) to play 5 rounds 
    };
    // format the winner statement according to  the result of the five rounds
    if (humanScore>computerScore){
        winner= `You win ${humanScore} to ${computerScore}` ;   
    }
    else if (computerScore >humanScore){
        winner=`You lose ${computerScore} to ${humanScore}`;
    }
    else {
        winner=`You Draw ${humanScore} to ${computerScore}`;
    }
    result.textContent=(winner);
    return winner;
};*/
function finalResult(){
    if ((humanScore>=5)||computerScore>=5){
        game++;
        const resultTxt=document.createElement("p")
        resultTxt.textContent=(humanScore>=5)? `Game ${game} : You win ${humanScore} to ${computerScore}`:`Game ${game} : You lose ${computerScore} to ${humanScore}`;
        resultTxt.setAttribute("style","text-align: center; font-size:32px;")
        statement.appendChild(resultTxt);
        humanScore=0;
        computerScore=0;
        round=0;
        return;
    }
    else{
        return;
    }
}
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const sci=document.querySelector("#sci");
const statement=document.querySelector(".end");
const result=document.querySelector(".result");
rock.addEventListener("click",()=>{
    let humanChoice="rock";
    playRound(humanChoice,getComputerChoice());
});
paper.addEventListener("click",()=>{
    let humanChoice="paper";
    playRound(humanChoice,getComputerChoice());
});
sci.addEventListener("click",()=>{
    let humanChoice="scissors";
    playRound(humanChoice,getComputerChoice());
});
result.setAttribute("style","text-align: center; font-size:24px;");






