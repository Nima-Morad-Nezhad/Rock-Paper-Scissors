let rock = document.querySelector(".rock-button");
let paper = document.querySelector(".paper-button");
let scissors = document.querySelector(".scissors-button");
let yourScore = document.querySelector(".yourScore");
let computerScore = document.querySelector(".computerScore");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let end = document.querySelector(".end");
let save = document.querySelector(".save");
let load = document.querySelector(".load");
function computer(){
    const randomNumber = Math.random();
   
    if(randomNumber >= 0 && randomNumber < 1/3){
        return "rock";
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        return   "paper";
    }else if (randomNumber >= 2/3 && randomNumber < 1){
        return"scissors"
    }
}

    rock.addEventListener("click", ()=>{
    
        if(computer() === "rock"){
            console.log("tie");
            result.innerHTML = `You chose &#129704; and computer chose &#129704;!`
        }else if(computer() === "paper"){
            console.log("Computer won.");
            Number(computerScore.innerHTML ++);
              result.innerHTML = `You chose &#129704; but computer chose &#x1F9FB;!`
        }else {
            console.log("You won!")
            Number(yourScore.innerHTML ++);
                result.innerHTML = `You chose &#129704; but computer chose &#9986;!`
        }
        game();
    })
    paper.addEventListener("click", ()=>{
        if(computer() === "rock"){
            console.log("You won!");
            Number(yourScore.innerHTML ++);
               result.innerHTML = `You chose &#x1F9FB; but computer chose &#129704;!`
        }else if(computer() === "paper"){
            console.log("tie")
               result.innerHTML = `You chose &#x1F9FB; and computer chose &#x1F9FB;!`
        }else {
            console.log("computer won!")
            Number(computerScore.innerHTML ++);
              result.innerHTML = `You chose &#x1F9FB; but computer chose &#9986;!`
        }
        game();
    })
    scissors.addEventListener("click", ()=>{
        if(computer() === "rock"){
            console.log("Computer won!");
            computerScore.innerHTML ++;
               result.innerHTML = `You chose  &#9986; but computer chose &#129704;!`
        }else if(computer() === "paper"){
            console.log("You won!")
            yourScore.innerHTML ++;
              result.innerHTML = `You chose  &#9986; but computer chose &#x1F9FB;!`
        }else {
            console.log("tie")
             result.innerHTML = `You chose  &#9986; and computer chose &#9986;!`
        }
        game();
    })

//reset
reset.addEventListener("click", ()=>{
    computerScore.innerHTML = 0;
    yourScore.innerHTML = 0;
    result.innerHTML = "Let's choose!"
})
 end.addEventListener("click",()=>{

if(Number(computerScore.innerHTML) > Number(yourScore.innerHTML)){alert("Computer won!") 
    yourScore = 0;
    computerScore = 0;}
 
else{
    alert("You won!") 

    yourScore.innerHTML = 0;
    computerScore.innerHTML = 0;
} 
   


 })
 save.addEventListener("click",()=>{
   const savePlayerScore = yourScore.innerHTML
   localStorage.setItem("yourScore" , savePlayerScore)

   const saveComputerScore = computerScore.innerHTML
   localStorage.setItem("computerScore" , saveComputerScore);
 })

 load.addEventListener("click", ()=>{
    const savedPlayerScore = localStorage.getItem("yourScore"); 
    const savedComputerScore = localStorage.getItem("computerScore");
    if(savedPlayerScore !== null){
        yourScore.innerHTML = savedPlayerScore;
    }
    if(savedComputerScore !== null){
        computerScore.innerHTML = savedComputerScore;
    }
 })

function game(){
    
    if(Number(yourScore.innerHTML) === 10){
      
      alert(`You won! \n ${yourScore.innerHTML} is your score \n ${computerScore.innerHTML} is computer's score`)
      yourScore.innerHTML = 0;
      computerScore.innerHTML = 0;

    }else if(Number(computerScore.innerHTML) === 10){
        alert(`Computer won! \n ${computerScore.innerHTML} is computer's score \n ${yourScore.innerHTML} is your score`)
        yourScore.innerHTML = 0;
        computerScore.innerHTML = 0;
    }
    return
};


