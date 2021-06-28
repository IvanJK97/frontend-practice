document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.querySelector(".burger-icon");
  const closeIcon = document.querySelector(".close-icon");
  const sideDrawer = document.querySelector(".side-drawer");

  burgerIcon.addEventListener("click", () => {
    sideDrawer.classList.toggle("hidden"); // Show side drawer
    closeIcon.classList.toggle("hidden"); // Show close icon
    burgerIcon.classList.toggle("hidden"); // Hide burger icon
  });

  closeIcon.addEventListener("click", () => {
    sideDrawer.classList.toggle("hidden"); // Hide side drawer
    closeIcon.classList.toggle("hidden"); // Hide close icon
    burgerIcon.classList.toggle("hidden"); // Show burger icon
  });
});
