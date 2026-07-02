const liveDemo = document.querySelector("#live-demo");
const parentInput = document.querySelector("#parent-width");
const deductInput = document.querySelector("#deduct-width");
const parentOutput = document.querySelector("#parent-width-output");
const deductOutput = document.querySelector("#deduct-width-output");
const formulaDeduct = document.querySelector("#formula-deduct");
const formulaResult = document.querySelector("#formula-result");
const parentLabel = document.querySelector("#parent-label");
const childLabel = document.querySelector("#child-label");

function updateCalcDemo() {
  const parentWidth = Number(parentInput.value);
  const deductWidth = Number(deductInput.value);
  const childWidth = parentWidth - deductWidth;

  liveDemo.style.setProperty("--parent-width", `${parentWidth}px`);
  liveDemo.style.setProperty("--deduct", `${deductWidth}px`);

  parentOutput.value = `${parentWidth}px`;
  deductOutput.value = `${deductWidth}px`;
  formulaDeduct.textContent = `${deductWidth}px`;
  formulaResult.textContent = `${parentWidth}px - ${deductWidth}px = ${childWidth}px`;
  parentLabel.textContent = `${parentWidth}px`;
  childLabel.textContent = `${childWidth}px`;
}

parentInput.addEventListener("input", updateCalcDemo);
deductInput.addEventListener("input", updateCalcDemo);
updateCalcDemo();
