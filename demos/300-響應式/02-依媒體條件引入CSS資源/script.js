const viewportRange = document.querySelector("#viewportRange");
const viewport = document.querySelector("#viewport");
const demoLayout = document.querySelector("#demoLayout");
const widthValue = document.querySelector("#widthValue");
const layoutLabel = document.querySelector("#layoutLabel");
const resultLabel = document.querySelector("#resultLabel");
const style320 = document.querySelector("#style320");
const style640 = document.querySelector("#style640");

function updateDemo() {
  const width = Number(viewportRange.value);
  const has320 = width >= 320;
  const has640 = width >= 640;

  viewport.style.setProperty("--demo-width", `${width}px`);
  widthValue.textContent = width;
  style320.classList.toggle("active", has320);
  style640.classList.toggle("active", has640);
  demoLayout.classList.toggle("wide", has640);

  if (!has320) {
    layoutLabel.textContent = "尚未符合 style320.css";
    resultLabel.textContent = "未套用範例 stylesheet";
  } else if (has640) {
    layoutLabel.textContent = "style320.css + style640.css";
    resultLabel.textContent = "兩欄排列";
  } else {
    layoutLabel.textContent = "style320.css";
    resultLabel.textContent = "一欄排列";
  }
}

viewportRange.addEventListener("input", updateDemo);
updateDemo();
