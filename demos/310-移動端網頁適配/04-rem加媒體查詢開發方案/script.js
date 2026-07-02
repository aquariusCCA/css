const screenWidth = document.querySelector("#screenWidth");
const screen = document.querySelector("#screen");
const modeButtons = document.querySelectorAll(".mode");
let mode = "breakpoint";

function rootByBreakpoint(width) {
  if (width >= 750) {
    return 50;
  }
  if (width >= 320) {
    return 21.33;
  }
  return 16;
}

function update() {
  const width = Number(screenWidth.value);
  const root = mode === "continuous" ? width / 15 : rootByBreakpoint(width);
  const square = root * 2;

  screen.style.width = `${width}px`;
  screen.style.setProperty("--square-size", `${square}px`);
  document.querySelector("#screenOut").textContent = `${width}px`;
  document.querySelector("#modeTitle").textContent = mode === "continuous" ? "連續 calc 模式" : "兩個斷點模式";
  document.querySelector("#rootText").textContent = `目前 1rem = ${root.toFixed(2)}px`;
  document.querySelector("#squareText").textContent = `元素 width: 2rem，所以實際寬度是 ${square.toFixed(2)}px。`;
  document.querySelector("#codeText").textContent = mode === "continuous"
    ? "html { font-size: calc(100vw / 15); }"
    : "@media (min-width: 320px) { html { font-size: 21.33px; } }\n@media (min-width: 750px) { html { font-size: 50px; } }";
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    update();
  });
});

screenWidth.addEventListener("input", update);

update();
