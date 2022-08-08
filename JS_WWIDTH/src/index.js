// by GINK-SS

// ----- Hello 출력 ----------
const p = document.createElement("p");
document.body.appendChild(p);
p.innerText = "Hello!";
p.style.fontSize = "50px";
p.style.marginLeft = "20px";
p.style.color = "white";
p.style.fontWeight = "800";

window.addEventListener("resize", () => {
  let wWidth = window.innerWidth;

  if (wWidth < 400) document.body.style.backgroundColor = "tomato";
  else if (wWidth >= 400 && wWidth < 700)
    document.body.style.backgroundColor = "green";
  else if (wWidth >= 700 && wWidth < 1000)
    document.body.style.backgroundColor = "blue";
  else document.body.style.backgroundColor = "purple";
});
