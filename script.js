//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1
console.log(randomNumber)
let score = 20
let highScore = 0
document.querySelector(".check").addEventListener("click",function(){
    if(score===0) return
  const input=  document.querySelector(".guess").value
  if (input==randomNumber){
    document.querySelector("body").style.backgroundColor="green"
    document.querySelector(".message").innerText="correct Number"
    document.querySelector(".number").innerText=randomNumber
    if (score>highScore){
        document.querySelector(".highscore").innerText=score
    }
  }else{
    score--
    document.querySelector(".score").innerText=score
    if(score===0){
        document.querySelector("body").style.backgroundColor="red"
        document.querySelector(".message").innerText="game is over!!"
    
        return

    }
    if (input>randomNumber){
        document.querySelector(".message").innerText="Too Hich!"
    }else{
        document.querySelector(".message").innerText="Too Low!"
    }
  }


})
document.querySelector(".again").addEventListener("click",function(){
    //1. random returned to ?
    document.querySelector(".number").innerText="?"
    //2.backgroung to black
    document.querySelector("body").style.backgroundColor="black"
    //3.messege bottom to start gassing
    document.querySelector(".message").innerText="Starting guessing........."
    //4.scoreHigh
    document.querySelector(".highscore").innerText=score
    document.querySelector(".score").innerText="20"
    document.querySelector(".guess").value="";

})