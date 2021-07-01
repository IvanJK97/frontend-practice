const expandIcons = document.querySelectorAll(".fa-plus-square");
const shrinkIcons = document.querySelectorAll(".fa-minus-square");

expandIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const container = icon.parentElement.parentElement;
    const answer = container.querySelector(".answer");
    const shrinkIcon = container.querySelector(".fa-minus-square");
    answer.style.height = `${calculateHeight(answer)}px`;
    icon.classList.add("hidden");
    shrinkIcon.classList.remove("hidden");
  });
});

shrinkIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const container = icon.parentElement.parentElement;
    const answer = container.querySelector(".answer");
    const expandIcon = container.querySelector(".fa-plus-square");
    answer.style.height = "0px";
    answer.style.overflow = "hidden";
    icon.classList.add("hidden");
    expandIcon.classList.remove("hidden");
  });
});

const calculateHeight = (answerElement) => {
  const separator = answerElement.querySelector(".sep");
  const paragraph = answerElement.querySelector("p");
  //   https://www.javascripttutorial.net/javascript-dom/javascript-width-height/
  //   console.log(paragraph, separator.offsetHeight, paragraph.offsetHeight);
  return separator.offsetHeight + paragraph.offsetHeight + 32; // Add 1 rem of margin for separator
};
