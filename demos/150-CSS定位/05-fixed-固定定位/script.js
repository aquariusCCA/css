const places = {
  corner: {
    title: "右下角固定工具",
    code: `.tool {
  position: fixed;
  right: 24px;
  bottom: 24px;
}`,
    note: "right 與 bottom 很適合建立貼在視窗角落的固定工具。"
  },
  top: {
    title: "左上固定區塊",
    code: `.tool {
  position: fixed;
  top: 24px;
  left: 24px;
}`,
    note: "top / left 會從視窗左上角計算距離，捲動頁面時位置不變。"
  },
  rail: {
    title: "固定在版心右側",
    code: `.layout {
  width: 800px;
  margin: 0 auto;
}

.tool {
  position: fixed;
  left: 50%;
  margin-left: 400px;
}`,
    note: "版心 800px 時，視窗中心到版心右緣是 400px，可用 margin-left 把 fixed 元素推到旁邊。"
  }
};

const stage = document.querySelector("#stage");
const buttons = document.querySelectorAll(".place-btn");
const title = document.querySelector("#title");
const codeBox = document.querySelector("#codeBox");
const note = document.querySelector("#note");

function render(place) {
  const item = places[place];
  stage.dataset.place = place;
  title.textContent = item.title;
  codeBox.textContent = item.code;
  note.textContent = item.note;
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.place === place));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.place));
});
