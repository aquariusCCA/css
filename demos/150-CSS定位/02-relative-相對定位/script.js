const stage = document.querySelector("#stage");
const codeBox = document.querySelector("#codeBox");
const explain = document.querySelector("#explain");
const buttons = document.querySelectorAll(".shift-btn");

function render(button) {
  const x = Number(button.dataset.x);
  const y = Number(button.dataset.y);
  stage.style.setProperty("--x", `${x}px`);
  stage.style.setProperty("--y", `${y}px`);
  codeBox.textContent = `.box {
  position: relative;
  ${button.dataset.label}
}`;
  explain.textContent = x === 0 && y === 0
    ? "relative 沒有邊偏移時，看起來就像正常排列，但仍可成為 absolute 子元素的定位參照。"
    : "relative 的偏移以元素原本位置為起點；視覺位置移動，文件流中的原本空間仍然存在。";
  buttons.forEach((item) => item.classList.toggle("active", item === button));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button));
});
