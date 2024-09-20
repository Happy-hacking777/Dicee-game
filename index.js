/* let name1 = prompt('Name of the first Player');
document.querySelector(".player1").innerHTML = name1;

let name2 = prompt('Name of the second Player');
document.querySelector(".player2").innerHTML = name2; */

let randomNumber1 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
let randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "✅ Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! ✅";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
