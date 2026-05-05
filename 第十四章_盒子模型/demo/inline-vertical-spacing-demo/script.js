const controls = {
  displayMode: document.getElementById('displayMode'),
  fontSize: document.getElementById('fontSize'),
  lineHeight: document.getElementById('lineHeight'),
  paddingTop: document.getElementById('paddingTop'),
  paddingBottom: document.getElementById('paddingBottom'),
  paddingHorizontal: document.getElementById('paddingHorizontal'),
  marginTop: document.getElementById('marginTop'),
  marginBottom: document.getElementById('marginBottom'),
  showGuides: document.getElementById('showGuides')
};

const outputs = {
  fontSizeValue: document.getElementById('fontSizeValue'),
  lineHeightValue: document.getElementById('lineHeightValue'),
  paddingTopValue: document.getElementById('paddingTopValue'),
  paddingBottomValue: document.getElementById('paddingBottomValue'),
  paddingHorizontalValue: document.getElementById('paddingHorizontalValue'),
  marginTopValue: document.getElementById('marginTopValue'),
  marginBottomValue: document.getElementById('marginBottomValue'),
  metricDisplay: document.getElementById('metricDisplay'),
  metricTargetSize: document.getElementById('metricTargetSize'),
  metricParagraphHeight: document.getElementById('metricParagraphHeight'),
  metricGap: document.getElementById('metricGap'),
  cssOutput: document.getElementById('cssOutput'),
  insightList: document.getElementById('insightList')
};

const targetInline = document.getElementById('targetInline');
const targetStack = document.getElementById('targetStack');
const inlineScene = document.getElementById('inlineScene');
const stackScene = document.getElementById('stackScene');
const demoParagraph = document.querySelector('.demo-paragraph');
const copyCssBtn = document.getElementById('copyCssBtn');
const presetButtons = document.querySelectorAll('.preset-btn');

function px(value) {
  return `${value}px`;
}

function setTargetStyles(target, styles) {
  Object.assign(target.style, styles);
}

function formatNumber(num) {
  return Number(num).toFixed(1).replace(/\.0$/, '');
}

function getState() {
  return {
    display: controls.displayMode.value,
    fontSize: Number(controls.fontSize.value),
    lineHeight: Number(controls.lineHeight.value),
    paddingTop: Number(controls.paddingTop.value),
    paddingBottom: Number(controls.paddingBottom.value),
    paddingHorizontal: Number(controls.paddingHorizontal.value),
    marginTop: Number(controls.marginTop.value),
    marginBottom: Number(controls.marginBottom.value),
    showGuides: controls.showGuides.checked
  };
}

function buildInsightItems(state) {
  const items = [];

  if (state.display === 'inline') {
    items.push('inline 元素的左右 padding / margin 很直觀，但垂直 margin 不會像 block 一樣把上下元素推開。');
    items.push('inline 的上下 padding 會有視覺效果，但通常只是撐開行內視覺區域，不適合用來精準控制區塊間距。');
    items.push('若你想讓文字像按鈕一樣穩定控制高度與上下留白，通常會改成 inline-block。');
  }

  if (state.display === 'inline-block') {
    items.push('inline-block 同時保留行內排列特性，又能穩定套用 width / height / margin / padding。');
    items.push('這是做標籤、膠囊、按鈕等元件時很常見的選擇。');
  }

  if (state.display === 'block') {
    items.push('block 會自成一行，上下 margin 會清楚地把區塊推開。');
    items.push('若元素本質上是獨立區塊內容，使用 block 會更符合版面語意。');
  }

  items.push(`目前 line-height = ${state.lineHeight}，它會直接影響文字所在行的高度與可讀性。`);
  items.push('判斷垂直間距問題時，要先分清楚你想控制的是：文字行高、元素內距，還是元素與外部區塊的距離。');

  return items;
}

function buildCss(state) {
  return `.target {
  display: ${state.display};
  font-size: ${state.fontSize}px;
  line-height: ${state.lineHeight};
  padding: ${state.paddingTop}px ${state.paddingHorizontal}px ${state.paddingBottom}px;
  margin-top: ${state.marginTop}px;
  margin-bottom: ${state.marginBottom}px;
  border: 2px solid #276ef1;
  background: rgba(39, 110, 241, 0.14);
  border-radius: 10px;
}`;
}

