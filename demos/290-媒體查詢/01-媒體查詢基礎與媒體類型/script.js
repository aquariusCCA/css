const widthOutput = document.querySelector("#viewportWidth");
const activeName = document.querySelector("#activeName");
const activeDescription = document.querySelector("#activeDescription");
const cards = {
  small: document.querySelector('[data-query="small"]'),
  middle: document.querySelector('[data-query="middle"]'),
  large: document.querySelector('[data-query="large"]')
};

const queries = {
  small: window.matchMedia("(max-width: 539px)"),
  middle: window.matchMedia("(min-width: 540px)"),
  large: window.matchMedia("(min-width: 970px)")
};

function setCardState(name, matches) {
  const card = cards[name];
  const status = card.querySelector(".query-status");
  card.classList.toggle("is-active", matches);
  status.textContent = matches ? "已匹配" : "未匹配";
}

function updateDemo() {
  const width = window.innerWidth;
  widthOutput.textContent = `${width}px`;

  Object.keys(queries).forEach((name) => {
    setCardState(name, queries[name].matches);
  });

  if (queries.large.matches) {
    activeName.textContent = "970px 以上：最後規則勝出";
    activeDescription.textContent = "此時 min-width: 540px 與 min-width: 970px 都符合，若修改同一屬性，較晚出現的 970px 規則會覆蓋前者。";
  } else if (queries.middle.matches) {
    activeName.textContent = "540px 以上：中等視口";
    activeDescription.textContent = "這時 max-width: 539px 不再符合，min-width: 540px 開始套用。";
  } else {
    activeName.textContent = "539px 以下：窄視口";
    activeDescription.textContent = "這時只符合 max-width: 539px，適合示範小螢幕樣式。";
  }
}

Object.values(queries).forEach((query) => {
  query.addEventListener("change", updateDemo);
});

window.addEventListener("resize", updateDemo);
updateDemo();
