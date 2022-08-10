// by GINK-SS
const clockTitle = document.querySelector(".js-clock");

function dDay() {
  const ONEDAY = 1000 * 60 * 60 * 24;
  const thisYear = new Date().getFullYear();
  const today = new Date().getTime();
  const xMasDate = new Date(`${thisYear}-12-25`).getTime();

  //----- 차이를 각 일, 시, 분, 초로 나눔 ----------
  const diff = xMasDate - today;
  const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  //----- 올해 크리스마스를 기준으로 지났는지 혹은 당일인지 확인하고 그렇지 않으면 dDay 출력 ----------
  clockTitle.innerText =
    diff <= -ONEDAY
      ? "Christmas is over this year."
      : diff > -ONEDAY && diff <= 0
      ? "Today is Christmas!"
      : `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

dDay();
setInterval(dDay, 1000);
