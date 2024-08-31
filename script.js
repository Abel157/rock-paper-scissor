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
function getHumanChoice (){
    let humanChoice=(prompt("Enter 'rock', 'paper' or 'scissors' ")).toLowerCase() || "Please enter one of the options";
    const choices=["rock","paper", "scissors"];
    humanChoice=(choices.includes(humanChoice)? humanChoice : "Please enter only one of the three options");
    if (!(choices.includes(humanChoice))){
        alert(humanChoice);
        return;
    }
    return(humanChoice);
};
let humanScore=0;//gloabal variable to track human's win count
let computerScore=0;// ""   ""           ""    computers's ""
playGame();// call the playgame function which calls the play round function 5 times.
//function that computes the play of a single round.
function playRound (humanChoice,computerChoice){ 
    switch(`${humanChoice} ${computerChoice}`){ 
        case 'rock paper':
            alert(`you lose ☹ ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'rock scissors':
            alert(`you win 😎 ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'paper rock':
            alert(`you win 😎 ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'paper scissors':
            alert(`you lose ☹ ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'scissors paper':
            alert(`you win 😎 ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'scissors rock':
            alert(`you lose ☹ ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'scissors scissors':
        case 'rock rock':
        case 'paper paper':
            alert(' It was a Draw!🤝');
            break;
        default:
            alert('please correct your inputs based on the choices and replay 👀 ');
    };
};
function playGame(){
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
    alert(winner);
    return winner;
};




