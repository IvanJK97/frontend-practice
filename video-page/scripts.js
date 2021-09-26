const container = document.querySelector(".container");
const controls = document.querySelector(".controls");
const hideTab = document.querySelector(".hide");
const video = document.querySelector("video");

controls.addEventListener("click", () => {
  if (hideTab.classList.contains("moveLeft")) {
    // Pause video
    video.pause();
    hideTab.classList.remove("moveLeft");
    hideTab.classList.add("moveRight");
  } else {
    // Unpause video
    video.play();
    hideTab.classList.remove("moveRight");
    hideTab.classList.add("moveLeft");
  }
});

video.addEventListener("canplaythrough", () => {
  container.classList.remove("hidden");
});
