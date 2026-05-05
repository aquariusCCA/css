const controls = {
  paddingX: document.querySelector('#paddingX'),
  paddingY: document.querySelector('#paddingY'),
  navGap: document.querySelector('#navGap'),
  fontSize: document.querySelector('#fontSize'),
};

const outputs = {
  paddingX: document.querySelector('#paddingXValue'),
  paddingY: document.querySelector('#paddingYValue'),
  navGap: document.querySelector('#navGapValue'),
  fontSize: document.querySelector('#fontSizeValue'),
};

const cssCode = document.querySelector('#cssCode');
const paddingFirstWidth = document.querySelector('#paddingFirstWidth');
const paddingFirstHeight = document.querySelector('#paddingFirstHeight');
const fixedFirstHeight = document.querySelector('#fixedFirstHeight');
const paddingFirstLink = document.querySelector('.nav-padding .nav-link');
const fixedFirstLink = document.querySelector('.nav-fixed .nav-link');

function px(value) {
  return `${value}px`;
}

function getControlValues() {
  return {
    paddingX: Number(controls.paddingX.value),
    paddingY: Number(controls.paddingY.value),
    navGap: Number(controls.navGap.value),
    fontSize: Number(controls.fontSize.value),
  };
}

function updateCssVariables(values) {
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty('--padding-x', px(values.paddingX));
  rootStyle.setProperty('--padding-y', px(values.paddingY));
  rootStyle.setProperty('--nav-gap', px(values.navGap));
  rootStyle.setProperty('--font-size', px(values.fontSize));
}

function updateOutputs(values) {
  outputs.paddingX.textContent = px(values.paddingX);
  outputs.paddingY.textContent = px(values.paddingY);
  outputs.navGap.textContent = px(values.navGap);
  outputs.fontSize.textContent = px(values.fontSize);
}

function updateMetrics() {
  const paddingRect = paddingFirstLink.getBoundingClientRect();
  const fixedRect = fixedFirstLink.getBoundingClientRect();

  paddingFirstWidth.textContent = `${Math.round(paddingRect.width)}px`;
  paddingFirstHeight.textContent = `${Math.round(paddingRect.height)}px`;
  fixedFirstHeight.textContent = `${Math.round(fixedRect.height)}px`;
}

function updateCode(values) {
  cssCode.textContent = `.nav {
  display: flex;
  flex-wrap: wrap;
  gap: ${px(values.navGap)};
}

.nav a {
  display: inline-block;
  padding: ${px(values.paddingY)} ${px(values.paddingX)};
  border-radius: 999px;
  font-size: ${px(values.fontSize)};
  line-height: 1.2;
  text-decoration: none;
}

/* 對照：固定寬度較不適合文字長度差異大的導航 */
.nav-fixed a {
  width: 120px;
  padding: ${px(values.paddingY)} 6px;
}`;
}

function render() {
  const values = getControlValues();
  updateCssVariables(values);
  updateOutputs(values);
  updateCode(values);

  requestAnimationFrame(updateMetrics);
}

Object.values(controls).forEach((control) => {
  control.addEventListener('input', render);
});

render();
