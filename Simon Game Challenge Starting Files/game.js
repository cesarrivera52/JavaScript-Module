// /script.js

var gamePattern = []; // stores generated sequence
var userClickedPattern = []; // stores user input sequence
var started = false; // prevents multiple game starts
var level = 0;

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  userClickedPattern = []; // reset user input each level
  level += 1;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * buttonColours.length);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  // highlight + sound to show next step in sequence
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  // catch avoids crash if file missing / autoplay blocked
  audio.play().catch(function (error) {
    console.log("Audio play failed:", name, error);
  });
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  // immediate validation prevents waiting until full sequence
  if (gamePattern[currentLevel] !== userClickedPattern[currentLevel]) {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press A to Restart");
    startOver();
    return;
  }

  // only proceed when user completes full sequence correctly
  if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
}

function startOver() {
  // full reset required to avoid leftover state bugs
  started = false;
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}

$(".btn").on("click", function () {
  if (!started) {
    return; // blocks input before game starts
  }

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keydown", function (event) {
  if (!started && event.key.toLowerCase() === "a") {
    started = true;
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});