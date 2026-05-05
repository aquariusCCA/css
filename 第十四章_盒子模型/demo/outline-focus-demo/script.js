const root = document.documentElement;

const controls = {
  outlineWidth: document.querySelector("#outlineWidth"),
  outlineOffset: document.querySelector("#outlineOffset"),
  focusRadius: document.querySelector("#focusRadius"),
  outlineStyle: document.querySelector("#outlineStyle"),
  outlineColor: document.querySelector("#outlineColor"),
  useBorderFocus: document.querySelector("#useBorderFocus"),
  removeFocus: document.querySelector("#removeFocus")
};

const outputs = {
  outlineWidth: document.querySelector("#outlineWidthValue"),
  outlineOffset: document.querySelector("#outlineOffsetValue"),
  focusRadius: document.querySelector("#focusRadiusValue"),
  outlineColor: document.querySelector("#outlineColorValue")
};

const focusModeInputs = [...document.querySelectorAll("input[name='focusMode']")];
const borderBox = document.querySelector("#borderBox");
const outlineBox = document.querySelector("#outlineBox");
const borderSize = document.querySelector("#borderSize");
const outlineSize = document.querySelector("#outlineSize");
const cssOutput = document.querySelector("#cssOutput");
const focusStatus = document.querySelector("#focusStatus");
const focusTargets = [...document.querySelectorAll(".focus-target")];
const presetButtons = [...document.querySelectorAll(".preset-btn")];

const presets = {
  accessible: {
    outlineWidth: 4,
    outlineOffset: 4,
    focusRadius: 12,
    outlineStyle: "solid",
    outlineColor: "#2563eb",
    focusMode: "visible",
    useBorderFocus: false,
    removeFocus: false
  },
  keyboardOnly: {
    outlineWidth: 3,
    outlineOffset: 3,
    focusRadius: 10,
    outlineStyle: "solid",
    outlineColor: "#7c3aed",
    focusMode: "visible",
    useBorderFocus: false,
    removeFocus: false
  },
  inner: {
    outlineWidth: 4,
    outlineOffset: -4,
    focusRadius: 10,
    outlineStyle: "dashed",
    outlineColor: "#0f766e",
    focusMode: "focus",
    useBorderFocus: false,
    removeFocus: false
  },
  warning: {
    outlineWidth: 5,
    outlineOffset: 5,
    focusRadius: 12,
    outlineStyle: "double",
    outlineColor: "#d97706",
    focusMode: "visible",
    useBorderFocus: false,
    removeFocus: false
  },
  danger: {
    outlineWidth: 4,
    outlineOffset: 4,
    focusRadius: 12,
    outlineStyle: "solid",
    outlineColor: "#dc2626",
    focusMode: "focus",
    useBorderFocus: false,
    removeFocus: true
  }
};

function px(value) {
  return `${Number(value)}px`;
}

function getFocusMode() {
  return focusModeInputs.find((input) => input.checked)?.value ?? "visible";
}

function getState() {
  return {
    outlineWidth: Number(controls.outlineWidth.value),
    outlineOffset: Number(controls.outlineOffset.value),
    focusRadius: Number(controls.focusRadius.value),
    outlineStyle: controls.outlineStyle.value,
    outlineColor: controls.outlineColor.value,
    focusMode: getFocusMode(),
    useBorderFocus: controls.useBorderFocus.checked,
    removeFocus: controls.removeFocus.checked
  };
}

function setFocusMode(value) {
  focusModeInputs.forEach((input) => {
    input.checked = input.value === value;
  });
}

function setControlValue(name, value) {
  if (typeof controls[name]?.checked === "boolean") {
    controls[name].checked = Boolean(value);
    return;
  }

  if (controls[name]) {
    controls[name].value = value;
  }
}

function applyPreset(name) {
  const preset = presets[name];

  if (!preset) {
    return;
  }

  Object.entries(preset).forEach(([key, value]) => {
    if (key === "focusMode") {
      setFocusMode(value);
      return;
    }

    setControlValue(key, value);
  });

  updateDemo();
}

