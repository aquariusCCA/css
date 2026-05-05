const root = document.documentElement;

const controls = {
  cardWidth: document.querySelector("#cardWidth"),
  cardHeight: document.querySelector("#cardHeight"),
  radius: document.querySelector("#radius"),
  cardBg: document.querySelector("#cardBg"),
  offsetX: document.querySelector("#offsetX"),
  offsetY: document.querySelector("#offsetY"),
  blur: document.querySelector("#blur"),
  spread: document.querySelector("#spread"),
  shadowColor: document.querySelector("#shadowColor"),
  opacity: document.querySelector("#opacity"),
  inset: document.querySelector("#inset"),
  multiLayer: document.querySelector("#multiLayer"),
  hoverShadow: document.querySelector("#hoverShadow"),
  clipShadow: document.querySelector("#clipShadow")
};

const outputs = {
  cardWidth: document.querySelector("#cardWidthValue"),
  cardHeight: document.querySelector("#cardHeightValue"),
  radius: document.querySelector("#radiusValue"),
  cardBg: document.querySelector("#cardBgValue"),
  offsetX: document.querySelector("#offsetXValue"),
  offsetY: document.querySelector("#offsetYValue"),
  blur: document.querySelector("#blurValue"),
  spread: document.querySelector("#spreadValue"),
  shadowColor: document.querySelector("#shadowColorValue"),
  opacity: document.querySelector("#opacityValue")
};

const previewFrame = document.querySelector("#previewFrame");
const previewColumn = document.querySelector(".preview-column");
const shadowCard = document.querySelector("#shadowCard");
const cssOutput = document.querySelector("#cssOutput");
const layoutSize = document.querySelector("#layoutSize");
const shadowSpreadInfo = document.querySelector("#shadowSpreadInfo");

const presets = {
  soft: {
    cardWidth: 320,
    cardHeight: 210,
    radius: 24,
    cardBg: "#ffffff",
    offsetX: 0,
    offsetY: 18,
    blur: 36,
    spread: -14,
    shadowColor: "#0f172a",
    opacity: 0.24,
    inset: false,
    multiLayer: true,
    hoverShadow: true
  },
  floating: {
    cardWidth: 340,
    cardHeight: 220,
    radius: 28,
    cardBg: "#ffffff",
    offsetX: 16,
    offsetY: 24,
    blur: 46,
    spread: -12,
    shadowColor: "#475569",
    opacity: 0.32,
    inset: false,
    multiLayer: true,
    hoverShadow: true
  },
  inset: {
    cardWidth: 320,
    cardHeight: 210,
    radius: 26,
    cardBg: "#e2e8f0",
    offsetX: 8,
    offsetY: 8,
    blur: 22,
    spread: -4,
    shadowColor: "#0f172a",
    opacity: 0.28,
    inset: true,
    multiLayer: false,
    hoverShadow: false
  },
  glow: {
    cardWidth: 320,
    cardHeight: 210,
    radius: 28,
    cardBg: "#ffffff",
    offsetX: 0,
    offsetY: 0,
    blur: 42,
    spread: 8,
    shadowColor: "#60a5fa",
    opacity: 0.52,
    inset: false,
    multiLayer: false,
    hoverShadow: true
  },
  hard: {
    cardWidth: 310,
    cardHeight: 200,
    radius: 12,
    cardBg: "#ffffff",
    offsetX: 14,
    offsetY: 14,
    blur: 0,
    spread: 0,
    shadowColor: "#111827",
    opacity: 0.58,
    inset: false,
    multiLayer: false,
    hoverShadow: true
  },
  flat: {
    cardWidth: 320,
    cardHeight: 210,
    radius: 16,
    cardBg: "#ffffff",
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    spread: 0,
    shadowColor: "#0f172a",
    opacity: 0,
    inset: false,
    multiLayer: false,
    hoverShadow: false
  }
};

