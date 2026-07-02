const modes = {
  prefixed: {
    label: "只寫前綴",
    cardClass: "is-prefixed",
    css: `.card {
  -webkit-border-radius: 24px;
}`,
    stack: [
      { text: "-webkit-border-radius 只照顧舊 WebKit 實作。", type: "warn" }
    ],
    status: {
      modern: ["可能缺少標準退路", "沒有標準宣告", "未參與"],
      legacy: ["舊 WebKit 可讀", "其他舊瀏覽器不一定", "未參與"]
    },
    decision: {
      modernTitle: "這不是完整的跨瀏覽器寫法",
      legacyTitle: "只押單一前綴風險很高",
      modernText: "只寫前綴版本時，程式碼把希望放在特定瀏覽器實作上，沒有提供正式標準寫法作為穩定目標。",
      legacyText: "舊 WebKit 可能讀得到這條宣告，但 Firefox、IE 或其他舊實作不會因為 -webkit- 就自動支援。",
      checks: [
        ["bad", "缺少不帶前綴的標準屬性。"],
        ["warn", "只代表某一家瀏覽器的舊實作，不等於跨瀏覽器相容。"],
        ["warn", "適合用來閱讀舊程式碼，不適合當成新專案的預設寫法。"]
      ]
    }
  },
  compatible: {
    label: "前綴加標準",
    cardClass: "is-compatible",
    css: `.card {
  -moz-border-radius: 24px;
  -webkit-border-radius: 24px;
  -o-border-radius: 24px;
  border-radius: 24px;
}`,
    stack: [
      { text: "-moz-border-radius 提供舊 Firefox 實作退路。", type: "warn" },
      { text: "-webkit-border-radius 提供舊 WebKit 實作退路。", type: "warn" },
      { text: "-o-border-radius 提供舊 Presto Opera 實作退路。", type: "warn" },
      { text: "border-radius 放最後，讓支援標準的瀏覽器採用正式寫法。", type: "standard" }
    ],
    status: {
      modern: ["可略過舊前綴", "採用標準寫法", "可協助清理"],
      legacy: ["有舊實作退路", "標準放最後", "可重新產生"]
    },
    decision: {
      modernTitle: "順序正確，但現代專案未必需要手寫",
      legacyTitle: "這是典型歷史相容寫法",
      modernText: "標準屬性放在最後，符合 CSS 來源順序的覆蓋規則；現代專案通常會讓工具決定是否保留前綴。",
      legacyText: "若支援目標真的包含舊瀏覽器，前綴宣告可以作為退路，最後的標準宣告則保留正式寫法。",
      checks: [
        ["ok", "有保留不帶前綴的標準屬性。"],
        ["ok", "標準寫法放在最後，讓支援標準的瀏覽器優先採用。"],
        ["warn", "是否需要這些舊前綴仍應由支援目標判斷。"]
      ]
    }
  },
  tooling: {
    label: "工具管理",
    cardClass: "is-tooling",
    css: `.card {
  border-radius: 24px;
}

/* Browserslist + Autoprefixer:
   依專案支援目標補上或移除必要前綴 */`,
    stack: [
      { text: "原始 CSS 先寫標準屬性。", type: "standard" },
      { text: "Browserslist 描述支援範圍。", type: "standard" },
      { text: "Autoprefixer 依支援範圍產生必要前綴。", type: "standard" }
    ],
    status: {
      modern: ["不需手寫前綴", "採用標準寫法", "判定不需要"],
      legacy: ["工具會判斷", "標準仍保留", "補必要前綴"]
    },
    decision: {
      modernTitle: "現代專案的建議工作流",
      legacyTitle: "支援舊瀏覽器時也交給工具判斷",
      modernText: "先撰寫標準 CSS，再讓工具依 Browserslist 決定是否需要前綴，可以避免記憶歷史支援細節。",
      legacyText: "當支援範圍包含舊瀏覽器時，工具能補上必要前綴；支援範圍更新後，也能移除不再需要的宣告。",
      checks: [
        ["ok", "原始碼維持標準寫法，較容易閱讀與維護。"],
        ["ok", "是否補前綴由支援目標決定，不靠猜測。"],
        ["ok", "支援範圍更新時，可以讓工具重新整理輸出。"]
      ]
    }
  }
};

let currentMode = "prefixed";
let currentTarget = "modern";

const modeButtons = document.querySelectorAll("[data-mode]");
const targetButtons = document.querySelectorAll("[data-target]");
const sampleCard = document.querySelector("#sampleCard");
const cssOutput = document.querySelector("#cssOutput");
const modeBadge = document.querySelector("#modeBadge");
const ruleStack = document.querySelector("#ruleStack");
const decisionTitle = document.querySelector("#decisionTitle");
const decisionText = document.querySelector("#decisionText");
const checklist = document.querySelector("#checklist");
const webkitStatus = document.querySelector("#webkitStatus");
const standardStatus = document.querySelector("#standardStatus");
const toolStatus = document.querySelector("#toolStatus");

function setActive(buttons, attribute, value) {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset[attribute] === value);
  });
}

function render() {
  const mode = modes[currentMode];
  const targetKey = currentTarget === "legacy" ? "legacy" : "modern";
  const statuses = mode.status[targetKey];
  const decision = mode.decision;

  sampleCard.className = `sample-card ${mode.cardClass}`;
  cssOutput.textContent = mode.css;
  modeBadge.textContent = mode.label;
  webkitStatus.textContent = statuses[0];
  standardStatus.textContent = statuses[1];
  toolStatus.textContent = statuses[2];

  decisionTitle.textContent = decision[`${targetKey}Title`];
  decisionText.textContent = decision[`${targetKey}Text`];

  ruleStack.replaceChildren(
    ...mode.stack.map((item) => {
      const li = document.createElement("li");
      li.textContent = item.text;
      li.className = item.type;
      return li;
    })
  );

  checklist.replaceChildren(
    ...decision.checks.map(([type, text]) => {
      const li = document.createElement("li");
      li.textContent = text;
      li.className = type === "ok" ? "" : type;
      li.dataset.mark = type === "ok" ? "✓" : "!";
      return li;
    })
  );
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentMode = button.dataset.mode;
    setActive(modeButtons, "mode", currentMode);
    render();
  });
});

targetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentTarget = button.dataset.target;
    setActive(targetButtons, "target", currentTarget);
    render();
  });
});

render();
