const root = document.documentElement;
const stage = document.querySelector("#stage");
const ranges = {
  x: document.querySelector("#xRange"),
  y: document.querySelector("#yRange"),
  z: document.querySelector("#zRange")
};
const outputs = {
  x: document.querySelector("#xValue"),
  y: document.querySelector("#yValue"),
  z: document.querySelector("#zValue")
};
const perspectiveToggle = document.querySelector("#perspectiveToggle");
const codeReadout = document.querySelector("#codeReadout");

function updateTranslate() {
  const x = `${ranges.x.value}px`;
  const y = `${ranges.y.value}px`;
  const z = `${ranges.z.value}px`;
  root.style.setProperty("--x", x);
  root.style.setProperty("--y", y);
  root.style.setProperty("--z", z);
  outputs.x.value = x;
  outputs.y.value = y;
  outputs.z.value = z;
  stage.classList.toggle("no-perspective", !perspectiveToggle.checked);
  codeReadout.textContent = `.scene { perspective: ${perspectiveToggle.checked ? "900px" : "none"}; }\n.box { transform: translate3d(${x}, ${y}, ${z}); }`;
}

Object.values(ranges).forEach((range) => {
  range.addEventListener("input", updateTranslate);
});
perspectiveToggle.addEventListener("change", updateTranslate);
updateTranslate();
