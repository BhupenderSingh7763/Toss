var n = Math.floor(Math.random() * 2) + 1;

var p1win = "images/left2.png";

var p2win = "images/right2.png";

var head = "images/coin2.png";

var tail = "images/coin3.png";

if(n===1)
{
  document.querySelector(".title").innerHTML = " 👇 🏾     Person 1 Wins the Toss";
  document.querySelectorAll("img")[0].setAttribute("src", p1win);
  document.querySelectorAll("img")[1].setAttribute("src", head);
}

else
{
  document.querySelector(".title").innerHTML = "Person 2 Wins the Toss     👇 🏾";
  document.querySelectorAll("img")[1].setAttribute("src", tail);
  document.querySelectorAll("img")[2].setAttribute("src", p2win);
}
