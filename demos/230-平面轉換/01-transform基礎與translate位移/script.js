const translateButton = document.querySelector("[data-toggle-translate]");
const movingBox = document.querySelector("[data-moving-box]");
const sizeRange = document.querySelector("[data-size-range]");
const sizeOutput = document.querySelector("[data-size-output]");
const percentBox = document.querySelector("[data-percent-box]");

translateButton.addEventListener("click", () => {
  const isActive = movingBox.classList.toggle("is-translated");
  translateButton.setAttribute("aria-pressed", String(isActive));
  translateButton.textContent = isActive ? "移除 translate" : "套用 translate(30px, 30px)";
});

function updatePercentBox() {
  const width = Number(sizeRange.value);
  const height = Math.round(width * 0.75);
  percentBox.style.width = `${width}px`;
  percentBox.style.height = `${height}px`;
  sizeOutput.textContent = `${width}px x ${height}px，位移 ${Math.round(width / 2)}px / ${Math.round(height / 2)}px`;
}

sizeRange.addEventListener("input", updatePercentBox);
updatePercentBox();
