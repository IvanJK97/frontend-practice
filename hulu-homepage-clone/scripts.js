const switcher = document.querySelector(".switcher");
const background = document.querySelector(".specials");
const page1 = document.getElementById("sports");
const page2 = document.getElementById("news");
const page3 = document.getElementById("events");
let pageState = 1; // pageState represents which background tabs user is on (can be 1, 2, or 3 above)

// https://css-tricks.com/working-with-javascript-media-queries/
// Create a condition that targets viewports <= 780x wide
const mediaQuery = window.matchMedia("(max-width: 780px)");

const handleScreenWidth = (event) => {
  // Check if the media query is true
  if (event.matches) {
    switch (pageState) {
      case 1:
        background.style.background = `url("img/live-sports/bg-small.jpg") center/cover no-repeat`;
        break;
      case 2:
        background.style.background = `url("img/breaking-news/bg-small.jpg") center/cover no-repeat`;
        break;
      case 3:
        background.style.background = `url("img/biggest-events/bg-small.jpg") center/cover no-repeat`;
        break;
    }
  } else {
    switch (pageState) {
      case 1:
        background.style.background = `url("img/live-sports/bg.jpg") center/cover no-repeat`;
        break;
      case 2:
        background.style.background = `url("img/breaking-news/bg.jpg") center/cover no-repeat`;
        break;
      case 3:
        background.style.background = `url("img/biggest-events/bg.jpg") center/cover no-repeat`;
        break;
    }
  }
};

// Register event listener
// https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
mediaQuery.addEventListener("change", handleScreenWidth);
// Initial check
handleScreenWidth(mediaQuery);

page1.addEventListener("click", () => {
  pageState = 1;
  page1.classList.add("focused");
  page2.classList.remove("focused");
  page3.classList.remove("focused");

  background.style.background = `url("img/live-sports/bg.jpg") center/cover no-repeat`;

  background.querySelector("h1").textContent = "Live Sports";
  // Have to change innerHTML to get special characters
  // https://www.w3schools.com/js/js_htmldom_html.asp
  background.querySelector(
    "h3"
  ).innerHTML = `Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA&reg;, NBA, NHL, NFL, and more.`;

  const logos = background.querySelectorAll(".logo-container");
  logos[0].innerHTML = `<img src="img/live-sports/cbs-1.png" alt="cbs" />`;
  logos[1].innerHTML = `<img src="img/live-sports/espn-2.png" alt="espn" />`;
  logos[2].innerHTML = `<img src="img/live-sports/nbcsn-3.svg" alt="nbcsn" />`;
  logos[3].innerHTML = `<img src="img/live-sports/golf-4.png" alt="nbc golf" />`;

  handleScreenWidth(mediaQuery);
});

page2.addEventListener("click", () => {
  pageState = 2;
  page2.classList.add("focused");
  page1.classList.remove("focused");
  page3.classList.remove("focused");

  background.style.background = `url("img/breaking-news/bg.jpg") center/cover no-repeat`;

  background.querySelector("h1").textContent = "Breaking News";
  background.querySelector(
    "h3"
  ).innerHTML = `Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.`;

  const logos = background.querySelectorAll(".logo-container");
  logos[0].innerHTML = `<img src="img/breaking-news/abc-1.png" alt="abc" />`;
  logos[1].innerHTML = `<img src="img/breaking-news/cnn-2.svg" alt="cnn" />`;
  logos[2].innerHTML = `<img src="img/breaking-news/msnbc-3.png" alt="msnbc" />`;
  logos[3].innerHTML = `<img src="img/breaking-news/fox-4.svg" alt="fox" />`;

  handleScreenWidth(mediaQuery);
});

page3.addEventListener("click", () => {
  pageState = 3;
  page3.classList.add("focused");
  page1.classList.remove("focused");
  page2.classList.remove("focused");

  background.style.background = `url("img/biggest-events/bg.jpg") center/cover no-repeat`;

  background.querySelector("h1").textContent = "Biggest Events";
  background.querySelector(
    "h3"
  ).innerHTML = `Spectacular, can't-miss moments like the Olympics, Grammys&reg;, Oscars&reg;, Emmys&reg;, and more.`;

  const logos = background.querySelectorAll(".logo-container");
  logos[0].innerHTML = `<img src="img/biggest-events/emmys-1.png" alt="emmys" />`;
  logos[1].innerHTML = `<img src="img/biggest-events/golden-globe-2.png" alt="golden globe" />`;
  logos[2].innerHTML = `<img src="img/biggest-events/grammy-3.png" alt="grammy" />`;
  logos[3].innerHTML = `<img src="img/biggest-events/oscars-4.png" alt="oscars" />`;

  handleScreenWidth(mediaQuery);
});
