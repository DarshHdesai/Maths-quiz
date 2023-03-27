player1_name = localStorage.getItem("p1");
player2_name = localStorage.getItem("p2");

p1_score =   0;
p2_score =   0;

document.getElementById("p1_name").innerHTML = player1_name + ":";
document.getElementById("p2_name").innerHTML = player2_name + ":";

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score; 

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;