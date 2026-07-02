const pathButtons = [...document.querySelectorAll(".path-button")];
const tabs = [...document.querySelectorAll(".tab")];
const fileCode = document.querySelector("#fileCode");
const pageStrip = document.querySelector("#pageStrip");
const statusText = document.querySelector("#statusText");

let currentPath = "./style.css";
let currentFile = "html";

function htmlCode() {
  return `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>外部樣式表</title>
  <link rel="stylesheet" href="${currentPath}">
</head>
<body>
  <h1>首頁內容</h1>
</body>
</html>`;
}

function cssCode() {
  return `/* style.css */
h1,
h3 {
  color: #0f766e;
}

section {
  border-color: #99f6e4;
  background: #ecfdf5;
}`;
}

function render() {
  pathButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.path === currentPath);
  });
  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.file === currentFile);
  });

  fileCode.textContent = currentFile === "html" ? htmlCode() : cssCode();
  const linked = currentPath === "./style.css";
  pageStrip.classList.toggle("linked", linked);
  statusText.classList.toggle("ok", linked);
  statusText.textContent = linked
    ? "路徑正確：三個頁面都能共用同一份 style.css。"
    : "路徑不正確：瀏覽器找不到指定的 CSS，樣式不會套用。";
}

pathButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentPath = button.dataset.path;
    currentFile = "html";
    render();
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentFile = tab.dataset.file;
    render();
  });
});

render();
