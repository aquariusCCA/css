const strategyButtons = [...document.querySelectorAll(".strategy")];
const preview = document.querySelector("#preview");
const codeOutput = document.querySelector("#codeOutput");
const stateNote = document.querySelector("#stateNote");

const strategies = {
  browser: {
    code: `/* 瀏覽器預設 */
body {
  margin: 8px;
}

h1,
p {
  margin-block: 1em;
}`,
    note: "預設樣式讓 HTML 可讀，但不同元素會帶著隱性間距與外觀。"
  },
  reset: {
    code: `/* reset.css 的典型方向 */
* {
  margin: 0;
  padding: 0;
}

button,
input {
  font: inherit;
}`,
    note: "reset.css 接近白紙，後續需要自己重建可讀性、間距與元件外觀。"
  },
  normalize: {
    code: `/* Normalize.css 的代表性片段 */
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

main {
  display: block;
}

button,
input {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}`,
    note: "Normalize.css 不是清空一切，而是保留合理預設並修正差異。"
  },
  project: {
    code: `<link rel="stylesheet" href="./normalize.css">
<link rel="stylesheet" href="./styles.css">

/* styles.css */
h1 {
  margin: 0 0 16px;
  font-size: 1.75rem;
  line-height: 1.25;
}`,
    note: "Normalize.css 建立一致基礎；真正的版面與元件樣式由專案 CSS 覆蓋。"
  }
};

function render(strategy) {
  strategyButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.strategy === strategy);
  });
  preview.dataset.strategy = strategy;
  codeOutput.textContent = strategies[strategy].code;
  stateNote.textContent = strategies[strategy].note;
}

strategyButtons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.strategy));
});

render("browser");
