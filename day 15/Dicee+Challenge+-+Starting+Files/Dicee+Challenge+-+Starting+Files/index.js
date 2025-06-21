var rand1 = Math.floor(Math.random() * 6) + 1;
var randimg1 = "images/dice" + rand1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randimg1);

var rand2 = Math.floor(Math.random() * 6) + 1;
var randimg2 = "images/dice" + rand2 + ".png";
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src", randimg2);

var header = document.querySelector("h1");

if (rand1 > rand2) {
    header.innerHTML = "🚩 Play 1 Wins";
} else if (rand1 < rand2) {
    header.innerHTML = "Player 2 Wins 🚩";
} else {
    header.innerHTML = "Draw";
}