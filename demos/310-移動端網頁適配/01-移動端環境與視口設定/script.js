const buttons = document.querySelectorAll(".mode-button");

function setMode(mode) {
  document.body.dataset.mode = mode;
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

setMode("wide");
