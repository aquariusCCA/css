const widthOutput = document.querySelector("#viewportWidth");

const rules = {
  and: window.matchMedia("screen and (min-width: 700px) and (max-width: 800px)"),
  or: window.matchMedia("(max-width: 700px), (min-width: 800px)"),
  notHover: window.matchMedia("not (hover)")
};

function updateRule(name, matches) {
  const card = document.querySelector(`[data-rule="${name}"]`);
  const status = card.querySelector(".status");
  card.classList.toggle("is-active", matches);
  status.textContent = matches ? "已匹配" : "未匹配";
}

function updateDemo() {
  widthOutput.textContent = `${window.innerWidth}px`;
  Object.entries(rules).forEach(([name, query]) => {
    updateRule(name, query.matches);
  });
}

Object.values(rules).forEach((query) => {
  query.addEventListener("change", updateDemo);
});

window.addEventListener("resize", updateDemo);
updateDemo();
