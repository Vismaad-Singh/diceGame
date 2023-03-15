// document.body.onload = startGame;


function startGame(){
    var randomDice1 = Math.floor(Math.random()*6 + 1);
    var randomDice2 = Math.floor(Math.random()*6+1);

    var randomNumberDice1 = "images/dice" + randomDice1 + ".png";
    var randomNumberDice2 = "images/dice" + randomDice2 + ".png";


var image1 = document.querySelectorAll("img")[0].setAttribute("src" , randomNumberDice1);
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomNumberDice2);


    
    if(randomDice1>randomDice2){
        document.querySelector("h1").innerHTML = "PLAYER 1 WINS!!!!!";
    }
    else if(randomDice1<randomDice2){
        document.querySelector("h1").innerHTML = "PLAYER 2 WINS!!!!!";
    }
    else{
        document.querySelector("h1").innerHTML = "BOTH WIN!!!!";
    }
}


