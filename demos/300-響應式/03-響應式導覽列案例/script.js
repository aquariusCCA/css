const viewportRange = document.querySelector("#viewportRange");
const viewport = document.querySelector("#viewport");
const widthValue = document.querySelector("#widthValue");
const modeLabel = document.querySelector("#modeLabel");
const containerLabel = document.querySelector("#containerLabel");
const itemLabel = document.querySelector("#itemLabel");
const buttons = document.querySelectorAll("[data-width]");

let mobileItemWidth = "33.33";

function updateDemo() {
  const width = Number(viewportRange.value);
  const isMobile = width <= 767;

  viewport.style.setProperty("--demo-width", `${width}px`);
  viewport.style.setProperty("--item-mobile-width", `${mobileItemWidth}%`);
  viewport.classList.toggle("mobile", isMobile);
  widthValue.textContent = width;

  if (isMobile) {
    modeLabel.textContent = "手機版";
    containerLabel.textContent = ".container width: 100%";
    itemLabel.textContent = `li width: ${mobileItemWidth}%`;
  } else {
    modeLabel.textContent = "桌面版";
    containerLabel.textContent = ".container width: 750px";
    itemLabel.textContent = "li width: 93.75px";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    mobileItemWidth = button.dataset.width;
    buttons.forEach((item) => item.classList.toggle("active", item === button));
    updateDemo();
  });
});

viewportRange.addEventListener("input", updateDemo);
updateDemo();
