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

let humanScore=0;//gloabal variable to track human's win count
let computerScore=0;// ""   ""           ""    computers's ""
let round=0;
let game=0;

//function that computes the play of a single round.
function playRound (humanChoice,computerChoice){ 
    round++
    switch(`${humanChoice} ${computerChoice}`){ 
        case 'rock paper':
            result.textContent=(` Round  ${round} : You lose 🤣🙃 ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'rock scissors':
            result.textContent=(` Round  ${round} : You win 😎 ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'paper rock':
            result.textContent=(` Round  ${round} : You win 😎 ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'paper scissors':
            result.textContent=(` Round  ${round} : You lose 🤣🙃 ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'scissors paper':
            result.textContent=(` Round  ${round} : You win 😎 ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'scissors rock':
            result.textContent=(` Round  ${round} : You lose 🤣🙃 ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'scissors scissors':
        case 'rock rock':
        case 'paper paper':
            result.textContent=(` Round  ${round} : It was a Draw!🤝`);
            break;
        default:
            result.textContent=('please correct your inputs based on the choices and replay 👀 ');
    };
    finalResult();
};

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







