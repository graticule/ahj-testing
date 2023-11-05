import CardWidget from "./card-widget/card-widget";
import isValid from "./validation";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const widget = new CardWidget(container);
  widget.bindToDOM();
  const input = document.querySelector(".card-widget__input");
  input.addEventListener("focus", () => {
    input.classList.remove("correct");
    input.classList.remove("wrong");
    const active = document.querySelector(".type_active");
    if (active) active.classList.remove("type_active");

  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".card-widget__button")) {
      e.preventDefault();
      const { result, type } = isValid(input.value.trim());
      if (result) {
        input.classList.add("correct");
        input.classList.remove("wrong");
        if(type) {
          document.querySelector(`.type_${type}`).classList.add("type_active");
        }
      } else {
        input.classList.remove("correct");
        input.classList.add("wrong");
      }
    }
  });
});