function applyState() {
  const state = getState();

  outputs.fontSizeValue.textContent = px(state.fontSize);
  outputs.lineHeightValue.textContent = state.lineHeight;
  outputs.paddingTopValue.textContent = px(state.paddingTop);
  outputs.paddingBottomValue.textContent = px(state.paddingBottom);
  outputs.paddingHorizontalValue.textContent = px(state.paddingHorizontal);
  outputs.marginTopValue.textContent = px(state.marginTop);
  outputs.marginBottomValue.textContent = px(state.marginBottom);

  const targetStyles = {
    display: state.display,
    fontSize: px(state.fontSize),
    lineHeight: String(state.lineHeight),
    paddingTop: px(state.paddingTop),
    paddingRight: px(state.paddingHorizontal),
    paddingBottom: px(state.paddingBottom),
    paddingLeft: px(state.paddingHorizontal),
    marginTop: px(state.marginTop),
    marginBottom: px(state.marginBottom)
  };

  setTargetStyles(targetInline, targetStyles);
  setTargetStyles(targetStack, targetStyles);
  demoParagraph.style.setProperty('--lh', state.lineHeight);
  demoParagraph.style.fontSize = px(state.fontSize);

  inlineScene.classList.toggle('show-guides', state.showGuides);
  stackScene.classList.toggle('show-guides', state.showGuides);

  outputs.metricDisplay.textContent = state.display;

  requestAnimationFrame(() => {
    const inlineRect = targetInline.getBoundingClientRect();
    const paragraphRect = demoParagraph.getBoundingClientRect();
    const stackRect = targetStack.getBoundingClientRect();
    const topBox = stackScene.querySelector('.top-box').getBoundingClientRect();
    const bottomBox = stackScene.querySelector('.bottom-box').getBoundingClientRect();
    const gap = Math.max(0, bottomBox.top - topBox.bottom);

    outputs.metricTargetSize.textContent = `${formatNumber(state.display === 'inline' ? inlineRect.width : stackRect.width)} × ${formatNumber(state.display === 'inline' ? inlineRect.height : stackRect.height)} px`;
    outputs.metricParagraphHeight.textContent = `${formatNumber(paragraphRect.height)}px`;
    outputs.metricGap.textContent = `${formatNumber(gap)}px`;
  });

  outputs.cssOutput.textContent = buildCss(state);

  outputs.insightList.innerHTML = buildInsightItems(state)
    .map((item) => `<li>${item}</li>`)
    .join('');
}

function applyPreset(name) {
  const presets = {
    'inline-problem': {
      displayMode: 'inline',
      fontSize: 18,
      lineHeight: 1.6,
      paddingTop: 16,
      paddingBottom: 16,
      paddingHorizontal: 18,
      marginTop: 16,
      marginBottom: 16,
      showGuides: true
    },
    'inline-button': {
      displayMode: 'inline-block',
      fontSize: 18,
      lineHeight: 1.2,
      paddingTop: 10,
      paddingBottom: 10,
      paddingHorizontal: 18,
      marginTop: 12,
      marginBottom: 12,
      showGuides: true
    },
    'block-card': {
      displayMode: 'block',
      fontSize: 18,
      lineHeight: 1.5,
      paddingTop: 16,
      paddingBottom: 16,
      paddingHorizontal: 18,
      marginTop: 18,
      marginBottom: 18,
      showGuides: true
    }
  };

  const preset = presets[name];
  if (!preset) return;

  Object.entries(preset).forEach(([key, value]) => {
    const control = controls[key];
    if (!control) return;

    if (control.type === 'checkbox') {
      control.checked = value;
    } else {
      control.value = value;
    }
  });

  applyState();
}

Object.values(controls).forEach((control) => {
  const eventName = control.type === 'checkbox' || control.tagName === 'SELECT' ? 'change' : 'input';
  control.addEventListener(eventName, applyState);
  if (eventName !== 'change') {
    control.addEventListener('change', applyState);
  }
});

presetButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyPreset(btn.dataset.preset));
});

copyCssBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(outputs.cssOutput.textContent);
    const oldText = copyCssBtn.textContent;
    copyCssBtn.textContent = '已複製';
    setTimeout(() => {
      copyCssBtn.textContent = oldText;
    }, 1200);
  } catch (error) {
    alert('複製失敗，請手動複製。');
  }
});

applyState();
