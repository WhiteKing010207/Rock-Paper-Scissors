let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const messagePara = document.querySelector(".message");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#computer-score");


const message = (userWin) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        messagePara.innerText= "You Win";
        messagePara.style.backgroundColor = "green";
    }
    else
    {
        comScore++;
        comScorePara.innerText = comScore;
        messagePara.innerText= "You lose";
        messagePara.style.backgroundColor = "red";
    }
}

const generateComputerChoice = ()=>{
    const value = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    
    return value[randomIndex];
}

const playGame = (userChoice) => {
    //generate computer choice
    let userWin = true;
    let comChoice = generateComputerChoice();

    // console.log("user choice ",userChoice);
    // console.log("computer choice ",comChoice);

    if(userChoice === comChoice)
    {
        messagePara.innerText= "It Is A Draw.Play Again!";
        messagePara.style.backgroundColor = "rgba(3, 3, 24, 0.801)";
        
    }
    else
    {
        if(userChoice === "rock")
        {
            //paper,scissors
            userWin = comChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock,scissors
            userWin = comChoice === "scissors" ? false : true;
        }
        else
        {
            //rock,paper
            userWin = comChoice === "rock" ? false : true;
        }
        message(userWin);
    }

    
}
choices.forEach((choice) =>
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
);