const topicData = {
  text: {
    code: `div {
  color: #bd345a;
  font-size: 14px;
}

p {
  /* 沒有直接設定 color */
  font-size: 16px;
}`,
    explanation: "color 是可繼承屬性。p 沒有直接設定 color，所以會沿用最近父層 div 的文字顏色。",
    controls: "none"
  },
  box: {
    code: `div {
  padding: 30px;
  background: #fff0c7;
}

p {
  /* padding 不會自動繼承 */
}`,
    explanation: "padding、margin、border 這類盒模型屬性通常不會自動傳給子元素，否則版面會很容易失控。",
    controls: "none"
  },
  line: {
    code: `body {
  line-height: 1.5;
}

div {
  font-size: 14px;
}

p {
  font-size: 16px;
}`,
    explanation: "無單位 line-height 繼承的是比例。p 會用自己的 16px 乘上比例，而不是直接拿父層算好的固定像素。",
    controls: "line"
  },
  defaults: {
    code: `div {
  color: #bd345a;
  font-size: 14px;
}

div a {
  color: inherit;
}

div h3 {
  font-size: inherit;
}`,
    explanation: "a 與標題看起來沒繼承時，常是瀏覽器預設樣式先給了自己的值。勾選 inherit 可以要求它們明確沿用父層計算後的值。",
    controls: "inherit"
  }
};

const buttons = document.querySelectorAll(".topic-button");
const stage = document.querySelector("#inheritStage");
const cssCode = document.querySelector("#cssCode");
const explanation = document.querySelector("#explanation");
const ratioRange = document.querySelector("#ratioRange");
const ratioOutput = document.querySelector("#ratioOutput");
const lineHeightValue = document.querySelector("#lineHeightValue");
const inheritToggle = document.querySelector("#inheritToggle");
const lineControls = document.querySelector(".line-controls");
const toggleRow = document.querySelector(".toggle-row");

let currentTopic = "text";

function updateLineHeight() {
  const ratio = Number(ratioRange.value);
  ratioOutput.textContent = ratio.toFixed(1);
  lineHeightValue.textContent = `${Math.round(16 * ratio)}px`;
  stage.style.setProperty("--line-ratio", ratio);
}

function render() {
  const data = topicData[currentTopic];
  stage.className = `inherit-stage topic-${currentTopic}`;
  stage.classList.toggle("use-inherit", currentTopic === "defaults" && inheritToggle.checked);
  cssCode.textContent = data.code;
  explanation.textContent = data.explanation;
  lineControls.classList.toggle("is-visible", data.controls === "line");
  toggleRow.classList.toggle("is-visible", data.controls === "inherit");
  updateLineHeight();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentTopic = button.dataset.topic;
    buttons.forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

ratioRange.addEventListener("input", render);
inheritToggle.addEventListener("change", render);

render();
