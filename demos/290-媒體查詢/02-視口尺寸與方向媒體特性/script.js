const output = {
  width: document.querySelector("#viewportWidth"),
  height: document.querySelector("#viewportHeight"),
  orientation: document.querySelector("#orientation")
};

const conditions = {
  wide: window.matchMedia("(min-width: 900px)"),
  short: window.matchMedia("(max-height: 560px)"),
  landscape: window.matchMedia("(orientation: landscape)"),
  compactLandscape: window.matchMedia("(orientation: landscape) and (max-width: 900px)")
};

function updateCondition(name, matches) {
  const item = document.querySelector(`[data-condition="${name}"]`);
  const label = item.querySelector("span");
  item.classList.toggle("is-active", matches);
  label.textContent = matches ? "已匹配" : "未匹配";
}

function updateViewport() {
  output.width.textContent = `${window.innerWidth}px`;
  output.height.textContent = `${window.innerHeight}px`;
  output.orientation.textContent = conditions.landscape.matches ? "landscape" : "portrait";

  Object.entries(conditions).forEach(([name, query]) => {
    updateCondition(name, query.matches);
  });
}

Object.values(conditions).forEach((query) => {
  query.addEventListener("change", updateViewport);
});

window.addEventListener("resize", updateViewport);
updateViewport();
