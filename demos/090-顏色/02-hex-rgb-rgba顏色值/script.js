const ranges = {
  red: document.querySelector("#redRange"),
  green: document.querySelector("#greenRange"),
  blue: document.querySelector("#blueRange"),
  alpha: document.querySelector("#alphaRange")
};

const outputs = {
  red: document.querySelector("#redValue"),
  green: document.querySelector("#greenValue"),
  blue: document.querySelector("#blueValue"),
  alpha: document.querySelector("#alphaValue")
};

const previewLabel = document.querySelector("#previewLabel");
const cssCode = document.querySelector("#cssCode");
const hexButtons = document.querySelectorAll(".hex-button");
const hexResult = document.querySelector("#hexResult");

function toHex(value) {
  return Number(value).toString(16).padStart(2, "0");
}

function updateColor() {
  const red = Number(ranges.red.value);
  const green = Number(ranges.green.value);
  const blue = Number(ranges.blue.value);
  const alpha = Number(ranges.alpha.value);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(2)})`;
  const modern = `rgb(${red} ${green} ${blue} / ${Math.round(alpha * 100)}%)`;
  const hex = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;

  outputs.red.textContent = red;
  outputs.green.textContent = green;
  outputs.blue.textContent = blue;
  outputs.alpha.textContent = alpha.toFixed(2);
  previewLabel.textContent = rgb;
  document.documentElement.style.setProperty("--rgb-color", rgb);
  document.documentElement.style.setProperty("--rgba-color", rgba);
  cssCode.textContent = `.box {
  background-color: ${rgb};
}

.same-color-in-hex {
  background-color: ${hex};
}

.overlay {
  background-color: ${modern};
}`;
}

function shortHex(hex) {
  const clean = hex.replace("#", "").toLowerCase();
  const canShorten = clean.length === 6 && clean[0] === clean[1] && clean[2] === clean[3] && clean[4] === clean[5];
  return canShorten ? `#${clean[0]}${clean[2]}${clean[4]}` : "";
}

function renderHex(hex) {
  const short = shortHex(hex);
  hexButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.hex === hex));
  hexResult.textContent = short
    ? `${hex} 可以簡寫成 ${short}，兩者表示同一個顏色。`
    : `${hex} 不能簡寫，因為 RR、GG、BB 並非每組都重複。`;
}

Object.values(ranges).forEach((range) => range.addEventListener("input", updateColor));
hexButtons.forEach((button) => button.addEventListener("click", () => renderHex(button.dataset.hex)));

updateColor();
renderHex("#aabbcc");
