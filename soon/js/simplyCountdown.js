const clockDays = document.querySelector(".days-span span:first-child");
const clockHours = document.querySelector(".hours-span span:first-child");
const clockMinutes = document.querySelector(".minutes-span span:first-child");
const clockSeconds = document.querySelector(".seconds-span span:first-child");

function Counter() {
  const targetTime = new Date("2023-06-08T00:00:00+0900");
  const currentTime = new Date();
  const time = targetTime.getTime() - currentTime.getTime();

  const d = Math.floor(time / (1000 * 60 * 60 * 24));
  const h = String(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const m = String(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const s = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, "0");

  clockDays.innerText = d;
  clockHours.innerText = h;
  clockMinutes.innerText = m;
  clockSeconds.innerText = s;
}

function init() {
  Counter();
  setInterval(Counter, 1000);
}

init();
