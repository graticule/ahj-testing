import CardWidget from "./card-widget/card-widget";
import isValid from "./validation";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const widget = new CardWidget(container);
  widget.bindToDOM();
  isValid(1789372997);
});
