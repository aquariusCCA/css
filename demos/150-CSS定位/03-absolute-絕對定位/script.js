const states = {
  none: {
    title: "沒有定位祖先",
    code: `.son {
  position: absolute;
  top: 24px;
  left: 24px;
}`,
    note: "父層與爺爺層都是 static 時，absolute 會繼續往上找定位參照。"
  },
  yeye: {
    title: "爺爺層成為定位參照",
    code: `.yeye {
  position: relative;
}

.son {
  position: absolute;
  top: 24px;
  left: 24px;
}`,
    note: "父層仍是 static，所以 .son 會跳過父層，改用 .yeye 的內側邊界來計算 top / left。"
  },
  father: {
    title: "父層成為最近定位祖先",
    code: `.father {
  position: relative;
}

.son {
  position: absolute;
  top: 24px;
  left: 24px;
}`,
    note: "這就是常見的「子絕父相」：子層 absolute，父層 relative，讓子層鎖在卡片或容器內。"
  }
};

const stage = document.querySelector("#stage");
const buttons = document.querySelectorAll(".ref-btn");
const title = document.querySelector("#title");
const codeBox = document.querySelector("#codeBox");
const note = document.querySelector("#note");

function render(ref) {
  const item = states[ref];
  stage.dataset.ref = ref;
  title.textContent = item.title;
  codeBox.textContent = item.code;
  note.textContent = item.note;
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.ref === ref));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.ref));
});
