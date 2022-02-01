let alerts = document.getElementById("alerts");
let avatar = document.getElementById("avatar");
let badges = document.getElementById("badges");
let buttons = document.getElementById("buttons");
let cards = document.getElementById("cards");
let images = document.getElementById("images");
let inputs = document.getElementById("inputs");
let typography = document.getElementById("typography");
let lists = document.getElementById("lists");
let modal = document.getElementById("modal");
let toast = document.getElementById("toast");
let grid = document.getElementById("grid");
let ratingBar = document.getElementById("rating-bar");

//
let alertsSection = document.getElementById("alerts-section");
let avatarSection = document.getElementById("avatar-section");
let badgesSection = document.getElementById("badges-section");
let buttonsSection = document.getElementById("buttons-section");
let cardsSection = document.getElementById("cards-section");
let imageSection = document.getElementById("images-section");
let inputSection = document.getElementById("input-section");
let typographySection = document.getElementById("typography-section");
let listsSection = document.getElementById("lists-section");
let modalSection = document.getElementById("modal-section");
let toastSection = document.getElementById("toast-section");
let gridSection = document.getElementById("grid-section");
let ratingBarSection = document.getElementById("rating-bar-section");
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
images.addEventListener("click", () => {
  let y =
    imageSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
inputs.addEventListener("click", () => {
  let y =
    inputSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
typography.addEventListener("click", () => {
  let y =
    typographySection.getBoundingClientRect().top +
    window.pageYOffset +
    yOffset;
  scrollToView(y);
});
lists.addEventListener("click", () => {
  let y =
    listsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
modal.addEventListener("click", () => {
  let y =
    modalSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
toast.addEventListener("click", () => {
  let y =
    toastSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
grid.addEventListener("click", () => {
  let y =
    gridSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
ratingBar.addEventListener("click", () => {
  let y =
    ratingBarSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  scrollToView(y);
});
// Function to enable scrolling
function scrollToView(offsetY) {
  window.scrollTo({ top: offsetY, behavior: "smooth" });
}
