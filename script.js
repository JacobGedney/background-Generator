var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button")


function randomColorGen(){
var GenColor1 = Math.floor(Math.random() * 256);
var GenColor2 = Math.floor(Math.random() * 256);
var GenColor3 = Math.floor(Math.random() * 256);
var GenColor4 = Math.floor(Math.random() * 256);
var GenColor5 = Math.floor(Math.random() * 256);
var GenColor6 = Math.floor(Math.random() * 256);
var randomColor1 = "rgb(" + GenColor1 + "," + GenColor2 + "," + GenColor3 + ")"; 
var randomColor2 = "rgb(" + GenColor4 + "," + GenColor5 + "," + GenColor6 + ")"; 

	body.style.background = "linear-gradient(to right, " 
	+ randomColor1
	+ "," 
	+ randomColor2
	+ ")" ; 

	css.textContent = body.style.background + ";";

}



function currentBackground(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")" ; 

	css.textContent = body.style.background + ";";
}

currentBackground()


function changeBackground (){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")" ; 

	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

button.addEventListener("click", randomColorGen);