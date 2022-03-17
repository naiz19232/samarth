player_1 = localStorage.getItem("u1");
player_2 = localStorage.getItem("u2");
console.log(player_1);
console.log(player_2);
document.getElementById("uuu1").innerHTML = player_1 + ":";
document.getElementById("uuu2").innerHTML = player_2 + ":";
score_player_1 = 0;
score_player_2 = 0; 
document.getElementById("score1").innerHTML = score_player_1;
document.getElementById("score2").innerHTML = score_player_2;
document.getElementById("question").innerHTML = "Question turn-" + player_1;
document.getElementById("player_answer").innerHTML = "Answer turn-" + player_2;
function send(){
    a1 = document.getElementById("answer1").value;
    a2 = document.getElementById("answer2").value;
    a3 = parseInt(a1)*parseInt(a2);
    row1 = "<h5><b>"+a1+"*"+a2 +"</h5></b>";
    row2 = "<br><h6>Answer:</h6> <input id='answer_writing' type='text'>";
    row3 = "<br><button id='check' onclick='check()'>Check</button>";
    row = row1 + row2 + row3;
    document.getElementById("output").innerHTML = row;
    document.getElementById("answer1").value = "";
document.getElementById("answer2").value = "";
}
pa = "player2";
qt = "player1";
function check(){
    answer_2 = document.getElementById("answer_writing").value;
    if(answer_2 == a3)	
	{
		if(pa == "player1")
		{
			score_player_1 = score_player_1 +1;
		    document.getElementById("score1").innerHTML = score_player_1;
		}
		else 
		{
			score_player_2 = score_player_2+1;
		    document.getElementById("score2").innerHTML = score_player_2;
		}
	}
	if(qt == "player1")
	{
		qt = "player2"
		document.getElementById("question").innerHTML = "Question Turn - " + player_1 ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("question").innerHTML = "Question Turn - " + player_2 ;
	}

	if(pa == "player1")
	{
		pa = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1;
	}
	else 
	{
		pa = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2;
	}

    document.getElementById("output").innerHTML = "";
}