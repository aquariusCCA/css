const features = {
  dark: window.matchMedia("(prefers-color-scheme: dark)"),
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)"),
  hover: window.matchMedia("(hover: hover)"),
  anyHover: window.matchMedia("(any-hover: hover)"),
  finePointer: window.matchMedia("(pointer: fine)"),
  coarsePointer: window.matchMedia("(pointer: coarse)")
};

function updateFeature(name, matches) {
  const item = document.querySelector(`[data-feature="${name}"]`);
  const label = item.querySelector("span");
  item.classList.toggle("is-active", matches);
  label.textContent = matches ? "已匹配" : "未匹配";
}

function updateDemo() {
  Object.entries(features).forEach(([name, query]) => {
    updateFeature(name, query.matches);
  });
}

Object.values(features).forEach((query) => {
  query.addEventListener("change", updateDemo);
});

updateDemo();
