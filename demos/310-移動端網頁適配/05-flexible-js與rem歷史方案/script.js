const clientWidth = document.querySelector("#clientWidth");
const phoneScreen = document.querySelector("#phoneScreen");
const resizeButton = document.querySelector("#resizeButton");

function setRemUnit() {
  const width = Number(clientWidth.value);
  const rem = width / 10;
  const cardWidth = rem * 6;

  phoneScreen.style.width = `${width}px`;
  phoneScreen.style.setProperty("--rem-unit", `${rem}px`);
  document.querySelector("#widthOut").textContent = `${width}px`;
  document.querySelector("#remText").textContent = `1rem = docEl.clientWidth / 10 = ${width} / 10 = ${rem.toFixed(2)}px`;
  document.querySelector("#cardText").textContent = `卡片寬度是 6rem，所以目前是 ${cardWidth.toFixed(2)}px。`;
}

clientWidth.addEventListener("input", setRemUnit);
resizeButton.addEventListener("click", setRemUnit);

setRemUnit();
