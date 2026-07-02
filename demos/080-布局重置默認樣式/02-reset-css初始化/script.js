const checks = [...document.querySelectorAll(".control-grid input")];
const preview = document.querySelector("#preview");
const codeOutput = document.querySelector("#codeOutput");
const stateNote = document.querySelector("#stateNote");

const ruleMap = {
  spacing: {
    className: "reset-spacing",
    code: `body,
h1,
h2,
h3,
p,
ul,
ol,
li {
  margin: 0;
  padding: 0;
}`,
    note: "清除內外距後，元素不再帶著瀏覽器預設間距。"
  },
  list: {
    className: "reset-list",
    code: `ul,
ol {
  list-style: none;
}`,
    note: "導覽列或卡片清單常需要移除預設符號。"
  },
  image: {
    className: "reset-image",
    code: `img {
  border: 0;
  vertical-align: middle;
}`,
    note: "圖片 reset 常用來減少舊邊框或 inline 底部空隙。"
  },
  link: {
    className: "reset-link",
    code: `a {
  color: #475569;
  text-decoration: none;
}`,
    note: "連結可以統一外觀，但要另外保留 hover、focus 等可用性提示。"
  },
  form: {
    className: "reset-form",
    code: `button,
input,
select,
textarea {
  font: inherit;
}`,
    note: "表單字型繼承頁面文字，能減少瀏覽器預設外觀差異。"
  }
};

function render() {
  const active = checks.filter((check) => check.checked).map((check) => check.value);
  Object.values(ruleMap).forEach((rule) => preview.classList.remove(rule.className));
  active.forEach((key) => preview.classList.add(ruleMap[key].className));

  codeOutput.textContent = active.length
    ? active.map((key) => ruleMap[key].code).join("\n\n")
    : "/* 尚未選擇 reset 規則 */";
  stateNote.textContent = active.length
    ? ruleMap[active[active.length - 1]].note
    : "reset.css 只做初始化；真正的版面與元件設計應該放在後續 CSS。";
}

checks.forEach((check) => check.addEventListener("input", render));
render();
