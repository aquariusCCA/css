const areaPreview = document.querySelector("#area-preview");
const areaCode = document.querySelector("#area-code");
const flowPreview = document.querySelector("#flow-preview");
const flowNote = document.querySelector("#flow-note");
const areaButtons = document.querySelectorAll("[data-map]");
const flowButtons = document.querySelectorAll("[data-flow]");

const maps = {
  page: {
    className: "map-page",
    code: `grid-template-areas:
  "header header header"
  "main main sidebar"
  "footer footer footer";`
  },
  empty: {
    className: "map-empty",
    code: `grid-template-areas:
  "header . sidebar"
  "main main sidebar"
  "footer footer .";`
  }
};

const flows = {
  row: {
    className: "flow-row",
    note: "row 是預設方向，項目會先填滿第一行，再往下一行放置。"
  },
  column: {
    className: "flow-column",
    note: "column 會先沿著欄方向往下填，再移到下一欄。"
  },
  dense: {
    className: "flow-dense",
    note: "row dense 會嘗試把後面的項目回填到前面的空格，但視覺順序可能和原始順序不同。"
  }
};

function setMap(mapName) {
  areaPreview.classList.remove("map-page", "map-empty");
  areaPreview.classList.add(maps[mapName].className);
  areaCode.textContent = maps[mapName].code;
  areaButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.map === mapName);
  });
}

function setFlow(flowName) {
  flowPreview.classList.remove("flow-row", "flow-column", "flow-dense");
  flowPreview.classList.add(flows[flowName].className);
  flowNote.textContent = flows[flowName].note;
  flowButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.flow === flowName);
  });
}

areaButtons.forEach((button) => {
  button.addEventListener("click", () => setMap(button.dataset.map));
});

flowButtons.forEach((button) => {
  button.addEventListener("click", () => setFlow(button.dataset.flow));
});

setMap("page");
setFlow("row");
