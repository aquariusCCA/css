const scenarios = {
  same: {
    code: `div {
  color: red;
  font-size: 12px;
}

div {
  color: pink;
}`,
    reversedCode: `div {
  color: pink;
  font-size: 12px;
}

div {
  color: red;
}`,
    sameElement: "是",
    sameProperty: "是",
    winner: "color: pink;",
    reversedWinner: "color: red;",
    reason: "兩條規則都選中同一個 div，也都設定 color；重要性、來源、選擇器優先級都相同，所以後宣告的 color 會覆蓋前宣告。",
    reversedReason: "交換順序後，條件仍然相同，只是最後出現的 color 變成 red，因此紅色勝出。"
  },
  different: {
    code: `div {
  color: red;
}

div {
  font-size: 24px;
}`,
    reversedCode: `div {
  font-size: 24px;
}

div {
  color: red;
}`,
    sameElement: "是",
    sameProperty: "否",
    winner: "兩條都生效",
    reason: "雖然兩條規則選中同一個元素，但它們設定的是不同屬性，所以不構成同一屬性的衝突，color 與 font-size 會同時生效。"
  },
  specificity: {
    code: `.text {
  color: red;
}

div {
  color: pink;
}`,
    reversedCode: `div {
  color: pink;
}

.text {
  color: red;
}`,
    sameElement: "是",
    sameProperty: "是",
    winner: ".text 的 color",
    reason: "兩條規則都設定 color，但 .text 類選擇器的優先級高於 div 標籤選擇器，所以不能只看誰寫在後面。"
  }
};

const buttons = document.querySelectorAll(".scenario-button");
const stage = document.querySelector("#stage");
const cssCode = document.querySelector("#cssCode");
const sameElement = document.querySelector("#sameElement");
const sameProperty = document.querySelector("#sameProperty");
const winner = document.querySelector("#winner");
const reasonText = document.querySelector("#reasonText");
const orderToggle = document.querySelector(".order-toggle");

let currentScenario = "same";
let reversed = false;

function render() {
  const data = scenarios[currentScenario];
  const canReverse = currentScenario !== "different";
  orderToggle.disabled = !canReverse;
  orderToggle.setAttribute("aria-pressed", String(reversed && canReverse));
  orderToggle.textContent = reversed && canReverse ? "恢復宣告順序" : "交換宣告順序";

  stage.className = `stage scenario-${currentScenario}`;
  if (reversed && canReverse) {
    stage.classList.add("is-reversed");
  }

  cssCode.textContent = reversed && data.reversedCode ? data.reversedCode : data.code;
  sameElement.textContent = data.sameElement;
  sameProperty.textContent = data.sameProperty;
  winner.textContent = reversed && data.reversedWinner ? data.reversedWinner : data.winner;
  reasonText.textContent = reversed && data.reversedReason ? data.reversedReason : data.reason;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentScenario = button.dataset.scenario;
    reversed = false;
    buttons.forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

orderToggle.addEventListener("click", () => {
  reversed = !reversed;
  render();
});

render();
