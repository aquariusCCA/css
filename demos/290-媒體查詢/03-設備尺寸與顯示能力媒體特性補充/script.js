const ratioText = document.querySelector("#ratioText");

const features = {
  wideRatio: window.matchMedia("(min-aspect-ratio: 16/10)"),
  narrowRatio: window.matchMedia("(max-aspect-ratio: 1/1)"),
  retina: window.matchMedia("(min-resolution: 2dppx)"),
  color: window.matchMedia("(color)"),
  monochrome: window.matchMedia("(monochrome)"),
  grid: window.matchMedia("(grid)")
};

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function updateFeature(name, matches) {
  const item = document.querySelector(`[data-feature="${name}"]`);
  const label = item.querySelector("span");
  item.classList.toggle("is-active", matches);
  label.textContent = matches ? "已匹配" : "未匹配";
}

function updateDemo() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const divisor = gcd(width, height);
  ratioText.textContent = `目前視口約為 ${Math.round(width / divisor)}/${Math.round(height / divisor)}，實際尺寸 ${width} x ${height}px。`;

  Object.entries(features).forEach(([name, query]) => {
    updateFeature(name, query.matches);
  });
}

Object.values(features).forEach((query) => {
  query.addEventListener("change", updateDemo);
});

window.addEventListener("resize", updateDemo);
updateDemo();
