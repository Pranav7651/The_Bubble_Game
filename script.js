var timer=60;
var score=0;
var hitval=0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}
function makeBubble(){
var clutter="";

for(var i=1;i<=102;i++){
    var rand=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rand}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;

}
function runTimer(){
    var time = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
        }
    },1000);
    
}
function getNewHit(){
    hitval=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitval;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedBubble=Number(dets.target.textContent);
    if(clickedBubble===hitval){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})


getNewHit();
runTimer();
makeBubble();