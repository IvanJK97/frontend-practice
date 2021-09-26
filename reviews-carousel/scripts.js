import reviews from "./reviews.js";

const card = document.querySelector(".card");
const [leftBtn, rightBtn] = card.querySelectorAll("i");
const randBtn = card.querySelector("button");
let currIndex = 0;

const renderCard = () => {
  const curr = reviews[currIndex];
  const profileImg = card.querySelector("img");
  const name = card.querySelector("h3");
  const jobTitle = card.querySelector("h4");
  const description = card.querySelector("p");

  profileImg.src = curr.img;
  profileImg.alt = `${curr.name}'s profile'`;
  name.textContent = curr.name;
  jobTitle.textContent = curr.job;
  description.textContent = curr.text;
};

leftBtn.addEventListener("click", () => {
  currIndex -= 1;
  if (currIndex < 0) currIndex = reviews.length - 1;

  renderCard();
});

rightBtn.addEventListener("click", () => {
  currIndex += 1;
  if (currIndex == reviews.length) currIndex = 0;

  renderCard();
});

randBtn.addEventListener("click", () => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  let randIndex = Math.floor(Math.random() * reviews.length);
  while (randIndex === currIndex)
    randIndex = Math.floor(Math.random() * reviews.length);
  console.log(randIndex);
  currIndex = randIndex;
  renderCard();
});

renderCard();
