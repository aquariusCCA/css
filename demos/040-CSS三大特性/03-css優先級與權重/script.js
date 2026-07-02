const cases = {
  id: {
    className: "case-id",
    code: `.text {
  color: red;
}

#box {
  color: green;
}`,
    ruleA: ".text",
    tupleA: [0, 0, 1, 0],
    ruleB: "#box",
    tupleB: [0, 1, 0, 0],
    leadingIndex: 1,
    result: "最後顯示綠色，因為 ID 選擇器在第二欄先勝出。",
    decision: "比較 specificity 時由左到右看。第二欄 ID 的 1 已經大於 class 所在第三欄，不需要把後面欄位相加。"
  },
  many: {
    className: "case-many",
    code: `div div div div div div div {
  color: red;
}

.one {
  color: green;
}`,
    ruleA: "div div div div div div div",
    tupleA: [0, 0, 0, 7],
    ruleB: ".one",
    tupleB: [0, 0, 1, 0],
    leadingIndex: 2,
    result: "最後顯示綠色，因為一個 class 仍然高於很多個元素選擇器。",
    decision: "權重不會進位，(0,0,0,7) 不會變成 (0,0,1,0)。第三欄先分出勝負。"
  },
  tie: {
    className: "case-tie",
    code: `div #box {
  color: green;
}

#father div {
  color: blue;
}`,
    ruleA: "div #box",
    tupleA: [0, 1, 0, 1],
    ruleB: "#father div",
    tupleB: [0, 1, 0, 1],
    leadingIndex: -1,
    result: "最後顯示藍色，因為兩條規則權重完全相同，後宣告勝出。",
    decision: "當 important、來源與 specificity 都相同時，才回到層疊順序，由後面宣告的規則覆蓋前面。"
  },
  important: {
    className: "case-important",
    code: `#father {
  color: red !important;
}

.box {
  color: purple;
}`,
    ruleA: "#father 的繼承值",
    tupleA: [0, 0, 0, 0],
    ruleB: ".box 直接選中",
    tupleB: [0, 0, 1, 0],
    leadingIndex: 2,
    result: "最後顯示紫色，因為子元素被 .box 直接選中。",
    decision: "父元素的 color 即使用了 !important，傳到子元素時仍是繼承值；直接作用在子元素上的宣告優先於繼承值。"
  }
};

const labels = ["行內", "ID", "類/屬性/偽類", "元素/偽元素"];
const buttons = document.querySelectorAll(".preset-button");
const stage = document.querySelector("#stage");
const cssCode = document.querySelector("#cssCode");
const ruleAName = document.querySelector("#ruleAName");
const ruleBName = document.querySelector("#ruleBName");
const tupleA = document.querySelector("#tupleA");
const tupleB = document.querySelector("#tupleB");
const resultText = document.querySelector("#resultText");
const decisionText = document.querySelector("#decisionText");

function tupleMarkup(values, leadingIndex) {
  return values.map((value, index) => {
    const active = index === leadingIndex ? " is-leading" : "";
    return `<div class="tuple-cell${active}">
      <span class="tuple-label">${labels[index]}</span>
      <span class="tuple-value">${value}</span>
    </div>`;
  }).join("");
}

function render(key) {
  const data = cases[key];
  stage.className = `stage ${data.className}`;
  cssCode.textContent = data.code;
  ruleAName.textContent = `規則 A：${data.ruleA}`;
  ruleBName.textContent = `規則 B：${data.ruleB}`;
  tupleA.innerHTML = tupleMarkup(data.tupleA, data.leadingIndex);
  tupleB.innerHTML = tupleMarkup(data.tupleB, data.leadingIndex);
  resultText.textContent = data.result;
  decisionText.textContent = data.decision;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.toggle("is-active", item === button));
    render(button.dataset.case);
  });
});

render("id");
