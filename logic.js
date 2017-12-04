//declare variables
var matchValue=0;
var wins=0;
var losses=0;
var totalScore;
var crystalOne=0;
var crystalTwo=0;
var crystalThree=0;
var crystalFour=0;
var counter = 0;

//Generate Random Number for MatchValue
var startGame = function(){
    matchValue = Math.floor(Math.random()*101)+19;
    $("#match").html(matchValue);


//Generate Random Number for each Crystal
crystalOne = Math.floor(Math.random()*12)+1;
crystalTwo = Math.floor(Math.random()*12)+1;
crystalThree = Math.floor(Math.random()*12)+1;
crystalFour = Math.floor(Math.random()*12)+1;
};

startGame();
//Assign number to each crystal

$("#crystal_one").on("click", function() {
    // counter = counter + crystalOne;
    counter += crystalOne;
    console.log(counter);
    $("#score").html(counter);
    winCriteria(counter);
});

$("#crystal_two").on("click", function() {
    counter = counter + crystalTwo;
    console.log(counter);
    $("#score").html(counter);
    winCriteria(counter);
    });

$("#crystal_three").on("click", function() {
    counter = counter + crystalThree;
    console.log(counter);
    $("#score").html(counter);
    winCriteria(counter);
    });

$("#crystal_four").on("click", function() {
    counter = counter + crystalFour;
    console.log(counter);
    $("#score").html(counter);
    winCriteria(counter);
    });


var winCriteria = function(counter){
    if (counter === matchValue) {
        wins++;
        $("#wins").html(wins);
        alert("You win!");
        reset();
      }
  
      else if (counter >= matchValue) {
        losses++;
        $("#losses").html(losses);
        alert("You lose!!");
        reset();
      }
    }


var reset = function(){
    counter=0;
    console.log(counter);
    $("#score").html(counter);
    startGame();
    // winCriteria(counter);
}