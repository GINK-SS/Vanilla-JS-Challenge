//by GINK-SS

// ----- 제목 ----------
const h1 = document.createElement("h1");
h1.innerText = "Random Number Game";
document.body.appendChild(h1);

// ----- 0부터 사용자가 지정할 숫자 입력 칸 출력 ----------
const inputContainer = document.createElement("div");
inputContainer.style.display = "flex";
inputContainer.style.alignItems = "center";
document.body.appendChild(inputContainer);

const inputH2 = document.createElement("h2");
inputH2.innerText = "Generate a number between 0 and";
inputContainer.appendChild(inputH2);

const inputNumber = document.createElement("input");
inputNumber.type = "number";
inputNumber.style.marginLeft = "5px";
inputContainer.appendChild(inputNumber);

// ----- 랜덤한 숫자 입력 칸 출력 ----------
const guessContainer = document.createElement("div");
guessContainer.style.display = "flex";
guessContainer.style.alignItems = "center";
document.body.appendChild(guessContainer);

const guessP = document.createElement("p");
guessP.innerText = "Guess the number:";
guessContainer.appendChild(guessP);

const guessNumber = document.createElement("input");
guessNumber.type = "number";
guessNumber.style.marginLeft = "5px";
guessContainer.appendChild(guessNumber);

const guessBtn = document.createElement("button");
guessBtn.innerText = "Play!";
guessBtn.style.marginLeft = "5px";
guessContainer.appendChild(guessBtn);

// ----- 사용자가 선택한 숫자 및 랜덤 숫자 표시 ----------
const choseP = document.createElement("p");
choseP.style.margin = "3px 0";
document.body.appendChild(choseP);

// ----- 게임의 승패 표시 ----------
const result = document.createElement("p");
result.style.margin = "3px 0";
result.style.fontWeight = "700";
document.body.appendChild(result);

// ----- 버튼 클릭 시 ----------
guessBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(
    Math.random() * (Number(inputNumber.value) + 1)
  );
  choseP.innerText = `You chose: ${guessNumber.value}, the machine chose: ${randomNumber}.`;
  result.innerText =
    Number(guessNumber.value) === randomNumber ? "You won!" : "You lost!";
});
