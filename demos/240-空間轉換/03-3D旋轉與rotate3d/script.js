const root = document.documentElement;
const angleRange = document.querySelector("#angleRange");
const angleValue = document.querySelector("#angleValue");
const axisInputs = [...document.querySelectorAll("input[name='axis']")];
const codeX = document.querySelector("#codeX");
const codeY = document.querySelector("#codeY");
const codeZ = document.querySelector("#codeZ");
const codeCustom = document.querySelector("#codeCustom");

function selectedAxis() {
  return axisInputs.find((input) => input.checked).value.split(",").map((value) => value.trim());
}

function updateRotation() {
  const angle = `${angleRange.value}deg`;
  const [x, y, z] = selectedAxis();
  root.style.setProperty("--angle", angle);
  root.style.setProperty("--axis-x", x);
  root.style.setProperty("--axis-y", y);
  root.style.setProperty("--axis-z", z);
  angleValue.value = angle;
  codeX.textContent = `transform: rotateX(${angle});`;
  codeY.textContent = `transform: rotateY(${angle});`;
  codeZ.textContent = `transform: rotateZ(${angle});`;
  codeCustom.textContent = `transform: rotate3d(${x}, ${y}, ${z}, ${angle});`;
}

angleRange.addEventListener("input", updateRotation);
axisInputs.forEach((input) => input.addEventListener("change", updateRotation));
updateRotation();
