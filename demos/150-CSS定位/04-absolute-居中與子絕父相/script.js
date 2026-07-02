const methods = {
  transform: {
    title: "transform：最常用的未知尺寸居中",
    code: `.card { position: relative; }
.target {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}`,
    note: "left: 50% 先把元素左邊移到中心，再用 translate 把自身寬高的一半拉回來。"
  },
  margin: {
    title: "負 margin：需要知道元素尺寸",
    code: `.card { position: relative; }
.target {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 140px;
  margin-left: -70px;
  margin-top: -46px;
}`,
    note: "負 margin 要等於自身尺寸的一半；尺寸改變時也要同步修改，較容易失準。"
  },
  auto: {
    title: "左右 0 + auto：水平居中",
    code: `.card { position: relative; }
.target {
  position: absolute;
  left: 0;
  right: 0;
  margin-inline: auto;
}`,
    note: "left 與 right 都設為 0 時，搭配固定寬度與 auto margin 可以做水平居中。"
  },
  missing: {
    title: "缺少父層 relative：參照會跑掉",
    code: `.card {
  /* position: relative; 被拿掉 */
}
.target {
  position: absolute;
  left: 50%;
  top: 50%;
}`,
    note: "父層不是定位元素時，absolute 子層會往外找其他定位參照，常導致徽章或中心元素離開卡片。"
  }
};

const stage = document.querySelector("#stage");
const buttons = document.querySelectorAll(".method-btn");
const title = document.querySelector("#title");
const codeBox = document.querySelector("#codeBox");
const note = document.querySelector("#note");

function render(method) {
  const item = methods[method];
  stage.dataset.method = method;
  title.textContent = item.title;
  codeBox.textContent = item.code;
  note.textContent = item.note;
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.method === method));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.method));
});
