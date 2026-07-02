const data = {
  "400": { value: "400", css: ".text {\n  font-weight: 400;\n}", note: "400 通常代表正常粗細，與 normal 的常見效果相近。" },
  "700": { value: "700", css: ".text {\n  font-weight: 700;\n}", note: "700 通常代表加粗，與 bold 的常見效果相近。" },
  "500": { value: "500", css: ".text {\n  font-weight: 500;\n}", note: "500 是有效數字字重，但是否看得出差異取決於字體是否支援。" },
  normal: { value: "400", css: ".text {\n  font-weight: normal;\n}", note: "normal 通常等同 400，適合一般正文。" },
  bold: { value: "700", css: ".text {\n  font-weight: bold;\n}", note: "bold 通常等同 700，適合需要突出的重點。" },
  invalid: { value: "400", css: ".text {\n  font-weight: 700px;\n}", note: "font-weight 的數字不是長度，不能加 px、rem 或其他單位。" }
};
const buttons = document.querySelectorAll("[data-weight]");
const sample = document.querySelector("#sample");
const code = document.querySelector("#codeBlock");
const note = document.querySelector("#note");
const scale = document.querySelector("#scale");
const limited = document.querySelector("#limitedFont");
let current = "400";
function render() {
  const item = data[current];
  const shown = limited.checked && item.value === "500" ? "400" : item.value;
  sample.style.fontWeight = shown;
  code.textContent = item.css;
  note.textContent = limited.checked && item.value === "500"
    ? `${item.note} 目前模擬字體不支援 500，所以瀏覽器用接近的 400 顯示。`
    : item.note;
  scale.replaceChildren(...[100,200,300,400,500,600,700,800,900].map((value) => {
    const span = document.createElement("span");
    span.textContent = value;
    span.classList.toggle("active", String(value) === shown);
    return span;
  }));
  buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.weight === current));
}
buttons.forEach((button) => button.addEventListener("click", () => { current = button.dataset.weight; render(); }));
limited.addEventListener("change", render);
render();