function applyStateToCss(state) {
  root.style.setProperty("--outline-width", px(state.outlineWidth));
  root.style.setProperty("--outline-offset", px(state.outlineOffset));
  root.style.setProperty("--outline-radius", px(state.focusRadius));
  root.style.setProperty("--outline-style", state.outlineStyle);
  root.style.setProperty("--outline-color", state.outlineColor);

  document.body.classList.toggle("focus-mode-visible", state.focusMode === "visible");
  document.body.classList.toggle("focus-mode-focus", state.focusMode === "focus");
  document.body.classList.toggle("use-border-focus", state.useBorderFocus);
  document.body.classList.toggle("remove-focus", state.removeFocus);
}

function updateOutputs(state) {
  outputs.outlineWidth.textContent = px(state.outlineWidth);
  outputs.outlineOffset.textContent = px(state.outlineOffset);
  outputs.focusRadius.textContent = px(state.focusRadius);
  outputs.outlineColor.textContent = state.outlineColor;
}

function measureBoxes() {
  const borderRect = borderBox.getBoundingClientRect();
  const outlineRect = outlineBox.getBoundingClientRect();

  borderSize.textContent = `實際盒子尺寸：${Math.round(borderRect.width)}px × ${Math.round(borderRect.height)}px`;
  outlineSize.textContent = `實際盒子尺寸：${Math.round(outlineRect.width)}px × ${Math.round(outlineRect.height)}px`;
}

function createCssCode(state) {
  const selector = state.focusMode === "visible" ? ".button:focus-visible" : ".button:focus";

  if (state.removeFocus) {
    return `.button:focus,
.button:focus-visible {
  outline: none;
}

/* 錯誤示範：移除焦點樣式後，鍵盤使用者會失去目前位置提示。 */`;
  }

  if (state.useBorderFocus) {
    return `${selector} {
  outline: none;
  border: ${state.outlineWidth}px ${state.outlineStyle} ${state.outlineColor};
}

/* border 會參與盒模型計算，若原本沒有預留 border，焦點時可能造成版面晃動。 */`;
  }

  return `${selector} {
  outline: ${state.outlineWidth}px ${state.outlineStyle} ${state.outlineColor};
  outline-offset: ${state.outlineOffset}px;
  border-radius: ${state.focusRadius}px;
}

/* outline 不佔用版面空間，適合用來做鍵盤焦點提示。 */`;
}

function getFocusName(element) {
  if (element.matches("button.demo-button")) {
    return "儲存設定按鈕";
  }

  if (element.matches("input.demo-input")) {
    return "姓名輸入框";
  }

  if (element.matches("a.demo-link")) {
    return "查看觀察重點連結";
  }

  if (element.matches("button.demo-card-button")) {
    return "可聚焦卡片按鈕";
  }

  return "測試元素";
}

function updateFocusStatus(element) {
  const state = getState();
  const prefix = state.removeFocus ? "目前焦點不可見：" : "目前焦點：";
  focusStatus.textContent = `${prefix}${getFocusName(element)}`;
}

function updateDemo() {
  const state = getState();
  applyStateToCss(state);
  updateOutputs(state);
  cssOutput.textContent = createCssCode(state);

  requestAnimationFrame(measureBoxes);
}

Object.values(controls).forEach((control) => {
  control.addEventListener("input", updateDemo);
  control.addEventListener("change", updateDemo);
});

focusModeInputs.forEach((input) => {
  input.addEventListener("change", updateDemo);
});

presetButtons.forEach((button) => {
  button.addEventListener("click", () => applyPreset(button.dataset.preset));
});

focusTargets.forEach((target) => {
  target.addEventListener("focus", () => updateFocusStatus(target));
  target.addEventListener("blur", () => {
    requestAnimationFrame(() => {
      if (!focusTargets.includes(document.activeElement)) {
        focusStatus.textContent = "目前焦點：尚未聚焦在測試元素上";
      }
    });
  });
});

window.addEventListener("resize", measureBoxes);

updateDemo();
