// by GINK-SS

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const colorBtn = document.querySelector("button");

colorBtn.addEventListener("click", () => {
  const colorOne = Math.floor(Math.random() * colors.length);
  let colorTwo = Math.floor(Math.random() * colors.length);
  //===== colorOne과 colorTwo가 같으면 다를 때까지 colorTwo를 조정 ==========
  while (colorOne === colorTwo) {
    colorTwo = Math.floor(Math.random() * colors.length);
  }
  document.body.style.background = `linear-gradient(${colors[colorOne]}, ${colors[colorTwo]})`;
});
