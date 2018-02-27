var crystals = ["redNum", "greenNum", "blueNum", "yellowNum"];
var machineNumber = 0;

//Declares variable values for the beginning of the game
var beginGame = function (){
    for (var i = 0; i < crystals.length; i++) {
        //Creates a random number in between 21 and 120 for the user to compare
        machineNumber = Math.floor(Math.random() * 99 + 21);
        //Creates random nunber between 1 and 10 for the crystals. 
        crystals[i] = Math.floor(Math.random() * 9 + 1);
        crystalTotal = 0;
        $("#counter").text("Energy reading: ");
    };
};

beginGame();

var resetGame = function (){
    
};
console.log (machineNumber);
console.log(crystals[0]);
console.log(crystals[1]);
console.log(crystals[2]);
console.log(crystals[3]);

var crystalTotal = 0;
var wins = 0;
var losses = 0;

//Creates HTML for the machine
$(document).ready(function (){
    $("#machine").html("Machine energy MAX: " + machineNumber);
});

//Creates HTML for the energy counter when crystals are clicked
//NOT very DRY, but will go back later to fix (if it works, ship it...)
var gameStats = function(){
    
    $(document).on("click", "#red", function() {
        crystalTotal += crystals[0];
        $("#counter").text("Energy reading: " + crystalTotal);
        console.log("score" + crystalTotal);
        winLoss();
    });
    $(document).on("click", "#green", function() {
        crystalTotal += crystals[1];
        $("#counter").text("Energy reading: " + crystalTotal);
        console.log("score" + crystalTotal);
        winLoss();
    });
    $(document).on("click", "#blue", function() {
        crystalTotal += crystals[2];
        $("#counter").text("Energy reading: " + crystalTotal);
        console.log("score" + crystalTotal);
        winLoss();
    });
    $(document).on("click", "#yellow", function() {
        crystalTotal += crystals[3];
        $("#counter").text("Energy reading: " + crystalTotal);
        console.log("score" + crystalTotal);
        winLoss();
    });
};

//Determines and writes Wins and Losses in the game
var winLoss = function () {
    if (crystalTotal === machineNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
        beginGame();
        $(document).ready(function (){
            $("#machine").html("Machine energy MAX: " + machineNumber);
        });
    }

    else if (crystalTotal > machineNumber) {
        losses++;
        $("#losses").text("Losses " + losses);
        beginGame();
        $(document).ready(function (){
            $("#machine").html("Machine energy MAX: " + machineNumber);
        });
    }
};

gameStats();
