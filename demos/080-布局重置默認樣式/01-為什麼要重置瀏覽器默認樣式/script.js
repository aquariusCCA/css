const buttons = [...document.querySelectorAll(".mode-button")];
const samplePage = document.querySelector("#samplePage");
const codeOutput = document.querySelector("#codeOutput");
const stateNote = document.querySelector("#stateNote");

const states = {
  default: {
    code: `/* 沒有撰寫 CSS 時，瀏覽器仍會提供默認樣式 */
body {
  margin: 8px;
}

p,
h1,
ul {
  margin-block-start: 1em;
  margin-block-end: 1em;
}

ul {
  padding-inline-start: 40px;
}`,
    note: "預設樣式讓純 HTML 可讀，但也可能讓布局多出隱性間距。"
  },
  "simple-reset": {
    code: `* {
  margin: 0;
  padding: 0;
}`,
    note: "簡單重置能清掉間距，讓版面起點更可控，但它不是完整策略。"
  },
  "over-reset": {
    code: `* {
  margin: 0;
  padding: 0;
  color: blue;
}`,
    note: "過度全局規則會把連結、按鈕等元素也一起改掉，容易帶來副作用。"
  }
};

function render(mode) {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
  samplePage.dataset.mode = mode;
  codeOutput.textContent = states[mode].code;
  stateNote.textContent = states[mode].note;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.mode));
});

render("default");
