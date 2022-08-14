const color1 = ["#02343F", "#815854", "#1E4174", "#A4193D", "#00203F"];
const color2 = ["#F0EDCC", "#F9EBDE", "#DDA94B", "#FFDFB9", "#ADEFD1"];
const randomNum = Math.floor(Math.random() * color1.length);

const clockC = document.getElementById("clock");
const greetingC = document.getElementById("greeting");
const toDoListC = document.getElementById("todo-list");
const weatherC = document.getElementById("weather");

document.body.style.backgroundColor = color1[randomNum];

clockC.style.color = color2[randomNum];
greetingC.style.color = color2[randomNum];
toDoListC.style.color = color2[randomNum];
weatherC.style.color = color2[randomNum];
