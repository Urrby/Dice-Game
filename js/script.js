let score, roundScore, currentPlayer, gamePlayeing, player1, player2, player;
newGame();
player1 = prompt("Enter the name of player 1: ");
if (player1 === "") {
	player1 = "Player 1";
} else if (player1) {
} else {
	player1 = "Player 1";
}
player2 = prompt("Enter the name of player 2: ");
if (player2 === "") {
	player2 = "Player 2";
} else if (player2) {
} else {
	player2 = "Player 2";
}
document.getElementById("name-0").textContent = player1;
document.getElementById("name-1").textContent = player2;
document.querySelector(".btn-roll").addEventListener("click", function () {
	if (gamePlayeing) {
		let dice0 = generateNumber();
		let dice1 = generateNumber();
		document.querySelector(".final-score").style.display = "none"
		document.getElementById("dice-0").style.display = "block";
		document.getElementById("dice-1").style.display = "block";
		document.getElementById("dice-0").src = "img/dice-" + dice0 + ".png";
		document.getElementById("dice-1").src = "img/dice2-" + dice1 + ".png";
		if(dice0 > 1 && dice1 > 1) {
			if(dice0 !== dice1) {
				roundScore += (dice0 + dice1);
				document.getElementById("current-" + currentPlayer).textContent = roundScore;
			} else if (dice0 === 6 && dice1 === 6) {
				resetScore();
				score[currentPlayer] = 0;
				document.getElementById("score-" + currentPlayer).textContent = "0";
				setTimeout(nextPlayer, 500);
			} else {
				roundScore += (dice0 + dice1);
				document.getElementById("current-" + currentPlayer).textContent = roundScore;
			}
		} else {
			resetScore();
			setTimeout(nextPlayer, 500);
		}
	}	
});


document.querySelector(".btn-hold").addEventListener("click", function () {
	if (gamePlayeing) {
		score[currentPlayer] += roundScore;
		document.getElementById("score-" + currentPlayer).textContent = score[currentPlayer];
		let inputScore = document.querySelector(".final-score").value;
		let finalScore;
		if (inputScore) {
			finalScore = inputScore;
		} else {
			finalScore = 50;
		}
		if (score[currentPlayer] >= finalScore) {
			gamePlayeing = false;
			document.getElementById("trophy-" + currentPlayer).style.display = "block";
			document.getElementById("name-" + currentPlayer).textContent = "WINNER!"
			document.querySelector(".player-" + currentPlayer + "-panel").classList.add("winner");
			document.querySelector(".player-" + currentPlayer + "-panel").classList.remove("active");
		} else {
			nextPlayer();
		}
	}
});


document.querySelector(".btn-new").addEventListener("click", newGame); 


function generateNumber () {
	return Math.floor(Math.random() * 6) + 1;
}

function newGame () {
	score = [0,0];
	roundScore = 0;
	currentPlayer = 0;
	gamePlayeing = true;
	document.querySelector(".final-score").style.display = "block"
	document.getElementById("trophy-0").style.display = "none";
	document.getElementById("trophy-1").style.display = "none";
	document.querySelector(".player-0-panel").classList.add("active")
	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("dice-0").style.display = "none";
	document.getElementById("dice-1").style.display = "none";
	document.getElementById("name-0").textContent = player1;
	document.getElementById("name-1").textContent = player2;
	resetScore();
}

function resetScore () {
	roundScore = 0;
	document.getElementById("current-" + currentPlayer).textContent = "0";
}

function nextPlayer () {
	if(currentPlayer === 0) {
		currentPlayer = 1;
	} else {
		currentPlayer = 0;
	}
	roundScore = 0;
	document.getElementById("dice-0").style.display = "none";
	document.getElementById("dice-1").style.display = "none";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");
}

