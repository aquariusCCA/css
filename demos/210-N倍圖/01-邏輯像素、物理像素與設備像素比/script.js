const dprButtons = document.querySelectorAll(".dpr-button");
const sizeControl = document.querySelector("#sizeControl");
const sizeLabel = document.querySelector("#sizeLabel");
const cssMetric = document.querySelector("#cssMetric");
const pixelMetric = document.querySelector("#pixelMetric");
const answerMetric = document.querySelector("#answerMetric");
const answerHint = document.querySelector("#answerHint");

let currentDpr = 1;

function updateDemo() {
  const cssSize = Number(sizeControl.value);
  const actualSize = cssSize * currentDpr;

  document.documentElement.style.setProperty("--display-size", `${cssSize}px`);
  document.documentElement.style.setProperty("--pixel-columns", currentDpr);

  sizeLabel.textContent = `${cssSize}px`;
  cssMetric.textContent = `${cssSize} x ${cssSize}`;
  pixelMetric.textContent = `1 CSS px = ${currentDpr} x ${currentDpr} 物理像素`;
  answerMetric.textContent = `${actualSize} x ${actualSize} px`;

  if (currentDpr === 1) {
    answerHint.textContent = "DPR 1 時，圖片實際像素與 CSS 尺寸相同。";
  } else {
    answerHint.textContent = `DPR ${currentDpr} 時，同樣的版面尺寸需要 ${currentDpr} 倍寬高的圖片細節。`;
  }
}

dprButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentDpr = Number(button.dataset.dpr);
    dprButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    updateDemo();
  });
});

sizeControl.addEventListener("input", updateDemo);

updateDemo();
