const resetModeSelect = document.querySelector('#resetMode');
const applySpacingCheckbox = document.querySelector('#applySpacing');
const spaceSizeInput = document.querySelector('#spaceSize');
const spaceOutput = document.querySelector('#spaceOutput');
const showGuidesCheckbox = document.querySelector('#showGuides');
const reloadFramesButton = document.querySelector('#reloadFrames');
const copyCssButton = document.querySelector('#copyCss');
const generatedCssElement = document.querySelector('#generatedCss');
const metricsBody = document.querySelector('#metricsBody');
const defaultFrame = document.querySelector('#defaultFrame');
const resetFrame = document.querySelector('#resetFrame');
const resetBadge = document.querySelector('#resetBadge');

const resetSnippets = {
  basic: {
    label: 'Basic Reset',
    css: `/* 基礎 reset：對應教學筆記中常見的清除預設內外距 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,
  },
  modern: {
    label: 'Modern Reset',
    css: `/* 現代 reset：保留語意，補上常見實務規則 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

body {
  min-height: 100vh;
  line-height: 1.5;
}

input,
button,
textarea,
select {
  font: inherit;
}`,
  },
};

const sampleMarkup = `
<main class="demo-wrapper">
  <h1>這是 h1 標題</h1>
  <p>這是第一段文字。瀏覽器通常會幫 p 元素加上預設的上下 margin。</p>
  <p>這是第二段文字。沒有 reset 時，段落之間的距離其實來自 user agent stylesheet。</p>

  <ul role="list">
    <li>ul 預設有 margin-block-start / margin-block-end</li>
    <li>ul 預設也有 padding-inline-start，形成左側縮排</li>
    <li>reset 後如果沒有補回規則，清單會貼齊容器左側</li>
  </ul>

  <div class="form-row">
    <button type="button">普通按鈕</button>
    <input type="text" placeholder="input 也有瀏覽器預設樣式" />
  </div>
</main>`;

function getBasePreviewCss() {
  return `
html {
  background: #e2e8f0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #1e293b;
}

.demo-wrapper {
  min-height: 430px;
  background: #ffffff;
  border: 2px dashed #94a3b8;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

input {
  max-width: 260px;
}
`;
}

function getSpacingCss(spaceSize) {
  return `
/* reset 之後，改由自己定義一致的 spacing system */
.demo-wrapper {
  padding: 24px;
}

.demo-wrapper > * + * {
  margin-top: ${spaceSize}px;
}

.demo-wrapper ul {
  padding-left: 1.25rem;
}

.demo-wrapper button,
.demo-wrapper input {
  padding: 8px 12px;
}
`;
}

function getGuideCss() {
  return `
/* 輔助線：讓每個主要元素的盒子範圍更容易觀察 */
.demo-wrapper > * {
  outline: 1px dashed rgba(37, 99, 235, 0.5);
  outline-offset: 3px;
}
`;
}

function buildSrcDoc({ resetMode = null, applySpacing = false, spaceSize = 16, showGuides = false }) {
  const resetCss = resetMode ? resetSnippets[resetMode].css : '';
  const spacingCss = applySpacing ? getSpacingCss(spaceSize) : '';
  const guideCss = showGuides ? getGuideCss() : '';

  const css = [resetCss, getBasePreviewCss(), spacingCss, guideCss]
    .filter(Boolean)
    .join('\n\n');

  return `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <style>${css}</style>
</head>
<body>
  ${sampleMarkup}
</body>
</html>`;
}

function getGeneratedCss() {
  const mode = resetModeSelect.value;
  const spaceSize = Number(spaceSizeInput.value);
  const applySpacing = applySpacingCheckbox.checked;
  const showGuides = showGuidesCheckbox.checked;

  return [
    resetSnippets[mode].css,
    applySpacing ? getSpacingCss(spaceSize) : '/* 目前未套用自訂間距，因此 reset 後元素會更貼齊。 */',
    showGuides ? getGuideCss() : '/* 目前未顯示元素輔助線。 */',
  ].join('\n\n');
}

function renderFrames() {
  const mode = resetModeSelect.value;
  const spaceSize = Number(spaceSizeInput.value);
  const applySpacing = applySpacingCheckbox.checked;
  const showGuides = showGuidesCheckbox.checked;

  defaultFrame.srcdoc = buildSrcDoc({ showGuides });
  resetFrame.srcdoc = buildSrcDoc({ resetMode: mode, applySpacing, spaceSize, showGuides });
  generatedCssElement.textContent = getGeneratedCss();
  resetBadge.textContent = resetSnippets[mode].label;
  spaceOutput.textContent = `${spaceSize}px`;

  requestAnimationFrame(() => {
    setTimeout(updateMetrics, 80);
  });
}

function readComputed(frame, selector, prop) {
  const doc = frame.contentDocument;
  if (!doc) return '—';
  const element = doc.querySelector(selector);
  if (!element) return '—';
  return doc.defaultView.getComputedStyle(element)[prop];
}

function updateMetrics() {
  const metrics = [
    ['body margin-top', 'body', 'marginTop'],
    ['body margin-right', 'body', 'marginRight'],
    ['h1 margin-top', 'h1', 'marginTop'],
    ['h1 margin-bottom', 'h1', 'marginBottom'],
    ['p margin-top', 'p', 'marginTop'],
    ['p margin-bottom', 'p', 'marginBottom'],
    ['ul margin-top', 'ul', 'marginTop'],
    ['ul margin-bottom', 'ul', 'marginBottom'],
    ['ul padding-left', 'ul', 'paddingLeft'],
    ['button padding-left', 'button', 'paddingLeft'],
  ];

  metricsBody.innerHTML = metrics
    .map(([label, selector, prop]) => {
      const defaultValue = readComputed(defaultFrame, selector, prop);
      const resetValue = readComputed(resetFrame, selector, prop);
      return `
        <tr>
          <td>${label}</td>
          <td>${defaultValue}</td>
          <td>${resetValue}</td>
        </tr>`;
    })
    .join('');
}

async function copyGeneratedCss() {
  try {
    await navigator.clipboard.writeText(generatedCssElement.textContent);
    copyCssButton.textContent = '已複製';
    setTimeout(() => {
      copyCssButton.textContent = '複製 CSS';
    }, 1200);
  } catch (error) {
    copyCssButton.textContent = '複製失敗';
    setTimeout(() => {
      copyCssButton.textContent = '複製 CSS';
    }, 1200);
  }
}

resetModeSelect.addEventListener('change', renderFrames);
applySpacingCheckbox.addEventListener('change', renderFrames);
spaceSizeInput.addEventListener('input', renderFrames);
showGuidesCheckbox.addEventListener('change', renderFrames);
reloadFramesButton.addEventListener('click', renderFrames);
copyCssButton.addEventListener('click', copyGeneratedCss);

defaultFrame.addEventListener('load', updateMetrics);
resetFrame.addEventListener('load', updateMetrics);

renderFrames();
