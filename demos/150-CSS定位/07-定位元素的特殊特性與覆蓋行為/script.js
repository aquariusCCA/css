const demos = {
  inline: {
    title: "inline 元素定位後可設定寬高",
    code: `span {
  position: absolute;
  width: 180px;
  height: 90px;
}`,
    note: "span 原本是 inline，但 absolute 後可以像區塊一樣套用 width 與 height。"
  },
  shrink: {
    title: "未指定尺寸時由內容撐開",
    code: `.box {
  position: absolute;
  background: skyblue;
  /* 未設定 width / height */
}`,
    note: "absolute 元素若沒有設定寬高，常會依內容大小形成自己的盒子。"
  },
  cover: {
    title: "脫離文件流並覆蓋內容",
    code: `.box {
  position: absolute;
  top: 88px;
  left: 80px;
}`,
    note: "absolute 不佔原本的文件流位置，後方內容會照常排版，因此可能被它蓋住。"
  },
  reserve: {
    title: "固定或絕對定位要替內容預留空間",
    code: `.layout {
  padding-right: 120px;
}

.tool {
  position: fixed;
  right: 24px;
}`,
    note: "定位元素不會自動推開其他內容；若它是常駐工具，通常要用 padding 或版面設計預留空間。"
  }
};

const stage = document.querySelector("#stage");
const buttons = document.querySelectorAll(".demo-btn");
const title = document.querySelector("#title");
const codeBox = document.querySelector("#codeBox");
const note = document.querySelector("#note");

function render(name) {
  const item = demos[name];
  stage.dataset.demo = name;
  title.textContent = item.title;
  codeBox.textContent = item.code;
  note.textContent = item.note;
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.demo === name));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.demo));
});
