var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

var pic1 = "dice" + randomNumber1;
var RandomSource1 = pic1 +".png";

var pic2 = "dice" + randomNumber2;
var RandomSource2 =  pic2 +".png";

document.getElementsByTagName("img")[0].setAttribute("src", RandomSource1);
document.getElementsByTagName("img")[1].setAttribute("src", RandomSource2);


if(randomNumber1 == randomNumber2){
  document.getElementsByTagName("h1")[0].style.fontSize = "85px";
  document.getElementsByTagName("h1")[0].innerHTML = "Draw";
}

else if (randomNumber1>randomNumber2) {
  document.getElementsByTagName("h1")[0].style.fontSize = "85px";
  document.getElementsByTagName("h1")[0].innerHTML = "🏁 The Winner: Player 1";
}
else {
  document.getElementsByTagName("h1")[0].style.fontSize = "85px";
  document.getElementsByTagName("h1")[0].innerHTML = "The Winner: Player 2 🏁";
}

function ReLoad(){
  location.reload();
}

 document.getElementsByTagName("button")[0].addEventListener("click", ReLoad);

/*

switch(randomNumber1){
    case 1: document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png")
        break;
    case 2: document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png")
        break;
    case 3: document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png")
        break;
    case 4: document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png")
        break;
    case 5: document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png")
        break;
    case 6: document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png")
        break;
}

switch(randomNumber2){
    case 1: document.getElementsByTagName("img")[1].setAttribute("src", "images/dice1.png")
        break;
    case 2: document.getElementsByTagName("img")[1].setAttribute("src", "images/dice2.png")
        break;
    case 3: document.getElementsByTagName("img")[1].setAttribute("src", "images/dice3.png")
        break;
    case 4: document.getElementsByTagName("img")[1].setAttribute("src", "images/dice4.png")
        break;
    case 5: document.getElementsByTagName("img")[1].setAttribute("src", "images/dice5.png")
        break;
    case 6: document.getElementsByTagName("img")[1].setAttribute("src", "images/dice6.png")
        break;
}

*/
