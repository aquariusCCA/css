const controls = {
  useReset: document.getElementById('useReset'),
  useBorderBox: document.getElementById('useBorderBox'),
  showGuides: document.getElementById('showGuides'),
  cardWidth: document.getElementById('cardWidth'),
  cardPadding: document.getElementById('cardPadding'),
  cardGap: document.getElementById('cardGap'),
  cardBorderWidth: document.getElementById('cardBorderWidth'),
  cardRadius: document.getElementById('cardRadius'),
  shadowLevel: document.getElementById('shadowLevel'),
  outlineWidth: document.getElementById('outlineWidth')
};

const labels = {
  cardWidthValue: document.getElementById('cardWidthValue'),
  cardPaddingValue: document.getElementById('cardPaddingValue'),
  cardGapValue: document.getElementById('cardGapValue'),
  cardBorderWidthValue: document.getElementById('cardBorderWidthValue'),
  cardRadiusValue: document.getElementById('cardRadiusValue'),
  shadowLevelValue: document.getElementById('shadowLevelValue'),
  outlineWidthValue: document.getElementById('outlineWidthValue')
};

const demoRoot = document.getElementById('demoRoot');
const cardsGrid = document.getElementById('cardsGrid');
const firstCard = document.querySelector('.demo-card');
const modeBadge = document.getElementById('modeBadge');
const cssOutput = document.getElementById('cssOutput');
const copyCssBtn = document.getElementById('copyCssBtn');

const metrics = {
  cssWidth: document.getElementById('metricCssWidth'),
  outerWidth: document.getElementById('metricOuterWidth'),
  contentWidth: document.getElementById('metricContentWidth'),
  formula: document.getElementById('metricFormula')
};

const tipsList = document.getElementById('tipsList');

const shadowMap = [
  'none',
  '0 4px 10px rgba(15, 23, 42, 0.08)',
  '0 10px 24px rgba(15, 23, 42, 0.10)',
  '0 16px 36px rgba(15, 23, 42, 0.12)',
  '0 22px 48px rgba(15, 23, 42, 0.16)',
  '0 30px 70px rgba(15, 23, 42, 0.22)'
];

const presets = {
  compact: {
    useReset: true,
    useBorderBox: true,
    showGuides: false,
    cardWidth: 240,
    cardPadding: 12,
    cardGap: 12,
    cardBorderWidth: 1,
    cardRadius: 10,
    shadowLevel: 1,
    outlineWidth: 3
  },
  soft: {
    useReset: true,
    useBorderBox: true,
    showGuides: true,
    cardWidth: 280,
    cardPadding: 20,
    cardGap: 20,
    cardBorderWidth: 1,
    cardRadius: 18,
    shadowLevel: 3,
    outlineWidth: 3
  },
  product: {
    useReset: true,
    useBorderBox: true,
    showGuides: false,
    cardWidth: 320,
    cardPadding: 24,
    cardGap: 24,
    cardBorderWidth: 1,
    cardRadius: 28,
    shadowLevel: 4,
    outlineWidth: 4
  },
  debug: {
    useReset: false,
    useBorderBox: false,
    showGuides: true,
    cardWidth: 280,
    cardPadding: 28,
    cardGap: 20,
    cardBorderWidth: 8,
    cardRadius: 8,
    shadowLevel: 0,
    outlineWidth: 3
  }
};

function px(value) {
  return `${value}px`;
}

function getState() {
  return {
    useReset: controls.useReset.checked,
    useBorderBox: controls.useBorderBox.checked,
    showGuides: controls.showGuides.checked,
    cardWidth: Number(controls.cardWidth.value),
    cardPadding: Number(controls.cardPadding.value),
    cardGap: Number(controls.cardGap.value),
    cardBorderWidth: Number(controls.cardBorderWidth.value),
    cardRadius: Number(controls.cardRadius.value),
    shadowLevel: Number(controls.shadowLevel.value),
    outlineWidth: Number(controls.outlineWidth.value)
  };
}

function setCssVariable(name, value) {
  document.documentElement.style.setProperty(name, value);
}

function updateLabels(state) {
  labels.cardWidthValue.textContent = px(state.cardWidth);
  labels.cardPaddingValue.textContent = px(state.cardPadding);
  labels.cardGapValue.textContent = px(state.cardGap);
  labels.cardBorderWidthValue.textContent = px(state.cardBorderWidth);
  labels.cardRadiusValue.textContent = px(state.cardRadius);
  labels.shadowLevelValue.textContent = String(state.shadowLevel);
  labels.outlineWidthValue.textContent = px(state.outlineWidth);
}

function buildCss(state) {
  const boxSizing = state.useBorderBox ? 'border-box' : 'content-box';
  const reset = state.useReset
    ? `/* 簡易 reset：由元件自己定義 margin / padding */
.card,
.card * {
  margin: 0;
  padding: 0;
}`
    : `/* 未套用 reset：元素會保留瀏覽器預設 margin / padding */`;

  return `${reset}

.card,
.card * {
  box-sizing: ${boxSizing};
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${state.cardWidth}px, ${state.cardWidth}px));
  gap: ${state.cardGap}px;
}

.card {
  width: ${state.cardWidth}px;
  padding: ${state.cardPadding}px;
  border: ${state.cardBorderWidth}px solid #d8e0ea;
  border-radius: ${state.cardRadius}px;
  background: #ffffff;
  box-shadow: ${shadowMap[state.shadowLevel]};
}

.card__button:focus-visible {
  outline: ${state.outlineWidth}px solid rgba(37, 99, 235, 0.45);
  outline-offset: 4px;
}`;
}

