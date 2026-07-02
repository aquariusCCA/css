const modes = {
  none: {
    title: "父容器沒有建立新的 BFC",
    note: "float 子元素不會撐開父容器高度，邊框看起來像貼在頂部。",
    code: `.container {
  border: 4px solid #263238;
}`
  },
  "flow-root": {
    title: "display: flow-root 建立新的 BFC",
    note: "父容器建立 BFC 後，會把內部 float 納入高度計算，是語意清楚的現代寫法。",
    code: `.container {
  display: flow-root;
}`
  },
  overflow: {
    title: "overflow: hidden 也會建立 BFC",
    note: "它能包住 float，但同時可能裁切溢出內容；只為建立 BFC 時要留意副作用。",
    code: `.container {
  overflow: hidden;
}`
  },
  "inline-block": {
    title: "display: inline-block 會建立 BFC",
    note: "inline-block 自身會形成新的格式化環境，但也會改變元素的外部顯示方式。",
    code: `.container {
  display: inline-block;
}`
  }
};

const buttons = document.querySelectorAll(".mode-button");
const floatContainer = document.querySelector("#floatContainer");
const modeTitle = document.querySelector("#modeTitle");
const modeNote = document.querySelector("#modeNote");
const modeCode = document.querySelector("#modeCode");
const bfcLab = document.querySelector(".bfc-lab");

function setMode(mode) {
  const selected = modes[mode];
  floatContainer.className = `float-container mode-${mode}`;
  bfcLab.dataset.currentMode = mode;
  modeTitle.textContent = selected.title;
  modeNote.textContent = selected.note;
  modeCode.textContent = selected.code;

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
    button.setAttribute("aria-pressed", String(button.dataset.mode === mode));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

setMode("none");
