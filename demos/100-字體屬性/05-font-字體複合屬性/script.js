const cases = {
  full: {
    css: 'div {\n  font: italic 700 16px/1.5 "Microsoft YaHei", "微软雅黑", sans-serif;\n}',
    font: 'italic 700 16px/1.5 "Microsoft JhengHei", sans-serif',
    base: false,
    result: "有效：樣式、粗細、大小/行高、字體系列都在正確位置。",
    tokens: [["italic 設定 font-style", false], ["700 設定 font-weight", false], ["16px/1.5 同時設定 font-size 與 line-height", false], ["字體系列放在最後", false]]
  },
  missing: {
    css: ".title {\n  font: italic 700 16px;\n}",
    font: "",
    base: false,
    result: "無效：font 簡寫至少要有 font-size 與 font-family。",
    tokens: [["有 font-style", false], ["有 font-weight", false], ["有 font-size", false], ["缺少 font-family，整條宣告失效", true]]
  },
  order: {
    css: ".text {\n  font: Arial 16px;\n}",
    font: "",
    base: false,
    result: "無效：字體系列必須放在 font-size 後面，通常在最後。",
    tokens: [["Arial 被放到前面", true], ["16px 在後面", false], ["語法順序不符合 font 簡寫要求", true]]
  },
  line: {
    css: ".article {\n  font: 16px Arial, sans-serif / 1.6;\n}",
    font: "",
    base: false,
    result: "無效或不可預期：line-height 必須緊接 font-size，寫成 16px/1.6。",
    tokens: [["16px 是 font-size", false], ["/1.6 被放在字體系列後面", true], ["正確位置應是 font-size/line-height", true]]
  },
  reset: {
    css: ".card {\n  font-style: italic;\n  font-weight: 700;\n  font: 16px Arial, sans-serif;\n}",
    font: "16px Arial, sans-serif",
    base: true,
    result: "有效但會重設：最後的 font 簡寫沒有寫 italic 與 700，所以它們回到初始值。",
    tokens: [["前兩行先設定 italic 與 700", false], ["font: 16px Arial, sans-serif 有大小與字體", false], ["省略的 font-style 與 font-weight 被重設", true]]
  }
};
const buttons = document.querySelectorAll("[data-case]");
const sample = document.querySelector("#sample");
const code = document.querySelector("#codeBlock");
const tokens = document.querySelector("#tokens");
const result = document.querySelector("#result");
function render(key) {
  const item = cases[key];
  sample.className = item.base ? "sample reset-base" : "sample";
  sample.style.font = item.font || "";
  code.textContent = item.css;
  result.textContent = item.result;
  tokens.replaceChildren(...item.tokens.map(([text, bad]) => {
    const li = document.createElement("li");
    li.textContent = text;
    li.classList.toggle("bad", bad);
    return li;
  }));
  buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.case === key));
}
buttons.forEach((button) => button.addEventListener("click", () => render(button.dataset.case)));
render("full");
