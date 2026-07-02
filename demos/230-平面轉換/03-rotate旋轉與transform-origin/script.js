const angleButtons = document.querySelectorAll("[data-angle]");
const originButtons = document.querySelectorAll("[data-origin]");
const fixedBox = document.querySelector("[data-fixed-box]");
const liveBox = document.querySelector("[data-live-box]");
const originMarker = document.querySelector("[data-origin-marker]");
const statusOutput = document.querySelector("[data-status]");

let currentAngle = "45deg";
let currentOrigin = "center";

function setActive(buttons, activeButton) {
  buttons.forEach((button) => button.classList.toggle("is-active", button === activeButton));
}

function markerPosition(origin) {
  if (origin === "left top") {
    return { left: "calc(50% - 45px)", top: "calc(50% - 45px)" };
  }

  if (origin === "right bottom") {
    return { left: "calc(50% + 45px)", top: "calc(50% + 45px)" };
  }

  return { left: "50%", top: "50%" };
}

function render() {
  fixedBox.style.transform = `rotate(${currentAngle})`;
  liveBox.style.transform = `rotate(${currentAngle})`;
  liveBox.style.transformOrigin = currentOrigin;
  const position = markerPosition(currentOrigin);
  originMarker.style.left = position.left;
  originMarker.style.top = position.top;
  statusOutput.textContent = `目前設定：rotate(${currentAngle})，transform-origin: ${currentOrigin}`;
}

angleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentAngle = button.dataset.angle;
    setActive(angleButtons, button);
    render();
  });
});

originButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentOrigin = button.dataset.origin;
    setActive(originButtons, button);
    render();
  });
});

render();
