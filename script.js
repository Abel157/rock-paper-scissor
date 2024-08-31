function getComputerChoice (){
    const num=Math.floor((Math.random()) *3);
    switch(num){
        case 0:
            return ("rock");
        case 1:
            return ("paper");
        case 2:
            return ("scissors");
    }
};
function getHumanChoice (){
    let humanChoice=(prompt("Enter 'rock', 'paper' or 'scissors' ")).toLowerCase() || "Please enter one of the options";
    const choices=["rock","paper", "scissors"];
    humanChoice=(choices.includes(humanChoice)? humanChoice : "Please enter only one of the three options");
    if (!(choices.includes(humanChoice))){
        alert(humanChoice);
        return;
    }
    return(humanChoice);
}


