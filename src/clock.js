const clockCotainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  const hoursExpression = hours < 10 ? `0${hours}` : hours;
  const minutesExpression = minutes < 10 ? `0${minutes}` : minutes;
  const secondsExpression = seconds < 10 ? `0${seconds}` : seconds;
  clockTitle.innerText = `${hoursExpression}:${minutesExpression}:${secondsExpression}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
