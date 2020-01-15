var rand = [];

for (var r = 19; r < 121; r++) {
  rand.push(r);
}

var crstals = [];

for (var c = 1; c < 13; c++) {
  crstals.push(c);
}

var randnumber;
var crystalnumbers = [];

var c1;
var c2;
var c3;
var c4;

var totalscore = 0;

var wins = 0;
var losses = 0;

function pickRandomNumber(arr) {
  var x = arr[Math.floor(Math.random() * arr.length)];
  randnumber = x;
  $("#randomNumber").html(randnumber);
  console.log("random number: " + randnumber);
}

function pickRandomCrystals(arr) {
  for (var y = 0; y < 4; y++) {
    var a = arr[Math.floor(Math.random() * arr.length)];
    crystalnumbers.push(a);
  }
  console.log("crystal numbers: " + crystalnumbers);
}
function crystalvalues(arr) {
  for (i = 0; i < arr.length; i++) {
    $("#button-" + (i + 1)).attr("value", arr[i]);
    console.log(this);
  c1 = arr[0];
  c2 = arr[1];
  c3 = arr[2];
  c4 = arr[3];
  }
}
function gameReset(x) {
  crystalnumbers = [];
  pickRandomNumber(randnumber);
  pickRandomCrystals(crystals);
  crystalvalues(crystalnumbers);
  totalscore = 0;
  $("#totalNumber").html(totalscore);
  alert(x);
}
pickRandomNumber(rand);
pickRandomCrystals(crystals);
crystalvalues(crystalnumbers);

$("#button-1").on("click", function() {
  totalscore += c1;
  $("#totalNumber").html(totalscore);
});
$("#button-2").on("click", function() {
  totalscore += c2;
  $("#totalNumber").html(totalscore);
});
$("#button-3").on("click", function() {
  totalscore += c3;
  $("#totalNumber").html(totalscore);
});
$("#button-4").on("click", function() {
  totalscore += c4;
  $("#totalNumber").html(totalscore);
});

$("button").on("click", function() {
  if (totalscore == randNumber) {
    wins++;
    console.log(totalscore);
    $("#totalNumber").html(totalscore);
    $("#wins").html("wins: " + wins);

    setTimeout(function() {
      GameReset("You win!");
    }, 200);
  } else if (totalScore > randNumber) {
    losses++;
    $("#totalNumber").html(totalScore);
    $("#losses").html("Losses: " + losses);

    setTimeout(function() {
      gameReset("You lose!");
    }, 200);
  }
});
