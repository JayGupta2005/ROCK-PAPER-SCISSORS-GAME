let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score"); 

const genCompChoice = ()=>{
    const options =["rock" , "paper" , "scissors"];
    //rock ,paper , scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
const drawGame = () =>{
    console.log("Game Was draw.");
    msg.innerText = "Game Draw! Play again"
    msg.style.backgroundColor =  "#081b31";
};
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win"
        msg.style.backgroundColor =  "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
        console.log("You loose");
        msg.innerText = "You lose";
        msg.style.backgroundColor =  "red";
    }
}

const playGame = (userChoice)=>{
    console.log("User Ki choice = " , userChoice)
    const compChoice = genCompChoice();
    console.log("comp-choice" , compChoice);
    //generate compChoice
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            //seissord paper
            userWin = compChoice==="paper"? false : true ;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissors"? false : true ;
        }
        else{
            userWin = compChoice==="rock"?false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Clicked" , userChoice);
        playGame(userChoice);
    });
});