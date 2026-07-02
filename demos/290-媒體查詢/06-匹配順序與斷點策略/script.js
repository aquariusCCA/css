const viewportWidth = document.querySelector("#viewportWidth");
const goodWinner = document.querySelector("#goodWinner");
const badWinner = document.querySelector("#badWinner");

const minQueries = {
  320: window.matchMedia("(min-width: 320px)"),
  800: window.matchMedia("(min-width: 800px)"),
  1024: window.matchMedia("(min-width: 1024px)")
};

const maxQueries = {
  1024: window.matchMedia("(max-width: 1024px)"),
  768: window.matchMedia("(max-width: 768px)"),
  420: window.matchMedia("(max-width: 420px)")
};

function winnerForGood() {
  if (minQueries[1024].matches) return "blue";
  if (minQueries[800].matches) return "green";
  if (minQueries[320].matches) return "red";
  return "base";
}

function winnerForBad() {
  if (minQueries[320].matches) return "red";
  if (minQueries[800].matches) return "green";
  if (minQueries[1024].matches) return "blue";
  return "base";
}

function updateRule(selector, matches) {
  const item = document.querySelector(selector);
  item.classList.toggle("is-active", matches);
}

function updateDemo() {
  viewportWidth.textContent = `${window.innerWidth}px`;
  goodWinner.textContent = winnerForGood();
  badWinner.textContent = winnerForBad();

  Object.entries(minQueries).forEach(([size, query]) => {
    updateRule(`[data-good-rule="${size}"]`, query.matches);
    updateRule(`[data-bad-rule="${size}"]`, query.matches);
  });

  Object.entries(maxQueries).forEach(([size, query]) => {
    updateRule(`[data-desktop-rule="${size}"]`, query.matches);
  });
}

[...Object.values(minQueries), ...Object.values(maxQueries)].forEach((query) => {
  query.addEventListener("change", updateDemo);
});

window.addEventListener("resize", updateDemo);
updateDemo();
