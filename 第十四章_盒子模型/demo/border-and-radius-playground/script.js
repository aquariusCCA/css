const refs = {
  boxWidth: document.querySelector('#boxWidth'),
  boxHeight: document.querySelector('#boxHeight'),
  boxSizing: document.querySelector('#boxSizing'),
  borderWidth: document.querySelector('#borderWidth'),
  borderStyle: document.querySelector('#borderStyle'),
  borderColor: document.querySelector('#borderColor'),
  backgroundColor: document.querySelector('#backgroundColor'),
  radiusUnit: document.querySelector('#radiusUnit'),
  sameRadius: document.querySelector('#sameRadius'),
  radiusAll: document.querySelector('#radiusAll'),
  topLeftRadius: document.querySelector('#topLeftRadius'),
  topRightRadius: document.querySelector('#topRightRadius'),
  bottomRightRadius: document.querySelector('#bottomRightRadius'),
  bottomLeftRadius: document.querySelector('#bottomLeftRadius'),
  previewBox: document.querySelector('#previewBox'),
  cornerControls: document.querySelector('#cornerControls'),
  widthValue: document.querySelector('#widthValue'),
  heightValue: document.querySelector('#heightValue'),
  borderWidthValue: document.querySelector('#borderWidthValue'),
  radiusAllValue: document.querySelector('#radiusAllValue'),
  topLeftValue: document.querySelector('#topLeftValue'),
  topRightValue: document.querySelector('#topRightValue'),
  bottomRightValue: document.querySelector('#bottomRightValue'),
  bottomLeftValue: document.querySelector('#bottomLeftValue'),
  cssSizeText: document.querySelector('#cssSizeText'),
  renderedSizeText: document.querySelector('#renderedSizeText'),
  contentSizeText: document.querySelector('#contentSizeText'),
  explainText: document.querySelector('#explainText'),
  codeOutput: document.querySelector('#codeOutput'),
  copyCodeButton: document.querySelector('#copyCodeButton'),
  copyMessage: document.querySelector('#copyMessage'),
};

const presets = {
  card: {
    width: 260,
    height: 170,
    boxSizing: 'border-box',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#2563eb',
    backgroundColor: '#dbeafe',
    radiusUnit: 'px',
    sameRadius: true,
    radiusAll: 24,
  },
  circle: {
    width: 190,
    height: 190,
    boxSizing: 'border-box',
    borderWidth: 8,
    borderStyle: 'solid',
    borderColor: '#16a34a',
    backgroundColor: '#dcfce7',
    radiusUnit: '%',
    sameRadius: true,
    radiusAll: 50,
  },
  pill: {
    width: 320,
    height: 88,
    boxSizing: 'border-box',
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#9333ea',
    backgroundColor: '#f3e8ff',
    radiusUnit: 'px',
    sameRadius: true,
    radiusAll: 44,
  },
  mixed: {
    width: 280,
    height: 180,
    boxSizing: 'border-box',
    borderWidth: 8,
    borderStyle: 'ridge',
    borderColor: '#ea580c',
    backgroundColor: '#ffedd5',
    radiusUnit: 'px',
    sameRadius: false,
    topLeftRadius: 60,
    topRightRadius: 12,
    bottomRightRadius: 70,
    bottomLeftRadius: 18,
  },
  dashed: {
    width: 260,
    height: 110,
    boxSizing: 'border-box',
    borderWidth: 4,
    borderStyle: 'dashed',
    borderColor: '#dc2626',
    backgroundColor: '#fee2e2',
    radiusUnit: 'px',
    sameRadius: true,
    radiusAll: 16,
  },
  square: {
    width: 240,
    height: 160,
    boxSizing: 'border-box',
    borderWidth: 8,
    borderStyle: 'solid',
    borderColor: '#2563eb',
    backgroundColor: '#dbeafe',
    radiusUnit: 'px',
    sameRadius: true,
    radiusAll: 0,
  },
};

const getNumber = (element) => Number(element.value);

function getRadiusText() {
  const unit = refs.radiusUnit.value;

  if (refs.sameRadius.checked) {
    return `${getNumber(refs.radiusAll)}${unit}`;
  }

  return [
    refs.topLeftRadius,
    refs.topRightRadius,
    refs.bottomRightRadius,
    refs.bottomLeftRadius,
  ]
    .map((input) => `${getNumber(input)}${unit}`)
    .join(' ');
}

function getState() {
  return {
    width: getNumber(refs.boxWidth),
    height: getNumber(refs.boxHeight),
    boxSizing: refs.boxSizing.value,
    borderWidth: getNumber(refs.borderWidth),
    borderStyle: refs.borderStyle.value,
    borderColor: refs.borderColor.value,
    backgroundColor: refs.backgroundColor.value,
    borderRadius: getRadiusText(),
    radiusUnit: refs.radiusUnit.value,
    sameRadius: refs.sameRadius.checked,
  };
}

