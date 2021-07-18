import { months, weekdays } from "./constants.js";

const currentDate = new Date();
const weekInMS = 7 * 24 * 60 * 60 * 1000;
const futureDate = new Date(currentDate.getTime() + weekInMS);

// Change text of when giveaway ends
const endingDateText = document.getElementById("ending-date");
endingDateText.textContent += ` ${
  weekdays[futureDate.getDay()]
}, ${futureDate.getDate()} ${months[futureDate.getMonth()]}`;
endingDateText.textContent += ` ${futureDate.getHours() % 12}:${futureDate
  .getMinutes()
  .toString()
  .padStart(2, "0")}${Math.floor(futureDate.getHours() / 12) ? "pm" : "am"}`;

// Setup countdown that updates every second
const daysBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minsBox = document.getElementById("mins");
const secsBox = document.getElementById("secs");

const renderCountdown = (futureDate) => {
  const currDateMS = new Date().getTime();
  const futureDateMS = futureDate.getTime();

  if (currDateMS >= futureDateMS) {
    const timer = document.querySelector(".timer");
    timer.innerHTML = `<h3>Sorry, giveaway has expired.</h3>`;
    clearInterval(interval);
    return;
  }

  const msInSec = 1000;
  const msInMin = 60 * msInSec;
  const msInHour = 60 * msInMin;
  const msInDay = 24 * msInHour;

  // Divide and mod by largest first (find out how many days, then hours, then minutes, and seconds are left)
  let msDiff = futureDateMS - currDateMS;
  const daysLeft = Math.floor(msDiff / msInDay);
  msDiff = msDiff % msInDay;
  const hoursLeft = Math.floor(msDiff / msInHour);
  msDiff = msDiff % msInHour;
  const minsLeft = Math.floor(msDiff / msInMin);
  msDiff = msDiff % msInMin;
  const secsLeft = Math.floor(msDiff / msInSec);
  msDiff = msDiff % msInSec;

  //   console.log(daysLeft, hoursLeft, minsLeft, secsLeft);
  daysBox.textContent = daysLeft.toString().padStart(2, "0");
  hoursBox.textContent = hoursLeft.toString().padStart(2, "0");
  minsBox.textContent = minsLeft.toString().padStart(2, "0");
  secsBox.textContent = secsLeft.toString().padStart(2, "0");
};

renderCountdown(futureDate);
let interval = setInterval(() => renderCountdown(futureDate), 1000);
