//function "use strict";


var points = 0;
var questionCounter = 1;
var question = "";

    function wrongGuess() {
        document.getElementById("checkAnswer").innerHTML = "False"
    } 


   function correctGuess(){
        document.getElementById("points").innerHTML =points
        document.getElementById("checkAnswer").innerHTML = "True"
        points++
    }

    

/*
document.getElementById("button0").onclick = function () {checkIf0GuessIsTrue()}
document.getElementById("button1").onclick = function () {checkIf1GuessIsTrue()}
document.getElementById("button2").onclick = function () {checkIf2GuessIsTrue()}
document.getElementById("button3").onclick = function () {checkIf3GuessIsTrue()}
*/
