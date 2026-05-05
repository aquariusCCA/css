const defaultState = {
  width: 240,
  height: 180,
  padding: 24,
  border: 8,
};

const inputs = {
  width: document.querySelector('#widthInput'),
  height: document.querySelector('#heightInput'),
  padding: document.querySelector('#paddingInput'),
  border: document.querySelector('#borderInput'),
};

const outputs = {
  width: document.querySelector('#widthOutput'),
  height: document.querySelector('#heightOutput'),
  padding: document.querySelector('#paddingOutput'),
  border: document.querySelector('#borderOutput'),
};

const elements = {
  contentBox: document.querySelector('#contentBox'),
  borderBox: document.querySelector('#borderBox'),
  contentCssSize: document.querySelector('#contentCssSize'),
  borderCssSize: document.querySelector('#borderCssSize'),
  contentContentSize: document.querySelector('#contentContentSize'),
  borderContentSize: document.querySelector('#borderContentSize'),
  contentOuterSize: document.querySelector('#contentOuterSize'),
  borderOuterSize: document.querySelector('#borderOuterSize'),
  contentBoxContentSize: document.querySelector('#contentBoxContentSize'),
  borderBoxContentSize: document.querySelector('#borderBoxContentSize'),
  contentCode: document.querySelector('#contentCode'),
  borderCode: document.querySelector('#borderCode'),
  contentOuterWidthLine: document.querySelector('#contentOuterWidthLine'),
  contentOuterHeightLine: document.querySelector('#contentOuterHeightLine'),
  borderOuterWidthLine: document.querySelector('#borderOuterWidthLine'),
  borderOuterHeightLine: document.querySelector('#borderOuterHeightLine'),
  contentFormula: document.querySelector('#contentFormula'),
  borderFormula: document.querySelector('#borderFormula'),
  resetButton: document.querySelector('#resetButton'),
};

function getState() {
  return Object.fromEntries(
    Object.entries(inputs).map(([key, input]) => [key, Number(input.value)])
  );
}

function setState(nextState) {
  Object.entries(nextState).forEach(([key, value]) => {
    inputs[key].value = value;
  });
  render();
}

function formatSize(width, height) {
  return `${width}px × ${height}px`;
}

function createCode({ boxSizing, width, height, padding, border }) {
  return `.box {
  box-sizing: ${boxSizing};
  width: ${width}px;
  height: ${height}px;
  padding: ${padding}px;
  border: ${border}px solid #f97316;
}`;
}

function applyBoxStyle(box, state) {
  box.style.setProperty('--box-width', `${state.width}px`);
  box.style.setProperty('--box-height', `${state.height}px`);
  box.style.setProperty('--box-padding', `${state.padding}px`);
  box.style.setProperty('--box-border', `${state.border}px`);
}

function setDimensionLine(line, value, axis) {
  const variableName = axis === 'width' ? '--outer-width' : '--outer-height';
  line.style.setProperty(variableName, `${value}px`);
  line.textContent = `${value}px`;
}

function render() {
  const state = getState();
  const { width, height, padding, border } = state;

  Object.entries(outputs).forEach(([key, output]) => {
    output.value = `${state[key]}px`;
  });

  applyBoxStyle(elements.contentBox, state);
  applyBoxStyle(elements.borderBox, state);

  const contentBoxOuterWidth = width + padding * 2 + border * 2;
  const contentBoxOuterHeight = height + padding * 2 + border * 2;

  const borderBoxOuterWidth = width;
  const borderBoxOuterHeight = height;
  const borderBoxContentWidth = Math.max(0, width - padding * 2 - border * 2);
  const borderBoxContentHeight = Math.max(0, height - padding * 2 - border * 2);

  const cssSizeText = formatSize(width, height);
  elements.contentCssSize.textContent = cssSizeText;
  elements.borderCssSize.textContent = cssSizeText;

  elements.contentContentSize.textContent = formatSize(width, height);
  elements.borderContentSize.textContent = formatSize(borderBoxContentWidth, borderBoxContentHeight);

  elements.contentOuterSize.textContent = formatSize(contentBoxOuterWidth, contentBoxOuterHeight);
  elements.borderOuterSize.textContent = formatSize(borderBoxOuterWidth, borderBoxOuterHeight);

  elements.contentBoxContentSize.textContent = `${width} × ${height}`;
  elements.borderBoxContentSize.textContent = `${borderBoxContentWidth} × ${borderBoxContentHeight}`;

  setDimensionLine(elements.contentOuterWidthLine, contentBoxOuterWidth, 'width');
  setDimensionLine(elements.contentOuterHeightLine, contentBoxOuterHeight, 'height');
  setDimensionLine(elements.borderOuterWidthLine, borderBoxOuterWidth, 'width');
  setDimensionLine(elements.borderOuterHeightLine, borderBoxOuterHeight, 'height');

  elements.contentCode.textContent = createCode({
    boxSizing: 'content-box',
    width,
    height,
    padding,
    border,
  });

  elements.borderCode.textContent = createCode({
    boxSizing: 'border-box',
    width,
    height,
    padding,
    border,
  });

  elements.contentFormula.textContent =
    `outer width = ${width} + ${padding} × 2 + ${border} × 2 = ${contentBoxOuterWidth}px`;

  elements.borderFormula.textContent =
    `content width = ${width} - ${padding} × 2 - ${border} × 2 = ${borderBoxContentWidth}px`;
}

Object.values(inputs).forEach((input) => {
  input.addEventListener('input', render);
});

elements.resetButton.addEventListener('click', () => setState(defaultState));

render();
