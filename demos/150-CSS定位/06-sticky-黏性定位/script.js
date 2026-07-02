const cases = {
  top: {
    title: "設定 top: 0",
    code: `.nav {
  position: sticky;
  top: 0;
}`,
    note: "捲動到導覽列碰到容器頂端時，它會暫時黏住。"
  },
  gap: {
    title: "設定 top: 24px",
    code: `.nav {
  position: sticky;
  top: 24px;
}`,
    note: "門檻可以不是 0；top: 24px 代表黏在容器頂端下方 24px 的位置。"
  },
  missing: {
    title: "缺少邊偏移，sticky 不啟動",
    code: `.nav {
  position: sticky;
  /* 沒有 top / left / right / bottom */
}`,
    note: "sticky 必須有至少一個偏移值作為門檻，否則看起來就像普通元素。"
  }
};

const stage = document.querySelector("#stage");
const scrollbox = document.querySelector("#scrollbox");
const buttons = document.querySelectorAll(".case-btn");
const title = document.querySelector("#title");
const codeBox = document.querySelector("#codeBox");
const note = document.querySelector("#note");

function render(name) {
  const item = cases[name];
  stage.dataset.case = name;
  scrollbox.scrollTop = 120;
  title.textContent = item.title;
  codeBox.textContent = item.code;
  note.textContent = item.note;
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.case === name));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.case));
});
