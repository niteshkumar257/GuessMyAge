// 
let secret=Math.floor(Math.random()*20)+1; 
let score=20;

let highScore=0;

document.querySelector(".check").addEventListener("click",function(){
    const guess= Number((document.querySelector(".guess").value));
   console.log( guess, typeof guess); 
   // There is no input 

   if(!guess)
   {
       document.querySelector(".message").textContent="No Number";
   }
   //Player wins
   else if(guess==secret)
   {
   document.querySelector(".message").textContent="Correct Number";
   document.body.style.backgroundColor=" green"
   document.querySelector(".number").textContent=secret;
   if(score>highScore)
   {
       highScore=score;
       document.querySelector(".highscore").textContent=score;
   }

   
 

   }
   // Too high
   else if(guess>secret )
   {if(score>1)
    {
    document.querySelector(".message").textContent="Too high";
    score--;
    document.querySelector(".score").textContent=score;
    }
    else
    {
        document.querySelector(".score").textContent=0;
         document.querySelector(".message").textContent="You lost The match";
    }
   }
   //Too Low
   else
   {
       if(score>1){
    document.querySelector(".message").textContent="Too low";
    
    score--;
    document.querySelector(".score").textContent=score;
       }
       else
       {
        document.querySelector(".score").textContent=0;
        document.body.style.backgroundColor="red";
        document.querySelector(".message").textContent="You lost The match";
       }
   }
})
// MANIPULATING CSS USING DOM MANIPULATION

//Again playing the game

document.querySelector(".again").addEventListener("click",function()
{
 score=20;
 secret=Math.floor(Math.random()*20)+1; 
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value=" ";
    document.body.style.backgroundColor="#222";
})
