var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var res = document.querySelector("#res");

var p1D = document.querySelector("#p1D");
var p2D = document.querySelector("#p2D");

var num = document.querySelector("input");
var val = document.querySelector("#val");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var win = 5;

p1.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score===win) {
			p1D.classList.add("winner");
			gameOver = true;
		}
		p1D.textContent = p1Score;
	}
});

p2.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score===win) {
			p2D.classList.add("winner");
			gameOver = true;
		}
		p2D.textContent = p2Score;
	}
}); 

res.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1D.textContent = p1Score;
	p2D.textContent = p2Score;
	gameOver = false;
	p1D.classList.remove("winner");
	p2D.classList.remove("winner"); 
}

num.addEventListener("change", function() {
	val.textContent = num.value;
	win = Number(num.value);
	reset();
});