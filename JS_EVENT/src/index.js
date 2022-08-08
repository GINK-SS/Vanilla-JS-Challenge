// by GINK-SS
// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector("h2");

const superEventHandler = {
  mouseEnter() {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseLeave() {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  reSize() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  contextMenu() {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseover", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.reSize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
