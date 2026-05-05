const state = {
  marginBottom: 48,
  marginTop: 80,
  childMarginTop: 64,
  fixMethod: "flow-root",
};

const elements = {
  root: document.documentElement,
  marginBottomInput: document.querySelector("#marginBottomInput"),
  marginTopInput: document.querySelector("#marginTopInput"),
  childMarginInput: document.querySelector("#childMarginInput"),
  fixMethodSelect: document.querySelector("#fixMethodSelect"),
  marginBottomOutput: document.querySelector("#marginBottomOutput"),
  marginTopOutput: document.querySelector("#marginTopOutput"),
  childMarginOutput: document.querySelector("#childMarginOutput"),
  boxAMarginLabel: document.querySelector("#boxAMarginLabel"),
  boxBMarginLabel: document.querySelector("#boxBMarginLabel"),
  siblingNaiveGap: document.querySelector("#siblingNaiveGap"),
  siblingActualGap: document.querySelector("#siblingActualGap"),
  siblingRuleText: document.querySelector("#siblingRuleText"),
  siblingBoxA: document.querySelector("#siblingBoxA"),
  siblingBoxB: document.querySelector("#siblingBoxB"),
  siblingGapRuler: document.querySelector("#siblingGapRuler"),
  gapRulerOutput: document.querySelector("#gapRulerOutput"),
  collapseStage: document.querySelector("#collapseStage"),
  fixedStage: document.querySelector("#fixedStage"),
  collapseParent: document.querySelector("#collapseParent"),
  collapseChild: document.querySelector("#collapseChild"),
  fixedParent: document.querySelector("#fixedParent"),
  fixedChild: document.querySelector("#fixedChild"),
  collapseParentOffset: document.querySelector("#collapseParentOffset"),
  collapseChildOffset: document.querySelector("#collapseChildOffset"),
  fixedParentOffset: document.querySelector("#fixedParentOffset"),
  fixedChildOffset: document.querySelector("#fixedChildOffset"),
  fixMethodLabel: document.querySelector("#fixMethodLabel"),
  fixStatusBadge: document.querySelector("#fixStatusBadge"),
  siblingCodeBlock: document.querySelector("#siblingCodeBlock"),
  parentCodeBlock: document.querySelector("#parentCodeBlock"),
};

const fixMethodConfig = {
  "flow-root": {
    className: "fix-flow-root",
    label: "BFC",
    badge: "display: flow-root",
    css: "display: flow-root;",
    note: "建立新的 BFC，阻止第一個子元素的 margin-top 與父層合併。",
  },
  "overflow-hidden": {
    className: "fix-overflow-hidden",
    label: "BFC",
    badge: "overflow: hidden",
    css: "overflow: hidden;",
    note: "也會建立 BFC，但要注意可能裁切超出父層的內容或陰影。",
  },
  "padding-top": {
    className: "fix-padding-top",
    label: "Padding",
    badge: "padding-top: 1px",
    css: "padding-top: 1px;",
    note: "用極小 padding 阻隔 margin 合併，但會額外改變父層尺寸。",
  },
  "border-top": {
    className: "fix-border-top",
    label: "Border",
    badge: "border-top: transparent",
    css: "border-top: 1px solid transparent;",
    note: "用透明 border 阻隔 margin 合併，但也會額外影響尺寸。",
  },
  none: {
    className: "",
    label: "None",
    badge: "不套用解法",
    css: "/* no padding, border, overflow, or flow-root */",
    note: "沒有阻隔條件，因此會和左側一樣觀察到 margin-top 塌陷。",
  },
};

function px(value) {
  return `${Math.round(value)}px`;
}

function readControls() {
  state.marginBottom = Number(elements.marginBottomInput.value);
  state.marginTop = Number(elements.marginTopInput.value);
  state.childMarginTop = Number(elements.childMarginInput.value);
  state.fixMethod = elements.fixMethodSelect.value;
}

function applyCssVariables() {
  elements.root.style.setProperty("--mb", px(state.marginBottom));
  elements.root.style.setProperty("--mt", px(state.marginTop));
  elements.root.style.setProperty("--child-mt", px(state.childMarginTop));
}

