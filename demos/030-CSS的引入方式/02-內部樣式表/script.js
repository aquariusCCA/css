const buttons = [...document.querySelectorAll(".mode-button")];
const codeOutput = document.querySelector("#codeOutput");
const pagePreview = document.querySelector("#pagePreview");
const scopeNote = document.querySelector("#scopeNote");

const notes = {
  "p": "規則會套用到目前頁面中所有符合 p 選擇器的元素。",
  ".notice": "規則只套用到目前頁面中 class 為 notice 的元素。",
  "h2": "規則集中寫一次，就能控制目前頁面中符合 h2 的元素。"
};

function render(selector) {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.selector === selector);
  });
  pagePreview.dataset.selector = selector;
  codeOutput.textContent = `<!doctype html>
<html lang="zh-Hant">
<head>
  <style>
    ${selector} {
      color: #db2777;
      font-size: 1.25rem;
    }
  </style>
</head>
<body>
  <h2>春季活動</h2>
  <p>第一段內容會依選擇器變化。</p>
  <p class="notice">這一段有 notice class。</p>
  <div>這個 div 沒有被目前規則選到。</div>
</body>
</html>`;
  scopeNote.textContent = notes[selector];
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.selector));
});

render("p");
