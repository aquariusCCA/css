const cases = {
  default: {
    cls: "",
    css: "/* 瀏覽器預設 */\nem {\n  font-style: italic;\n}",
    note: "<em> 表示語意強調，瀏覽器通常會讓它呈現斜體。",
    points: ["語意和視覺常一起出現。", "但它們不是同一件事。"]
  },
  reset: {
    cls: "reset",
    css: "em {\n  font-style: normal;\n}",
    note: "如果設計不希望 em 傾斜，可以保留語意，再用 CSS 改視覺。",
    points: ["不需要把 em 改成 span。", "font-style: normal 只改變呈現。"]
  },
  visual: {
    cls: "visual",
    css: ".text-italic {\n  font-style: italic;\n}",
    note: "若只是想做視覺斜體，可以用 class 搭配 CSS，不必濫用語意標籤。",
    points: ["HTML 決定語意。", "CSS 決定是否傾斜。"]
  },
  overuse: {
    cls: "overuse",
    css: ".article {\n  font-style: italic;\n}",
    note: "大段斜體文字會降低可讀性，通常只適合短字詞或局部強調。",
    points: ["斜體不是萬用重點樣式。", "大量使用會讓頁面失去節奏。"]
  }
};
const buttons = document.querySelectorAll("[data-case]");
const sample = document.querySelector("#sample");
const code = document.querySelector("#codeBlock");
const note = document.querySelector("#note");
const points = document.querySelector("#points");
function render(key) {
  const item = cases[key];
  sample.className = `sample ${item.cls}`.trim();
  code.textContent = item.css;
  note.textContent = item.note;
  points.replaceChildren(...item.points.map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }));
  buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.case === key));
}
buttons.forEach((button) => button.addEventListener("click", () => render(button.dataset.case)));
render("default");
