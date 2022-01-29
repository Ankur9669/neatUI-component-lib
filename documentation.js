let alerts = document.getElementById("alerts");
let avatar = document.getElementById("avatar");
let badges = document.getElementById("badges");
let buttons = document.getElementById("buttons");
let cards = document.getElementById("cards");

//
let alertsSection = document.getElementById("alerts-section");
let avatarSection = document.getElementById("avatar-section");
let badgesSection = document.getElementById("badges-section");
let buttonsSection = document.getElementById("buttons-section");
let cardsSection = document.getElementById("cards-section");
//

let yOffset = -100;
alerts.addEventListener("click", () => {
  let y =
    alertsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
avatar.addEventListener("click", () => {
  let y =
    avatarSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
badges.addEventListener("click", () => {
  let y =
    badgesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
buttons.addEventListener("click", () => {
  let y =
    buttonsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
cards.addEventListener("click", () => {
  let y =
    cardsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});

// Function to enable scrolling
function scrollToView(offsetY) {
  window.scrollTo({ top: offsetY, behavior: "smooth" });
}
