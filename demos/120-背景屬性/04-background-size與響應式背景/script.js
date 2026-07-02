const sizeSelect = document.querySelector("#sizeSelect");
const widthRange = document.querySelector("#widthRange");
const sizeBox = document.querySelector("#sizeBox");
const ratioWrap = document.querySelector("#ratioWrap");
const codeText = document.querySelector("#codeText");
const noteText = document.querySelector("#noteText");
const notes = {
  auto: "使用背景圖原始尺寸。",
  "160px": "單值通常指定寬度，高度等比例縮放。",
  "50%": "百分比相對背景定位區域計算。",
  contain: "contain 讓圖片完整放進容器，可能留下空白。",
  cover: "cover 讓圖片鋪滿容器，可能裁切部分圖片。"
};
function render() {
  sizeBox.style.backgroundSize = sizeSelect.value;
  ratioWrap.style.width = `${widthRange.value}px`;
  codeText.textContent = `.hero {
  background-size: ${sizeSelect.value};
}
.figure {
  padding-top: 65.46%;
  background-size: cover;
}`;
  noteText.textContent = notes[sizeSelect.value];
}
[sizeSelect, widthRange].forEach((item) => item.addEventListener("input", render));
render();
