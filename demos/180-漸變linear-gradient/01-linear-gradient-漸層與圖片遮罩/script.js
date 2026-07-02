const interactiveCard = document.querySelector("#interactive-card");
const toggleMask = document.querySelector("#toggle-mask");
const toggleZoom = document.querySelector("#toggle-zoom");
const fixPreview = document.querySelector("#fix-preview");
const modeLabel = document.querySelector("#mode-label");
const diagnosticNote = document.querySelector("#diagnostic-note");

const notes = {
  correct: {
    label: "正確設定",
    text: "`.box` 有 `position: relative`，遮罩和文字能以卡片為基準定位；圖片放大時也會被裁切在卡片內。"
  },
  "no-relative": {
    label: "缺少 position: relative",
    text: "絕對定位元素失去卡片作為定位基準，遮罩和文字容易跑到預期區域之外。"
  },
  "no-overflow": {
    label: "缺少 overflow: hidden",
    text: "圖片 hover 放大後不會被卡片裁切，會超出原本的圖片框。"
  },
  "low-z": {
    label: "文字 z-index 太低",
    text: "遮罩層疊在文字上方時，文字會被壓暗甚至被遮住。"
  }
};

function syncInteractiveCard() {
  interactiveCard.classList.toggle("is-mask-on", toggleMask.checked);
  interactiveCard.classList.toggle("force-mask", toggleMask.checked);
  interactiveCard.classList.toggle("is-zoom-on", toggleZoom.checked);
}

function setDiagnosticMode(mode) {
  fixPreview.dataset.mode = mode;
  modeLabel.textContent = notes[mode].label;
  diagnosticNote.textContent = notes[mode].text;
}

toggleMask.addEventListener("change", syncInteractiveCard);
toggleZoom.addEventListener("change", syncInteractiveCard);

document.querySelectorAll("input[name='mode']").forEach((input) => {
  input.addEventListener("change", () => setDiagnosticMode(input.value));
});

syncInteractiveCard();