function buildTips(state, measuredOuterWidth, measuredContentWidth) {
  const tips = [];

  if (state.useBorderBox) {
    tips.push('目前使用 border-box：CSS width 會包含 content、padding、border，因此卡片外部寬度比較穩定。');
  } else {
    tips.push('目前使用 content-box：CSS width 只代表 content，padding 與 border 會額外增加外部寬度。');
  }

  if (state.useReset) {
    tips.push('已套用簡易 reset：標題、段落、按鈕的預設 margin / padding 被清掉，間距由卡片元件統一管理。');
  } else {
    tips.push('未套用 reset：部分元素會保留瀏覽器預設 margin，卡片內距與文字間距可能較難預測。');
  }

  tips.push(`卡片 gap 是 ${state.cardGap}px，它控制卡片彼此距離；card padding 是 ${state.cardPadding}px，它控制內容與卡片邊界的距離。`);

  if (state.outlineWidth > 0) {
    tips.push('focus 使用 outline，不會改變盒子尺寸；用 Tab 聚焦按鈕時，版面不會因焦點樣式而晃動。');
  } else {
    tips.push('focus outline 目前為 0px，這是常見反例：鍵盤使用者可能看不到焦點位置。');
  }

  if (measuredOuterWidth > state.cardWidth && !state.useBorderBox) {
    tips.push(`你設定的 width 是 ${state.cardWidth}px，但實際外部寬度變成 ${Math.round(measuredOuterWidth)}px，這正是 content-box 常造成尺寸超出預期的原因。`);
  } else {
    tips.push(`目前實際外部寬度約為 ${Math.round(measuredOuterWidth)}px，內容可用寬度約為 ${Math.round(measuredContentWidth)}px。`);
  }

  return tips;
}

function updateMetrics(state) {
  requestAnimationFrame(() => {
    const cardRect = firstCard.getBoundingClientRect();
    const computed = getComputedStyle(firstCard);
    const contentWidth = Number.parseFloat(computed.width);
    const borderLeft = Number.parseFloat(computed.borderLeftWidth);
    const borderRight = Number.parseFloat(computed.borderRightWidth);
    const paddingLeft = Number.parseFloat(computed.paddingLeft);
    const paddingRight = Number.parseFloat(computed.paddingRight);

    const measuredOuterWidth = cardRect.width;
    const measuredContentWidth = state.useBorderBox
      ? Math.max(0, state.cardWidth - paddingLeft - paddingRight - borderLeft - borderRight)
      : contentWidth;

    metrics.cssWidth.textContent = px(state.cardWidth);
    metrics.outerWidth.textContent = `${Math.round(measuredOuterWidth)}px`;
    metrics.contentWidth.textContent = `${Math.round(measuredContentWidth)}px`;

    metrics.formula.textContent = state.useBorderBox
      ? 'outer = width'
      : 'outer = width + padding × 2 + border × 2';

    tipsList.innerHTML = buildTips(state, measuredOuterWidth, measuredContentWidth)
      .map((tip) => `<li>${tip}</li>`)
      .join('');
  });
}

function applyState() {
  const state = getState();

  updateLabels(state);

  setCssVariable('--card-width', px(state.cardWidth));
  setCssVariable('--card-padding', px(state.cardPadding));
  setCssVariable('--card-gap', px(state.cardGap));
  setCssVariable('--card-border-width', px(state.cardBorderWidth));
  setCssVariable('--card-radius', px(state.cardRadius));
  setCssVariable('--card-shadow', shadowMap[state.shadowLevel]);
  setCssVariable('--focus-outline-width', px(state.outlineWidth));

  demoRoot.classList.toggle('reset-enabled', state.useReset);
  demoRoot.classList.toggle('border-box-enabled', state.useBorderBox);
  demoRoot.classList.toggle('show-guides', state.showGuides);

  modeBadge.textContent = state.useBorderBox ? 'border-box' : 'content-box';
  modeBadge.style.background = state.useBorderBox ? 'rgba(37, 99, 235, 0.10)' : 'rgba(245, 158, 11, 0.16)';
  modeBadge.style.color = state.useBorderBox ? '#2563eb' : '#b45309';

  cssOutput.textContent = buildCss(state);
  updateMetrics(state);
}

function applyPreset(name) {
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
  const eventName = control.type === 'checkbox' ? 'change' : 'input';
  control.addEventListener(eventName, applyState);
  control.addEventListener('change', applyState);
});

document.querySelectorAll('.preset-btn').forEach((button) => {
  button.addEventListener('click', () => applyPreset(button.dataset.preset));
});

copyCssBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(cssOutput.textContent);
    const original = copyCssBtn.textContent;
    copyCssBtn.textContent = '已複製';
    setTimeout(() => {
      copyCssBtn.textContent = original;
    }, 1200);
  } catch (error) {
    alert('複製失敗，請手動複製。');
  }
});

window.addEventListener('resize', () => updateMetrics(getState()));

applyState();