function updateTextOutputs() {
  const naiveGap = state.marginBottom + state.marginTop;
  const theoreticalCollapsedGap = Math.max(state.marginBottom, state.marginTop);
  const fixConfig = fixMethodConfig[state.fixMethod];

  elements.marginBottomOutput.textContent = px(state.marginBottom);
  elements.marginTopOutput.textContent = px(state.marginTop);
  elements.childMarginOutput.textContent = px(state.childMarginTop);
  elements.boxAMarginLabel.textContent = px(state.marginBottom);
  elements.boxBMarginLabel.textContent = px(state.marginTop);
  elements.siblingNaiveGap.textContent = px(naiveGap);
  elements.siblingRuleText.textContent = `max(${px(state.marginBottom)}, ${px(state.marginTop)})`;
  elements.gapRulerOutput.textContent = px(theoreticalCollapsedGap);
  elements.fixMethodLabel.textContent = fixConfig.label;
  elements.fixStatusBadge.textContent = fixConfig.badge;
}

function applyFixMethod() {
  Object.values(fixMethodConfig).forEach((config) => {
    if (config.className) {
      elements.fixedParent.classList.remove(config.className);
    }
  });

  const config = fixMethodConfig[state.fixMethod];
  if (config.className) {
    elements.fixedParent.classList.add(config.className);
  }
}

function measureSiblingGap() {
  const boxARect = elements.siblingBoxA.getBoundingClientRect();
  const boxBRect = elements.siblingBoxB.getBoundingClientRect();
  const gap = Math.max(0, boxBRect.top - boxARect.bottom);

  elements.siblingActualGap.textContent = px(gap);
  elements.gapRulerOutput.textContent = px(gap);

  elements.siblingGapRuler.style.top = `${boxARect.bottom - elements.siblingBoxA.parentElement.getBoundingClientRect().top}px`;
  elements.siblingGapRuler.style.height = `${gap}px`;
}

function measureParentChild(stage, parent, child) {
  const stageLine = stage.querySelector(".stage-line");
  const stageLineRect = stageLine.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();

  return {
    parentOffset: Math.max(0, parentRect.top - stageLineRect.bottom),
    childOffset: Math.max(0, childRect.top - parentRect.top),
  };
}

function updateMeasurements() {
  requestAnimationFrame(() => {
    measureSiblingGap();

    const collapsed = measureParentChild(
      elements.collapseStage,
      elements.collapseParent,
      elements.collapseChild
    );
    const fixed = measureParentChild(
      elements.fixedStage,
      elements.fixedParent,
      elements.fixedChild
    );

    elements.collapseParentOffset.textContent = px(collapsed.parentOffset);
    elements.collapseChildOffset.textContent = px(collapsed.childOffset);
    elements.fixedParentOffset.textContent = px(fixed.parentOffset);
    elements.fixedChildOffset.textContent = px(fixed.childOffset);
  });
}

function updateCodeBlocks() {
  const fixConfig = fixMethodConfig[state.fixMethod];

  elements.siblingCodeBlock.textContent = `.box-a {
  margin-bottom: ${px(state.marginBottom)};
}

.box-b {
  margin-top: ${px(state.marginTop)};
}

/* 正 margin 垂直相鄰時：
   實際距離通常不是 ${px(state.marginBottom)} + ${px(state.marginTop)}，
   而是 max(${px(state.marginBottom)}, ${px(state.marginTop)})。 */`;

  elements.parentCodeBlock.textContent = `.parent {
  background: rgba(37, 99, 235, 0.16);
  /* 沒有 padding、border、overflow 或 flow-root 時，
     第一個子元素的 margin-top 可能會與父層塌陷。 */
}

.child {
  margin-top: ${px(state.childMarginTop)};
}

.parent.is-fixed {
  ${fixConfig.css}
}

/* ${fixConfig.note} */`;
}

function render() {
  readControls();
  applyCssVariables();
  applyFixMethod();
  updateTextOutputs();
  updateCodeBlocks();
  updateMeasurements();
}

function bindEvents() {
  [
    elements.marginBottomInput,
    elements.marginTopInput,
    elements.childMarginInput,
    elements.fixMethodSelect,
  ].forEach((control) => {
    control.addEventListener("input", render);
    control.addEventListener("change", render);
  });

  window.addEventListener("resize", updateMeasurements);
}

bindEvents();
render();