function updateValueLabels(state) {
  const unit = state.radiusUnit;

  refs.widthValue.textContent = `${state.width}px`;
  refs.heightValue.textContent = `${state.height}px`;
  refs.borderWidthValue.textContent = `${state.borderWidth}px`;
  refs.radiusAllValue.textContent = `${getNumber(refs.radiusAll)}${unit}`;
  refs.topLeftValue.textContent = `${getNumber(refs.topLeftRadius)}${unit}`;
  refs.topRightValue.textContent = `${getNumber(refs.topRightRadius)}${unit}`;
  refs.bottomRightValue.textContent = `${getNumber(refs.bottomRightRadius)}${unit}`;
  refs.bottomLeftValue.textContent = `${getNumber(refs.bottomLeftRadius)}${unit}`;

  refs.cornerControls.classList.toggle('is-disabled', state.sameRadius);
}

function updatePreview(state) {
  refs.previewBox.style.width = `${state.width}px`;
  refs.previewBox.style.height = `${state.height}px`;
  refs.previewBox.style.boxSizing = state.boxSizing;
  refs.previewBox.style.borderWidth = `${state.borderWidth}px`;
  refs.previewBox.style.borderStyle = state.borderStyle;
  refs.previewBox.style.borderColor = state.borderColor;
  refs.previewBox.style.backgroundColor = state.backgroundColor;
  refs.previewBox.style.borderRadius = state.borderRadius;
}

function updateMetrics(state) {
  const renderedWidth = Math.round(refs.previewBox.getBoundingClientRect().width);
  const renderedHeight = Math.round(refs.previewBox.getBoundingClientRect().height);
  const borderTotal = state.borderStyle === 'none' ? 0 : state.borderWidth * 2;

  const contentWidth =
    state.boxSizing === 'border-box'
      ? Math.max(0, state.width - borderTotal)
      : state.width;

  const contentHeight =
    state.boxSizing === 'border-box'
      ? Math.max(0, state.height - borderTotal)
      : state.height;

  refs.cssSizeText.textContent = `${state.width}px × ${state.height}px`;
  refs.renderedSizeText.textContent = `${renderedWidth}px × ${renderedHeight}px`;
  refs.contentSizeText.textContent = `${contentWidth}px × ${contentHeight}px`;

  refs.explainText.innerHTML =
    state.boxSizing === 'border-box'
      ? '目前是 <code>border-box</code>：CSS 的 width / height 會包含 border，因此 border 變粗時，content 可用空間會變小，但外部尺寸不會增加。'
      : '目前是 <code>content-box</code>：CSS 的 width / height 只代表 content，border 會額外加在外面，所以實際外部尺寸會變大。';
}

function updateCode(state) {
  refs.codeOutput.textContent = `.demo-box {
  width: ${state.width}px;
  height: ${state.height}px;
  box-sizing: ${state.boxSizing};
  border: ${state.borderWidth}px ${state.borderStyle} ${state.borderColor};
  border-radius: ${state.borderRadius};
  background-color: ${state.backgroundColor};
}`;
}

function render() {
  const state = getState();

  updateValueLabels(state);
  updatePreview(state);
  updateMetrics(state);
  updateCode(state);
}

function applyPreset(presetName) {
  const preset = presets[presetName];

  refs.boxWidth.value = preset.width;
  refs.boxHeight.value = preset.height;
  refs.boxSizing.value = preset.boxSizing;
  refs.borderWidth.value = preset.borderWidth;
  refs.borderStyle.value = preset.borderStyle;
  refs.borderColor.value = preset.borderColor;
  refs.backgroundColor.value = preset.backgroundColor;
  refs.radiusUnit.value = preset.radiusUnit;
  refs.sameRadius.checked = preset.sameRadius;

  if (preset.sameRadius) {
    refs.radiusAll.value = preset.radiusAll;
  } else {
    refs.topLeftRadius.value = preset.topLeftRadius;
    refs.topRightRadius.value = preset.topRightRadius;
    refs.bottomRightRadius.value = preset.bottomRightRadius;
    refs.bottomLeftRadius.value = preset.bottomLeftRadius;
  }

  render();
}

function copyCssCode() {
  const code = refs.codeOutput.textContent;

  navigator.clipboard
    .writeText(code)
    .then(() => {
      refs.copyMessage.textContent = '已複製目前 CSS。';
    })
    .catch(() => {
      refs.copyMessage.textContent = '瀏覽器未允許自動複製，請手動選取程式碼。';
    });

  window.setTimeout(() => {
    refs.copyMessage.textContent = '';
  }, 1800);
}

Object.values(refs).forEach((element) => {
  if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
    element.addEventListener('input', render);
    element.addEventListener('change', render);
  }
});

document.querySelectorAll('[data-preset]').forEach((button) => {
  button.addEventListener('click', () => applyPreset(button.dataset.preset));
});

refs.copyCodeButton.addEventListener('click', copyCssCode);

render();
