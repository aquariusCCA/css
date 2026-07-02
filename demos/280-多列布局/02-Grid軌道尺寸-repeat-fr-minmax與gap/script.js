const preview = document.querySelector("#grid-preview");
const output = document.querySelector("#css-output");
const explain = document.querySelector("#explain");
const gapSlider = document.querySelector("#gap-slider");
const gapValue = document.querySelector("#gap-value");
const autoRowToggle = document.querySelector("#auto-row-toggle");
const choices = document.querySelectorAll("[data-template]");

const templates = {
  fixed: {
    className: "template-fixed",
    css: "grid-template-columns: 100px 100px 100px;\ngrid-template-rows: 88px 88px;",
    note: "每一欄都是固定寬度。容器變寬時，欄位不會自動分配剩餘空間。"
  },
  repeat: {
    className: "template-repeat",
    css: "grid-template-columns: repeat(3, 100px);\ngrid-template-rows: repeat(2, 88px);",
    note: "repeat() 不改變結果，只是把重複的軌道尺寸寫得更短、更好維護。"
  },
  fr: {
    className: "template-fr",
    css: "grid-template-columns: 150px 1fr 2fr;\ngrid-template-rows: repeat(2, 88px);",
    note: "第一欄固定 150px，剩餘空間再用 1:2 的比例分給第二欄和第三欄。"
  },
  minmax: {
    className: "template-minmax",
    css: "grid-template-columns: 1fr 1fr minmax(100px, 1fr);\ngrid-template-rows: repeat(2, 88px);",
    note: "minmax() 讓軌道有最小值和最大值，避免欄位小到不可讀。"
  },
  autofill: {
    className: "template-autofill",
    css: "grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\ngrid-template-rows: repeat(2, 88px);",
    note: "auto-fill 會依容器寬度放入盡可能多的欄，適合卡片牆或縮圖列表。"
  }
};

let currentTemplate = "fixed";

function render() {
  const template = templates[currentTemplate];
  preview.className = `grid-preview ${template.className}`;
  preview.classList.toggle("has-auto-rows", autoRowToggle.checked);
  preview.style.setProperty("--gap", `${gapSlider.value}px`);
  gapValue.textContent = `${gapSlider.value}px`;

  const autoRows = autoRowToggle.checked ? "\ngrid-auto-rows: 52px;" : "";
  output.textContent = `.container {\n  display: grid;\n  ${template.css.replace(/\n/g, "\n  ")}\n  gap: ${gapSlider.value}px;${autoRows}\n}`;
  explain.textContent = template.note + (autoRowToggle.checked ? " 第 6 個項目被放到第 4 列，隱式列會使用 grid-auto-rows 的高度。" : " 第 6 個項目被放到第 4 列時，隱式列高度會由內容與瀏覽器自動決定。");
}

choices.forEach((button) => {
  button.addEventListener("click", () => {
    currentTemplate = button.dataset.template;
    choices.forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

gapSlider.addEventListener("input", render);
autoRowToggle.addEventListener("change", render);

render();
