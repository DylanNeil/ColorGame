var numSquares = 6;
var colors = [];
var pickedColor;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //picks the fourth color in the array "colors"
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
setUpModeButtons();
setUpSquares();
reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");

			this.classList.add("selected");
 			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.lengh; i++){
		squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "correct"
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"			
		}
		});
	}
}



function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
		squares[i].style.display = "none";
	}
}
	h1.style.background = "steelblue";
}



resetButton.addEventListener("click", function(){
	reset();
})

for(var i = 0; i < squares.length; i++){ //This line loops through each square
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i]; //This line loops through each color

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "correct"
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"			
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i <squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num;  i++){
		arr.push(randomColor())
		//get random color and push into array
	}
	//return that array
	return arr;
}

function randomColor(){
		var r = Math.floor(Math.random()*256)
	
		var g = Math.floor(Math.random()*256)

		var b = Math.floor(Math.random()*256)
		"rgb(r, g, b)"
		return "rgb(" + r + ", " + g + ", " + b + ")";

}
