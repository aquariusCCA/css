const root = document.documentElement;
const perspectiveRange = document.querySelector("#perspectiveRange");
const perspectiveValue = document.querySelector("#perspectiveValue");
const perspectiveCode = document.querySelector("#perspectiveCode");
const originSelect = document.querySelector("#originSelect");

function updateScene() {
  const perspective = `${perspectiveRange.value}px`;
  root.style.setProperty("--perspective", perspective);
  root.style.setProperty("--origin", originSelect.value);
  perspectiveValue.value = perspective;
  perspectiveCode.textContent = `perspective: ${perspective}; perspective-origin: ${originSelect.value};`;
}

perspectiveRange.addEventListener("input", updateScene);
originSelect.addEventListener("change", updateScene);
updateScene();
