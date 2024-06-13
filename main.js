"use strict";

var game = document.querySelector(".game");
var player = document.querySelector(".player");
var block = document.querySelector(".block");
var hole = document.querySelector(".hole");
var score = document.querySelector(".score");
var restart = document.querySelector(".restart");
var result = document.querySelector(".result");
var jumping = 0;
var counter = 0;


// Block Animation Starts //

block.addEventListener("animationiteration", function(){

    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var random = Math.floor(Math.random()*300);
    hole.style.top = random + 'px';
    counter++;
    score.innerText = counter;

})

// Block Animation Ends //

// GameOver Function Starts

setInterval(() => {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(jumping == 0){
        player.style.top = (playerTop + 4) + 'px';
        if(playerTop > 450){
            player.style.top =  '450px';            
        }
    }


    // if( ((playerTop >= 450) || ((blockLeft<80) && (blockLeft>-50))) && ((playerTop-holeTop)>=150 )){
    //     alert("Pappu");
    //     player.style.top =  '100px';            
    // }

    if( ((playerTop >= 450) || ((blockLeft<80) && (blockLeft>-50))) && ((playerTop-holeTop)>=150 || (playerTop<holeTop))){
        score.style.display = "none";
        game.style.display = "none";
        restart.style.display = "flex";      
        result.innerText = score.innerText;
        counter = 0;
    }
    
},10);

// GameOver Function Ends

// Player Gravity Function Starts

window.addEventListener("keydown", (e) => {
    if(e.key == " "){
    jumping = 1;
    let jumpCount = 0;

    let gravity = setInterval(function(){
        var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        if((playerTop>6)&&(jumpCount<15)){
        player.style.top = (playerTop - 6) + 'px';
    }
    if(jumpCount>20){
        clearInterval(gravity)
        jumping = 0;
        jumpCount = 0;
    }
    jumpCount++
    example.innerHTML = jumpCount
    },10)
}
})

// Player Gravity Function Ends 

window.addEventListener("keydown", function(e){
    if(e.keyCode == "13"){
        location.reload()
    }
})