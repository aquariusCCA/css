const select = document.querySelector("#align-value");
const itemsCode = document.querySelector("#items-code");
const contentCode = document.querySelector("#content-code");
const selfCode = document.querySelector("#self-code");
const valueNote = document.querySelector("#value-note");

const notes = {
  start: "start 會靠近 grid area 或容器的起始邊。",
  center: "center 會置中，但 items、content、self 置中的對象不同。",
  end: "end 會靠近 grid area 或容器的結束邊。",
  stretch: "stretch 會嘗試拉伸目標，items 和 self 最容易看到變形；content 需要軌道可伸展時才明顯。"
};

function render() {
  const value = select.value;
  document.documentElement.style.setProperty("--align-value", value);

  itemsCode.textContent = `.container {
  justify-items: ${value};
  align-items: ${value};
}`;

  contentCode.textContent = `.container {
  justify-content: ${value};
  align-content: ${value};
}`;

  selfCode.textContent = `.item-a {
  justify-self: ${value};
  align-self: ${value};
}`;

  valueNote.textContent = notes[value];
}

select.addEventListener("change", render);
render();
