const layoutDemo = document.querySelector("#layout-demo");
const modeTitle = document.querySelector("#mode-title");
const modeCode = document.querySelector("#mode-code");
const guideToggle = document.querySelector("#show-guides");
const buttons = document.querySelectorAll("[data-mode]");

const modes = {
  grid: {
    title: "display: grid",
    code: "display: grid; grid-template-columns: repeat(3, 1fr);"
  },
  flex: {
    title: "display: flex",
    code: "display: flex; flex-wrap: wrap; /* 沿著一條主軸排列 */"
  },
  "inline-grid": {
    title: "display: inline-grid",
    code: "display: inline-grid; grid-template-columns: repeat(3, 1fr);"
  }
};

function setMode(mode) {
  layoutDemo.classList.remove("mode-grid", "mode-flex", "mode-inline-grid");
  layoutDemo.classList.add(`mode-${mode}`);
  modeTitle.textContent = modes[mode].title;
  modeCode.textContent = modes[mode].code;

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

guideToggle.addEventListener("change", () => {
  layoutDemo.classList.toggle("show-guides", guideToggle.checked);
});
