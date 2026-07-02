const modes = {
  static: {
    title: "static：正常文件流",
    code: `.box {
  position: static;
  top: 32px;
  left: 32px;
}`,
    flow: "會，元素照正常順序排列。",
    offset: "static 下 top / left 不會讓元素移動。",
    ref: "不建立定位參照，維持一般排版。"
  },
  relative: {
    title: "relative：從原本位置偏移",
    code: `.box {
  position: relative;
  top: 32px;
  left: 32px;
}`,
    flow: "會，原本的位置仍留在文件流中。",
    offset: "top 讓元素往下，left 讓元素往右。",
    ref: "以自己的原本位置作為偏移起點。"
  },
  absolute: {
    title: "absolute：脫離文件流",
    code: `.box {
  position: absolute;
  top: 148px;
  left: 120px;
}`,
    flow: "不會，後方元素會像它不存在一樣往前排。",
    offset: "依定位參照框的上、左邊偏移。",
    ref: "尋找最近一個非 static 的祖先作為參照。"
  },
  fixed: {
    title: "fixed：相對視窗固定",
    code: `.box {
  position: fixed;
  right: 24px;
  bottom: 24px;
}`,
    flow: "不會，內容不會替 fixed 元素預留空間。",
    offset: "right / bottom 讓它貼近視窗右下角。",
    ref: "通常相對瀏覽器視窗，捲動時仍留在固定位置。"
  },
  sticky: {
    title: "sticky：先流動，再黏住",
    code: `.box {
  position: sticky;
  top: 22px;
}`,
    flow: "會，尚未觸發前像 relative 一樣佔位。",
    offset: "必須設定 top / left / right / bottom 之一才有黏住門檻。",
    ref: "在捲動容器內，到達門檻後暫時像 fixed。"
  }
};

const stage = document.querySelector("#stage");
const buttons = document.querySelectorAll(".mode-btn");
const title = document.querySelector("#modeTitle");
const code = document.querySelector("#codeBox");
const flowFact = document.querySelector("#flowFact");
const offsetFact = document.querySelector("#offsetFact");
const refFact = document.querySelector("#refFact");

function render(mode) {
  const item = modes[mode];
  stage.dataset.mode = mode;
  title.textContent = item.title;
  code.textContent = item.code;
  flowFact.textContent = item.flow;
  offsetFact.textContent = item.offset;
  refFact.textContent = item.ref;
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.mode === mode));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.mode));
});
