import reviews from "./reviews.js";

const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const randomBtn = document.getElementById("random-btn");
const profileImg = document.getElementById("profile-img");
const profileName = document.getElementById("name");
const jobTitle = document.getElementById("job-title");
const description = document.getElementById("description");

let currIndex = 0;

leftBtn.addEventListener("click", () => {
  currIndex -= 1;
  if (currIndex < 0) {
    currIndex = reviews.length - 1; // Wrap around
  }
  renderReview(currIndex);
});

rightBtn.addEventListener("click", () => {
  currIndex += 1;
  if (currIndex === reviews.length) {
    currIndex = 0; // Wrap around
  }
  renderReview(currIndex);
});

randomBtn.addEventListener("click", () => {
  currIndex = Math.floor(Math.random() * reviews.length);
  renderReview(currIndex);
});

const renderReview = (index) => {
  profileImg.src = reviews[index].img;
  profileName.textContent = reviews[index].name;
  jobTitle.textContent = reviews[index].job;
  description.textContent = reviews[index].text;
};

renderReview(currIndex);
