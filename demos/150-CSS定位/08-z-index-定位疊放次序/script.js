const layers = {
  ordered: {
    title: "z-index 數字越大越上層",
    code: `.red { z-index: 1; }
.green { z-index: 2; }
.blue { z-index: auto; }`,
    note: "三個盒子都是 absolute；綠色的 z-index 最大，因此蓋在最上面。"
  },
  same: {
    title: "同值時看 HTML 順序",
    code: `.red,
.green,
.blue {
  position: absolute;
  z-index: 1;
}`,
    note: "z-index 相同時，後出現在 HTML 裡的元素通常會疊在前面的元素上方。"
  },
  invalid: {
    title: "z-index 不能加單位",
    code: `.red {
  position: absolute;
  z-index: 10px; /* 錯誤 */
}

.red {
  z-index: 10; /* 正確 */
}`,
    note: "z-index 接受整數、auto 等值；10px 不是有效值，瀏覽器會忽略。"
  },
  static: {
    title: "普通 static 元素的 z-index 不生效",
    code: `.red {
  position: static;
  z-index: 99;
}`,
    note: "一般 static 元素設定 z-index 不會產生預期疊放效果；先讓它成為定位元素才有意義。"
  }
};

const stage = document.querySelector("#stage");
const buttons = document.querySelectorAll(".layer-btn");
const title = document.querySelector("#title");
const codeBox = document.querySelector("#codeBox");
const note = document.querySelector("#note");

function render(layer) {
  const item = layers[layer];
  stage.dataset.layer = layer;
  title.textContent = item.title;
  codeBox.textContent = item.code;
  note.textContent = item.note;
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.layer === layer));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.layer));
});
