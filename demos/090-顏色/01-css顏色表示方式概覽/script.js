const modes = {
  named: {
    color: "rebeccapurple",
    badge: "named color",
    title: "快速看見樣式",
    text: "具名顏色容易閱讀，適合初學與臨時測試。",
    code: `.notice {
  background-color: rebeccapurple;
  color: white;
}`,
    bestFor: "快速測試、教學範例、暫時標示狀態。",
    caution: "名稱數量固定，不適合精準還原任意設計稿顏色。"
  },
  hex: {
    color: "#ff6b2c",
    badge: "HEX",
    title: "直接貼上設計稿色碼",
    text: "HEX 短而常見，很適合靜態色票與設計交付。",
    code: `.button {
  background-color: #ff6b2c;
  color: white;
}`,
    bestFor: "設計稿提供色碼、建立固定品牌色票。",
    caution: "不利於手動理解紅、綠、藍通道。"
  },
  rgb: {
    color: "rgb(48, 126, 204)",
    badge: "RGB",
    title: "看見紅綠藍通道",
    text: "RGB 把紅、綠、藍拆成 0 到 255 的通道值。",
    code: `.panel {
  background-color: rgb(48, 126, 204);
  color: white;
}`,
    bestFor: "需要理解或調整紅、綠、藍通道。",
    caution: "想調整明暗或同色系變化時，HSL 通常更直覺。"
  },
  alpha: {
    color: "rgb(48 126 204 / 45%)",
    badge: "alpha",
    title: "半透明背景",
    text: "alpha 讓底下背景透出來，適合遮罩與提示層。",
    code: `.overlay {
  background-color: rgb(48 126 204 / 45%);
  color: white;
}`,
    bestFor: "半透明遮罩、浮層背景、疊色效果。",
    caution: "透明度會受底色影響，視覺結果不只由前景色決定。"
  },
  hsl: {
    color: "hsl(210 70% 50%)",
    badge: "HSL",
    title: "依色相、飽和度、亮度思考",
    text: "HSL 很適合用同一個 hue 做深淺或鮮豔程度變化。",
    code: `.button {
  background-color: hsl(210 70% 50%);
}

.button:hover {
  background-color: hsl(210 70% 42%);
}`,
    bestFor: "調整同色系的明暗、飽和度與互動狀態。",
    caution: "需要先理解 hue、saturation、lightness 分別控制什麼。"
  }
};

const buttons = document.querySelectorAll(".scenario-button");
const cards = document.querySelectorAll(".format-grid article");
const stage = document.querySelector("#demoStage");
const sampleBadge = document.querySelector("#sampleBadge");
const sampleTitle = document.querySelector("#sampleTitle");
const sampleText = document.querySelector("#sampleText");
const cssCode = document.querySelector("#cssCode");
const bestFor = document.querySelector("#bestFor");
const caution = document.querySelector("#caution");

function render(mode) {
  const data = modes[mode];
  stage.className = `demo-stage mode-${mode}`;
  document.documentElement.style.setProperty("--stage-color", data.color);
  sampleBadge.textContent = data.badge;
  sampleTitle.textContent = data.title;
  sampleText.textContent = data.text;
  cssCode.textContent = data.code;
  bestFor.textContent = data.bestFor;
  caution.textContent = data.caution;
  buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === mode));
  cards.forEach((card) => card.classList.toggle("is-active", card.dataset.mode === mode));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.mode));
});

cards.forEach((card) => {
  card.addEventListener("click", () => render(card.dataset.mode));
});

render("named");