function hexToRgb(hex) {
  const normalizedHex = hex.replace("#", "");

  if (normalizedHex.length !== 6) {
    return { r: 0, g: 0, b: 0 };
  }

  return {
    r: parseInt(normalizedHex.slice(0, 2), 16),
    g: parseInt(normalizedHex.slice(2, 4), 16),
    b: parseInt(normalizedHex.slice(4, 6), 16)
  };
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${Number(alpha).toFixed(2)})`;
}

function px(value) {
  return `${Number(value)}px`;
}

function getState() {
  return {
    cardWidth: Number(controls.cardWidth.value),
    cardHeight: Number(controls.cardHeight.value),
    radius: Number(controls.radius.value),
    cardBg: controls.cardBg.value,
    offsetX: Number(controls.offsetX.value),
    offsetY: Number(controls.offsetY.value),
    blur: Number(controls.blur.value),
    spread: Number(controls.spread.value),
    shadowColor: controls.shadowColor.value,
    opacity: Number(controls.opacity.value),
    inset: controls.inset.checked,
    multiLayer: controls.multiLayer.checked,
    hoverShadow: controls.hoverShadow.checked,
    clipShadow: controls.clipShadow.checked
  };
}

function createSingleShadow(state, overrides = {}) {
  const merged = { ...state, ...overrides };
  const insetKeyword = merged.inset ? "inset " : "";
  return `${insetKeyword}${px(merged.offsetX)} ${px(merged.offsetY)} ${px(merged.blur)} ${px(merged.spread)} ${rgba(merged.shadowColor, merged.opacity)}`;
}

function createShadowValue(state) {
  const firstLayer = createSingleShadow(state);

  if (state.inset || !state.multiLayer || state.opacity === 0) {
    return firstLayer;
  }

  const secondLayer = createSingleShadow(state, {
    offsetX: Math.round(state.offsetX * 0.45),
    offsetY: Math.round(state.offsetY * 0.45),
    blur: Math.max(0, Math.round(state.blur * 0.45)),
    spread: Math.round(state.spread * 0.45),
    opacity: Math.max(0, state.opacity - 0.1)
  });

  return `${firstLayer},\n  ${secondLayer}`;
}

function createHoverShadowValue(state) {
  if (state.inset || state.opacity === 0) {
    return createShadowValue(state);
  }

  const hoverState = {
    ...state,
    offsetX: Math.round(state.offsetX * 1.25),
    offsetY: Math.round(state.offsetY * 1.35 + 4),
    blur: Math.min(110, state.blur + 14),
    spread: state.spread + 2,
    opacity: Math.min(1, state.opacity + 0.08)
  };

  return createShadowValue(hoverState);
}

function updateOutputs(state) {
  outputs.cardWidth.textContent = `${state.cardWidth}px`;
  outputs.cardHeight.textContent = `${state.cardHeight}px`;
  outputs.radius.textContent = `${state.radius}px`;
  outputs.cardBg.textContent = state.cardBg;
  outputs.offsetX.textContent = `${state.offsetX}px`;
  outputs.offsetY.textContent = `${state.offsetY}px`;
  outputs.blur.textContent = `${state.blur}px`;
  outputs.spread.textContent = `${state.spread}px`;
  outputs.shadowColor.textContent = state.shadowColor;
  outputs.opacity.textContent = state.opacity.toFixed(2);
}

function estimateVisualExtension(state) {
  if (state.inset || state.opacity === 0) {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }

  const spreadAndBlur = Math.max(0, state.blur + state.spread);

  return {
    top: Math.max(0, -state.offsetY + spreadAndBlur),
    right: Math.max(0, state.offsetX + spreadAndBlur),
    bottom: Math.max(0, state.offsetY + spreadAndBlur),
    left: Math.max(0, -state.offsetX + spreadAndBlur)
  };
}

function createCssCode(state, shadowValue, hoverShadowValue) {
  const lines = [
    `.demo-card {`,
    `  width: ${state.cardWidth}px;`,
    `  height: ${state.cardHeight}px;`,
    `  border-radius: ${state.radius}px;`,
    `  background: ${state.cardBg};`,
    `  box-shadow: ${shadowValue};`,
    `}`
  ];

  if (state.hoverShadow) {
    lines.push(
      ``,
      `.demo-card:hover {`,
      `  transform: translateY(-4px);`,
      `  box-shadow: ${hoverShadowValue};`,
      `}`
    );
  }

  if (state.clipShadow) {
    lines.push(
      ``,
      `.parent {`,
      `  overflow: hidden;`,
      `}`
    );
  }

  return lines.join("\n");
}

function updateView() {
  const state = getState();
  const shadowValue = createShadowValue(state);
  const hoverShadowValue = createHoverShadowValue(state);

  root.style.setProperty("--card-width", `${state.cardWidth}px`);
  root.style.setProperty("--card-height", `${state.cardHeight}px`);
  root.style.setProperty("--card-radius", `${state.radius}px`);
  root.style.setProperty("--card-bg", state.cardBg);
  root.style.setProperty("--shadow-value", shadowValue);
  root.style.setProperty("--hover-shadow-value", hoverShadowValue);

  previewColumn.classList.toggle("enable-hover", state.hoverShadow);
  previewFrame.classList.toggle("clip-shadow", state.clipShadow);

  updateOutputs(state);

  const rect = shadowCard.getBoundingClientRect();
  layoutSize.textContent = `${Math.round(rect.width)}px × ${Math.round(rect.height)}px`;

  const extension = estimateVisualExtension(state);
  shadowSpreadInfo.textContent =
    `top ${Math.round(extension.top)}px / right ${Math.round(extension.right)}px / ` +
    `bottom ${Math.round(extension.bottom)}px / left ${Math.round(extension.left)}px`;

  cssOutput.textContent = createCssCode(state, shadowValue, hoverShadowValue);
}

function setControlValue(key, value) {
  const control = controls[key];

  if (!control) {
    return;
  }

  if (control.type === "checkbox") {
    control.checked = Boolean(value);
  } else {
    control.value = value;
  }
}

function applyPreset(presetName) {
  const preset = presets[presetName];

  if (!preset) {
    return;
  }

  Object.entries(preset).forEach(([key, value]) => {
    setControlValue(key, value);
  });

  updateView();
}

Object.values(controls).forEach((control) => {
  control.addEventListener("input", updateView);
  control.addEventListener("change", updateView);
});

document.querySelectorAll("[data-preset]").forEach((button) => {
  button.addEventListener("click", () => {
    applyPreset(button.dataset.preset);
  });
});

window.addEventListener("resize", updateView);

updateView();
