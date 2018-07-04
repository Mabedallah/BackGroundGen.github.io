var _ = require('lodash');
var array = [1,2,3,4,5,6,7,8,9,10]
console.log('Answer is' , _.without(array,3))
console.log(_);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function changeBackground()
{
	body.style.background = "linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";
	css.textContent = body.style.background+";";
	console.log(body.style.background);
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

const add = (a,b)=>a+b;
