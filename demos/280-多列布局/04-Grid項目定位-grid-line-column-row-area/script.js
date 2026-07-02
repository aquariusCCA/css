const grid = document.querySelector("#position-grid");
const title = document.querySelector("#case-title");
const code = document.querySelector("#case-code");
const note = document.querySelector("#case-note");
const mistake = document.querySelector("#mistake-text");
const controls = document.querySelectorAll("[data-position]");

const cases = {
  column: {
    title: "grid-column: 1 / 3",
    gridClass: "mode-column",
    useAreas: false,
    code: `.item {
  grid-column: 1 / 3;
  grid-row: 1;
}`,
    note: "目標 item 的左邊界貼在第 1 條欄線，右邊界貼在第 3 條欄線。",
    mistake: "1 / 3 不是佔 3 格，而是從線 1 到線 3，實際跨越 2 欄。"
  },
  rowcol: {
    title: "同時指定 row 與 column",
    gridClass: "mode-rowcol",
    useAreas: false,
    code: `.item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}`,
    note: "四個邊界都被指定後，item 會佔據欄線 1 到 3、行線 2 到 4 的區域。",
    mistake: "結束線是邊界，不是包含該線後面那一格。"
  },
  span: {
    title: "span 表示跨越幾個軌道",
    gridClass: "mode-span",
    useAreas: false,
    code: `.item {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}`,
    note: "span 2 直接表達從起點開始跨越 2 欄或 2 列，不必手算結束線。",
    mistake: "span 的數字是跨越軌道數，不是結束線號。"
  },
  "area-name": {
    title: "grid-area: main",
    gridClass: "mode-area-name",
    useAreas: true,
    code: `.container {
  grid-template-areas:
    "header header header header"
    "main main sidebar sidebar"
    "main main sidebar sidebar"
    "footer footer footer footer";
}

.item {
  grid-area: main;
}`,
    note: "當容器有命名區域時，grid-area 可以直接把 item 放進該區域。",
    mistake: "命名區域必須形成矩形；分散或不連續的同名區域是不合法的。"
  },
  "area-four": {
    title: "grid-area 四值定位",
    gridClass: "mode-area-four",
    useAreas: false,
    code: `.item {
  grid-area: 1 / 1 / 3 / 3;
}`,
    note: "四個值依序是 row-start / column-start / row-end / column-end。",
    mistake: "grid-area 四值不是上右下左，也不是 column 先，順序寫錯時位置會完全不同。"
  }
};

function setCase(name) {
  const item = cases[name];
  grid.className = `position-grid ${item.gridClass}`;
  grid.classList.toggle("use-areas", item.useAreas);
  title.textContent = item.title;
  code.textContent = item.code;
  note.textContent = item.note;
  mistake.textContent = item.mistake;
  controls.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.position === name);
  });
}

controls.forEach((button) => {
  button.addEventListener("click", () => setCase(button.dataset.position));
});

setCase("column");
