let userScore = 0;
let computerScore = 0;
const highscore =10;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice)  +" " + "beats" +" " +  convertToWord(computerChoice) + ".You win!";
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
    if (userScore == 10) {
        alert("Congratulation. You Win!!!")
    }
    
   

}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice)  +" " + "beats" +" " +  convertToWord(computerChoice) + ".You Lost!";
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
    if (computerScore == 10) {
        alert("Sorry! try again.")
    }

}
function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice)  +" " + "beats" +" " +  convertToWord(computerChoice) + ".It's a Draw!";
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 300);
    console.log("DRAWN");
}
function game(userChoice) {
     const computerChoice = getComputerChoice();
     switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice); 
            break;                      
            
     }
    

}

function main() {
    rock_div.addEventListener('click', function() {
        game ("r");
        
    })

    paper_div.addEventListener('click', function(){
        game ("p");
        
    })


    scissors_div.addEventListener('click', function(){
        game ("s");
    
    })
}
main();

