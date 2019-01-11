$(document).ready(function () {
  
setTimeout (function() {
    $("body").hide();
    alert("Let's play Crystals Game!");
    $("body").fadeIn(1000);

}, 0);
 

//Setiing up variables that needed
var randomNumber, totalScore, crystal1, crystal2, crystal4, crystal3, wins, looses;
wins = 0;
totalScore = 0;
losses = 0;
isFinished = false;

reset();
$(".finish").hide();

//Displaying scores and random variable
$("#random").text("Random Result: " + randomNumber);
$(".total").text("Your total score: " + totalScore);
$("#win").text("Wins: " + wins);
$("#lost").text("Losses: " + losses);

//Displaying images (crystals) and setting up the random
//invisible number for each crystal
var image1 = $("<img>");
image1.attr({
    "class": "crystal",
    "src": "assets/images/crystal1.png",
    "data": crystal1
    });
            //console.log("NEW NUMBER 1 -- " + image1.attr("data"));
$(".images").append(image1);
var image2 = $("<img>");
image2.attr({
    "class": "crystal",
    "src": "assets/images/crystal2.png",
    "data": crystal2
    });
            //console.log("NEW NUMBER 2 -- " + image2.attr("data"));
$(".images").append(image2);

var image3 = $("<img>");
image3.attr({
    "class": "crystal",
    "src": "assets/images/crystal3.jpg",
    "data": crystal3
    });
            //console.log("NEW NUMBER 3 -- " + image3.attr("data"));
$(".images").append(image3);

var image4 = $("<img>");
image4.attr({
    "class": "crystal",
    "src": "assets/images/crystal4.jpg",
    "data": crystal4
    });
            //console.log("NEW NUMBER 4 -- " + image4.attr("data"));
$(".images").append(image4);


//Event starts when user slicks on any crystal
$(".crystal").on("click", function(){

    //If the player dowsn't want to play anymore - isFinished
    //becomes TRUE and exit from function and fromn the game. 
    //Game freezes.
    if (isFinished) {
        return;
    }

    //Player pressing the crystals one by one and we SUM them
    var num = parseInt($(this).attr("data"));
    totalScore = totalScore + num;
    $(".total").text("Your total score: " + totalScore);

    //Checking if the total SUM of all pressed crystals is 
    //equal to computer's number
    if(totalScore === randomNumber){
        wins = wins + 1;
        $("#message").text("YOU WON!");
        $("#win").text("Wins: " + wins);
        alert("YOU'VE JUST WON! Congratulations!!!");
        question();
            
    }else if (totalScore > randomNumber){
        losses = losses + 1;
        $("#message").text("Sorry, you've lost.");
        $("#lost").text("Losses: " + losses);
        alert("YOU'VE JUST LOST!");
        question();
    }

});
  
// Pop up alert with the question for player after winning or loosing
//the message needs confirm or decline 
function question(){
    var answer = confirm("Do you want to play again?");
    if (answer == true) {
        refreshCrystals();
        console.log("You gonna play again");
    } else{
        isFinished = true;        
        $(".finish").fadeIn(2000);
        $(".images").hide();
        $(".finish").text("THANK YOU FOR PLAYING!");
    }
};

//Reset the random number and all crystal numbers
function reset() {
        crystal1 = Math.floor(Math.random() * 12) + 1;
        console.log("this is 1--" + crystal1);
        crystal2 = Math.floor(Math.random() * 12) + 1;
        console.log("this is 2--" + crystal2);
        crystal3 = Math.floor(Math.random() * 12) + 1;
        console.log("this is 3--" + crystal3);
        crystal4 = Math.floor(Math.random() * 12) + 1;
        console.log("this is 4--" + crystal4);
        randomNumber = Math.floor(Math.random() * 102) + 19;
        totalScore = 0;
        $("#random").text("Random Result: " + randomNumber);
        $(".total").text("Your total score: " + totalScore);
        
};

//Set up new random crystals
function refreshCrystals() {
        reset();
        image1.attr("data", crystal1);
        image2.attr("data", crystal2);
        image3.attr("data", crystal3);
        image4.attr("data", crystal4);
}; 

});