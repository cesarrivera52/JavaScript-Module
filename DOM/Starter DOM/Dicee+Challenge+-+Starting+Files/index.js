var RandomeDiceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];


var randomNumber1 = Math.floor(Math.random() * 6); //random number between 1 and 6
var randomNumber2 = Math.floor(Math.random() * 6);

var RandomImgageSource1 = document.querySelectorAll("img")[0].setAttribute('src', 'images/' + RandomeDiceImages[randomNumber1]);
var RandomImgageSource2 = document.querySelectorAll("img")[1].setAttribute('src', 'images/' + RandomeDiceImages[randomNumber2]);

// If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
// If player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
// If it's a draw
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}



