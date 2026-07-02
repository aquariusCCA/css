const range = document.querySelector("#widthRange");
const output = document.querySelector("#widthOutput");
const stages = [document.querySelector("#growStage"), document.querySelector("#shrinkStage")];

function updateWidth() {
  const width = `${range.value}px`;
  output.textContent = width;
  stages.forEach((stage) => {
    stage.style.width = width;
  });
}

range.addEventListener("input", updateWidth);
updateWidth();
