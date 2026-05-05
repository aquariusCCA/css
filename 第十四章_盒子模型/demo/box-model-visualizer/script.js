const defaultState = {
  boxSizing: 'content-box',
  width: 240,
  height: 150,
  padding: 24,
  border: 8,
  margin: 25,
};

const elements = {
  boxSizing: document.querySelector('#boxSizing'),
  width: document.querySelector('#boxWidth'),
  height: document.querySelector('#boxHeight'),
  padding: document.querySelector('#boxPadding'),
  border: document.querySelector('#boxBorder'),
  margin: document.querySelector('#boxMargin'),
  resetButton: document.querySelector('#resetButton'),
  boxModel: document.querySelector('#boxModel'),
  cssCode: document.querySelector('#cssCode'),
  contentSizeLabel: document.querySelector('#contentSizeLabel'),
  widthMeaning: document.querySelector('#widthMeaning'),
  heightMeaning: document.querySelector('#heightMeaning'),
  contentMetric: document.querySelector('#contentMetric'),
  paddingMetric: document.querySelector('#paddingMetric'),
  borderMetric: document.querySelector('#borderMetric'),
  borderBoxMetric: document.querySelector('#borderBoxMetric'),
  outerMetric: document.querySelector('#outerMetric'),
  formulaMetric: document.querySelector('#formulaMetric'),
};

const valueOutputs = {
  width: document.querySelector('#boxWidthValue'),
  height: document.querySelector('#boxHeightValue'),
  padding: document.querySelector('#boxPaddingValue'),
  border: document.querySelector('#boxBorderValue'),
  margin: document.querySelector('#boxMarginValue'),
};

function getState() {
  return {
    boxSizing: elements.boxSizing.value,
    width: Number(elements.width.value),
    height: Number(elements.height.value),
    padding: Number(elements.padding.value),
    border: Number(elements.border.value),
    margin: Number(elements.margin.value),
  };
}

function setControlValues(state) {
  elements.boxSizing.value = state.boxSizing;
  elements.width.value = state.width;
  elements.height.value = state.height;
  elements.padding.value = state.padding;
  elements.border.value = state.border;
  elements.margin.value = state.margin;
}

function calculateBoxModel(state) {
  const horizontalPadding = state.padding * 2;
  const verticalPadding = state.padding * 2;
  const horizontalBorder = state.border * 2;
  const verticalBorder = state.border * 2;
  const horizontalMargin = state.margin * 2;
  const verticalMargin = state.margin * 2;

  const isBorderBox = state.boxSizing === 'border-box';

  const contentWidth = isBorderBox
    ? state.width - horizontalPadding - horizontalBorder
    : state.width;

  const contentHeight = isBorderBox
    ? state.height - verticalPadding - verticalBorder
    : state.height;

  const borderBoxWidth = isBorderBox
    ? state.width
    : state.width + horizontalPadding + horizontalBorder;

  const borderBoxHeight = isBorderBox
    ? state.height
    : state.height + verticalPadding + verticalBorder;

  const outerWidth = borderBoxWidth + horizontalMargin;
  const outerHeight = borderBoxHeight + verticalMargin;

  return {
    horizontalPadding,
    verticalPadding,
    horizontalBorder,
    verticalBorder,
    horizontalMargin,
    verticalMargin,
    contentWidth,
    contentHeight,
    borderBoxWidth,
    borderBoxHeight,
    outerWidth,
    outerHeight,
    isBorderBox,
  };
}

function updateValueOutputs(state) {
  valueOutputs.width.textContent = `${state.width}px`;
  valueOutputs.height.textContent = `${state.height}px`;
  valueOutputs.padding.textContent = `${state.padding}px`;
  valueOutputs.border.textContent = `${state.border}px`;
  valueOutputs.margin.textContent = `${state.margin}px`;
}

function updateVisualBox(state, result) {
  elements.boxModel.style.setProperty('--demo-content-width', `${result.contentWidth}px`);
  elements.boxModel.style.setProperty('--demo-content-height', `${result.contentHeight}px`);
  elements.boxModel.style.setProperty('--demo-padding', `${state.padding}px`);
  elements.boxModel.style.setProperty('--demo-border', `${state.border}px`);
  elements.boxModel.style.setProperty('--demo-margin', `${state.margin}px`);

  elements.contentSizeLabel.textContent = `${result.contentWidth} × ${result.contentHeight}px`;
}

function updateMetrics(state, result) {
  elements.widthMeaning.textContent = result.isBorderBox ? 'border-box 寬度' : 'content 寬度';
  elements.heightMeaning.textContent = result.isBorderBox ? 'border-box 高度' : 'content 高度';

  elements.contentMetric.textContent = `${result.contentWidth} × ${result.contentHeight}px`;
  elements.paddingMetric.textContent = `左右 ${result.horizontalPadding}px，上下 ${result.verticalPadding}px`;
  elements.borderMetric.textContent = `左右 ${result.horizontalBorder}px，上下 ${result.verticalBorder}px`;
  elements.borderBoxMetric.textContent = `${result.borderBoxWidth} × ${result.borderBoxHeight}px`;
  elements.outerMetric.textContent = `${result.outerWidth} × ${result.outerHeight}px`;

  elements.formulaMetric.textContent = result.isBorderBox
    ? `width 已包含 padding 與 border；外部寬度 = ${state.width} + ${result.horizontalMargin} = ${result.outerWidth}px`
    : `外部寬度 = ${state.width} + ${result.horizontalPadding} + ${result.horizontalBorder} + ${result.horizontalMargin} = ${result.outerWidth}px`;
}

function updateCssPreview(state) {
  elements.cssCode.textContent = `.box {\n  box-sizing: ${state.boxSizing};\n  width: ${state.width}px;\n  height: ${state.height}px;\n  padding: ${state.padding}px;\n  border: ${state.border}px solid #fb923c;\n  margin: ${state.margin}px;\n}`;
}

function updateDemo() {
  const state = getState();
  const result = calculateBoxModel(state);

  updateValueOutputs(state);
  updateVisualBox(state, result);
  updateMetrics(state, result);
  updateCssPreview(state);
}

function resetDemo() {
  setControlValues(defaultState);
  updateDemo();
}

[elements.boxSizing, elements.width, elements.height, elements.padding, elements.border, elements.margin]
  .forEach((control) => {
    control.addEventListener('input', updateDemo);
    control.addEventListener('change', updateDemo);
  });

elements.resetButton.addEventListener('click', resetDemo);

resetDemo();
