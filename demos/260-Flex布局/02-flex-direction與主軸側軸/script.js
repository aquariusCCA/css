const descriptions = {
  row: ["水平，由左到右", "垂直，由上到下"],
  "row-reverse": ["水平，由右到左", "垂直，由上到下"],
  column: ["垂直，由上到下", "水平，由左到右"],
  "column-reverse": ["垂直，由下到上", "水平，由左到右"]
};

const stage = document.querySelector("#stage");
const rule = document.querySelector("#rule");
const mainAxis = document.querySelector("#mainAxis");
const crossAxis = document.querySelector("#crossAxis");
const buttons = document.querySelectorAll("[data-direction]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.direction;
    stage.style.flexDirection = value;
    rule.textContent = `flex-direction: ${value};`;
    mainAxis.textContent = descriptions[value][0];
    crossAxis.textContent = descriptions[value][1];
    buttons.forEach((item) => item.classList.toggle("active", item === button));
  });
});
