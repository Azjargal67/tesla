const vehiclesLink = document.getElementById("vehicles-link");
const mainContainer = document.querySelector(".main-container");

vehiclesLink.addEventListener("mouseover", () => {
  mainContainer.style.display = "block";
});

mainContainer.addEventListener("mouseleave", () => {
  mainContainer.style.display = "none";
});

vehiclesLink.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!mainContainer.matches(":hover")) {
      mainContainer.style.display = "none";
    }
  }, 200);
});
