// Variables used for the game
var crystals = ["redNum", "greenNum", "blueNum", "yellowNum"];
var machineNumber = 0;
var crystalTotal = 0;
var wins = 0;
var losses = 0;

//Declares variable values for the beginning of the game,
var beginGame = function (){
    for (var i = 0; i < crystals.length; i++) {
        //Creates a random number in between 19 and 120 for the user to compare
        machineNumber = Math.floor(Math.random() * 101 + 19);
        //Creates random nunber between 1 and 12 for the crystals. 
        crystals[i] = Math.floor(Math.random() * 11 + 1);
        crystalTotal = 0;
        //Shows empty amount for the energy reading
        $("#counter").text("Energy reading: ");
    };
};

//When enter is pressed, audio stops, + Vader and 'press enter to play' become hidden
$(window).keypress(function (e) {
    if (e.keyCode === 13) {
      $("#vader").css("visibility","hidden");
      $("#press-enter").css("visibility","hidden");
      $("#game-pics").css("visibility","visible"); 
      $("#audio-player").html("");
    }
  });

// Un-hide to show stats in the console!
//---------------------------------
// console.log(machineNumber);
// console.log(crystals[0]);
// console.log(crystals[1]);
// console.log(crystals[2]);
// console.log(crystals[3]);

//Creates HTML for the machine
$(document).ready(function (){
    $("#machine").text("Machine energy MAX: " + machineNumber);
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
        $("#losses").text("Losses: " + losses);
        beginGame();
        $(document).ready(function (){
            $("#machine").html("Machine energy MAX: " + machineNumber);
        });
    }
};

beginGame();
gameStats();
