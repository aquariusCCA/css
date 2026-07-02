const cases = {
  good: {
    css: 'body {\n  font-family: Arial, "Microsoft YaHei", "微软雅黑", sans-serif;\n}',
    family: 'Arial, "Microsoft YaHei", "Microsoft JhengHei", sans-serif',
    steps: ["先嘗試 Arial 顯示英文字形。", "遇到中文或缺字時，往後找 Microsoft YaHei。", "再用通用字體族 sans-serif 當最後退路。"],
    result: "完整清單讓跨裝置結果更可預期。"
  },
  single: {
    css: 'body {\n  font-family: Arial;\n}',
    family: "Arial",
    steps: ["只明確指定 Arial。", "中文字形仍可能 fallback，但策略交給瀏覽器自行判斷。"],
    result: "只寫一個字體，中文與不同裝置的結果較不可控。"
  },
  comma: {
    css: 'body {\n  font-family: Arial，"Microsoft YaHei"，sans-serif;\n}',
    family: "Arial，Microsoft YaHei，sans-serif",
    steps: ["中文逗號不是 CSS 字體清單分隔符。", "瀏覽器可能把整段當成奇怪的單一字體名稱。"],
    result: "多個字體之間應使用英文逗號。"
  },
  generic: {
    css: 'body {\n  font-family: "Some Custom Font";\n}',
    family: '"Some Custom Font"',
    steps: ["只指定一個可能不存在的具名字體。", "瀏覽器仍會 fallback，但你沒有說明希望落在哪類字體。"],
    result: "清單最後建議補上 serif、sans-serif 或 monospace。"
  }
};
const buttons = document.querySelectorAll("[data-case]");
const sample = document.querySelector("#sampleText");
const code = document.querySelector("#codeBlock");
const steps = document.querySelector("#steps");
const result = document.querySelector("#resultText");
function render(key) {
  const item = cases[key];
  sample.style.fontFamily = item.family;
  code.textContent = item.css;
  result.textContent = item.result;
  steps.replaceChildren(...item.steps.map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }));
  buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.case === key));
}
buttons.forEach((button) => button.addEventListener("click", () => render(button.dataset.case)));
render("good");
