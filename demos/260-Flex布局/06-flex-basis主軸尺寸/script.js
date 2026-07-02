const stage = document.querySelector("#stage");
const directionRule = document.querySelector("#directionRule");
const hint = document.querySelector("#hint");
const buttons = document.querySelectorAll("[data-direction]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.direction;
    stage.style.flexDirection = value;
    directionRule.textContent = `flex-direction: ${value};`;
    hint.textContent = value === "row"
      ? "主軸是水平時，flex-basis 看起來像在設定初始寬度。"
      : "主軸改成垂直時，同一個 flex-basis 會成為初始高度。";
    buttons.forEach((item) => item.classList.toggle("active", item === button));
  });
});
