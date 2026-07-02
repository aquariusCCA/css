const data = {
  block: {
    line: "是",
    size: "是",
  },
  inline: {
    line: "否",
    size: "寬高不明顯",
  },
  "inline-block": {
    line: "否",
    size: "是",
  },
};

const buttons = document.querySelectorAll(".mode-button");
const current = document.querySelector("#current-display");
const line = document.querySelector("#line-behavior");
const size = document.querySelector("#size-behavior");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.display;
    document.body.dataset.display = value;
    buttons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    current.textContent = value;
    line.textContent = data[value].line;
    size.textContent = data[value].size;
  });
});
