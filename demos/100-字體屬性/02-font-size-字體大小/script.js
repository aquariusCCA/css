const cases = {
  base: { size: "16px", override: false, meter: "56%", css: "body {\n  font-size: 16px;\n}", note: "body 建立基礎字號，多數普通文字會繼承；標題仍有瀏覽器預設大小。" },
  rem: { size: "1rem", override: false, meter: "56%", css: ".intro {\n  font-size: 1rem;\n}", note: "1rem 會依根元素字號換算，常用於和整體基準保持一致。" },
  percent: { size: "90%", override: false, meter: "48%", css: ".note {\n  font-size: 90%;\n}", note: "百分比會依父層字號計算，適合做局部文字縮放。" },
  invalid: { size: "", override: false, meter: "12%", css: "p {\n  font-size: 16;\n}", note: "非 0 數值漏掉單位時，這條 font-size 宣告會被視為無效。" },
  heading: { size: "16px", override: true, meter: "56%", css: "body {\n  font-size: 16px;\n}\n\nh2 {\n  font-size: 16px;\n}", note: "若設計要求 h2 和正文同大小，需要另外覆蓋標題預設字號。" }
};
const buttons = document.querySelectorAll("[data-case]");
const article = document.querySelector("#article");
const code = document.querySelector("#codeBlock");
const note = document.querySelector("#note");
const meter = document.querySelector("#meter");
function render(key) {
  const item = cases[key];
  article.style.fontSize = item.size || "16px";
  article.classList.toggle("override", item.override);
  code.textContent = item.css;
  note.textContent = item.note;
  meter.style.width = item.meter;
  buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.case === key));
}
buttons.forEach((button) => button.addEventListener("click", () => render(button.dataset.case)));
render("base");
