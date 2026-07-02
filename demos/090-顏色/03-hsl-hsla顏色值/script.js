const controls = {
  hue: document.querySelector("#hueRange"),
  sat: document.querySelector("#satRange"),
  light: document.querySelector("#lightRange"),
  alpha: document.querySelector("#alphaRange")
};

const values = {
  hue: document.querySelector("#hueValue"),
  sat: document.querySelector("#satValue"),
  light: document.querySelector("#lightValue"),
  alpha: document.querySelector("#alphaValue")
};

const hslLabel = document.querySelector("#hslLabel");
const cssCode = document.querySelector("#cssCode");

function updateHsl() {
  const hue = Number(controls.hue.value);
  const sat = Number(controls.sat.value);
  const light = Number(controls.light.value);
  const alpha = Number(controls.alpha.value);
  const hsl = `hsl(${hue} ${sat}% ${light}%)`;
  const hsla = `hsl(${hue} ${sat}% ${light}% / ${Math.round(alpha * 100)}%)`;
  const hoverLight = Math.min(light + 10, 100);

  values.hue.textContent = hue;
  values.sat.textContent = `${sat}%`;
  values.light.textContent = `${light}%`;
  values.alpha.textContent = alpha.toFixed(2);
  document.documentElement.style.setProperty("--hue", hue);
  document.documentElement.style.setProperty("--sat", `${sat}%`);
  document.documentElement.style.setProperty("--light", `${light}%`);
  document.documentElement.style.setProperty("--alpha", alpha);
  hslLabel.textContent = hsla;
  cssCode.textContent = `.box {
  background-color: ${hsl};
}

.overlay {
  background-color: ${hsla};
}

.button:hover {
  background-color: hsl(${hue} ${sat}% ${hoverLight}%);
}`;
}

Object.values(controls).forEach((control) => control.addEventListener("input", updateHsl));

updateHsl();
