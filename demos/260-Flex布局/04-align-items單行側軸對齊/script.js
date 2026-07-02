const buttons = document.querySelectorAll("[data-value]");
const stages = [document.querySelector("#autoStage"), document.querySelector("#fixedStage")];
const rule = document.querySelector("#rule");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    stages.forEach((stage) => {
      stage.style.alignItems = value;
    });
    rule.textContent = `align-items: ${value};`;
    buttons.forEach((item) => item.classList.toggle("active", item === button));
  });
});
