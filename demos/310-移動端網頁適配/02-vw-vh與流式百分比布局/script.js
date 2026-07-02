const viewportWidth = document.querySelector("#viewportWidth");
const viewportHeight = document.querySelector("#viewportHeight");
const parentWidth = document.querySelector("#parentWidth");
const viewportBox = document.querySelector("#viewportBox");
const parentBox = document.querySelector("#parentBox");
const vwBar = document.querySelector(".vw-bar");
const vhBar = document.querySelector(".vh-bar");
const percentBar = document.querySelector(".percent-bar");

function px(value) {
  return `${Math.round(value)}px`;
}

function update() {
  const vw = Number(viewportWidth.value);
  const vh = Number(viewportHeight.value);
  const parent = Number(parentWidth.value);
  const vwSize = vw * 0.5;
  const vhSize = vh * 0.3;
  const percentSize = parent * 0.5;

  viewportBox.style.width = px(vw);
  parentBox.style.width = px(parent);
  vwBar.style.width = px(vwSize);
  vhBar.style.width = px(vhSize);
  percentBar.style.width = px(percentSize);

  document.querySelector("#viewportWidthOut").textContent = px(vw);
  document.querySelector("#viewportHeightOut").textContent = px(vh);
  document.querySelector("#parentWidthOut").textContent = px(parent);
  document.querySelector("#vwText").textContent = `50vw = ${vw} * 50% = ${px(vwSize)}，和父容器寬度無關。`;
  document.querySelector("#vhText").textContent = `30vh = ${vh} * 30% = ${px(vhSize)}，跟視口高度變化。`;
  document.querySelector("#percentText").textContent = `50% = ${parent} * 50% = ${px(percentSize)}，以父容器為基準。`;
}

[viewportWidth, viewportHeight, parentWidth].forEach((input) => {
  input.addEventListener("input", update);
});

update();
