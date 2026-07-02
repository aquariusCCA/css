const root = document.documentElement;
const controls = {
  scaleX: document.querySelector("#scaleXRange"),
  scaleY: document.querySelector("#scaleYRange"),
  scaleZ: document.querySelector("#scaleZRange"),
  rotate: document.querySelector("#rotateRange")
};
const outputs = {
  scaleX: document.querySelector("#scaleXValue"),
  scaleY: document.querySelector("#scaleYValue"),
  scaleZ: document.querySelector("#scaleZValue"),
  rotate: document.querySelector("#rotateValue")
};
const scaleCode = document.querySelector("#scaleCode");
const orderCodeA = document.querySelector("#orderCodeA");
const orderCodeB = document.querySelector("#orderCodeB");

function updateScale() {
  const sx = Number(controls.scaleX.value).toFixed(1);
  const sy = Number(controls.scaleY.value).toFixed(1);
  const sz = controls.scaleZ.value;
  const angle = `${controls.rotate.value}deg`;
  root.style.setProperty("--scale-x", sx);
  root.style.setProperty("--scale-y", sy);
  root.style.setProperty("--scale-z", sz);
  root.style.setProperty("--rotate-y", angle);
  outputs.scaleX.value = sx;
  outputs.scaleY.value = sy;
  outputs.scaleZ.value = sz;
  outputs.rotate.value = angle;
  scaleCode.textContent = `transform: scale3d(${sx}, ${sy}, ${sz}) rotateY(${angle});`;
  orderCodeA.textContent = `transform: translateZ(100px) scaleZ(${sz}) rotateY(${angle});`;
  orderCodeB.textContent = `transform: rotateY(${angle}) scaleZ(${sz}) translateZ(100px);`;
}

Object.values(controls).forEach((control) => {
  control.addEventListener("input", updateScale);
});
updateScale();
