const modeSelect = document.querySelector("#modeSelect");
const sizeRange = document.querySelector("#sizeRange");
const colorSelect = document.querySelector("#colorSelect");
const codeOutput = document.querySelector("#codeOutput");
const previewBox = document.querySelector("#previewBox");
const resultNote = document.querySelector("#resultNote");

function inlineStyle() {
  return `color: ${colorSelect.value}; font-size: ${sizeRange.value}px;`;
}

function row(text, styled) {
  const style = styled ? ` style="${inlineStyle()}"` : "";
  return `<p${style}>${text}</p>`;
}

function render() {
  const mode = modeSelect.value;
  const lines = [
    row("第一段文字", mode === "single" || mode === "repeat"),
    row("第二段文字", mode === "repeat"),
    row("第三段文字", mode === "repeat")
  ];

  codeOutput.textContent = lines.join("\n");
  previewBox.innerHTML = "";
  lines.forEach((line) => {
    const template = document.createElement("template");
    template.innerHTML = line;
    previewBox.append(template.content.firstElementChild);
  });

  const notes = {
    single: "行內樣式只影響寫了 style 屬性的那一個標籤。",
    none: "沒有 style 屬性時，三段文字都使用瀏覽器與頁面原本的樣式。",
    repeat: "同樣樣式要寫三次；修改時也常常要找三個地方。"
  };
  resultNote.textContent = notes[mode];
}

[modeSelect, sizeRange, colorSelect].forEach((control) => {
  control.addEventListener("input", render);
});

render();
