var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomVariable1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomVariable2+".png");

var text = document.querySelector("h1").textContent;
if(randomVariable1 > randomVariable2)
 document.querySelector("h1").textContent="🚩Player 1 wins !!";
else if(randomVariable2 > randomVariable1)
 document.querySelector("h1").textContent="Player 2 wins !!🚩";
else
 document.querySelector("h1").textContent="It's a draw !!";
