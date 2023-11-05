import CardWidget from "./card-widget/card-widget";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const widget = new CardWidget(container);
  widget.bindToDOM();
});
