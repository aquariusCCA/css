const rootSize = document.querySelector("#rootSize");
const parentSize = document.querySelector("#parentSize");
const emContext = document.querySelector(".em-context");

function update() {
  const root = Number(rootSize.value);
  const parent = Number(parentSize.value);

  document.documentElement.style.fontSize = `${root}px`;
  emContext.style.fontSize = `${parent}px`;

  document.querySelector("#rootOut").textContent = `${root}px`;
  document.querySelector("#parentOut").textContent = `${parent}px`;
  document.querySelector("#remReadout").textContent = `10rem = 10 * html ${root}px = ${root * 10}px`;
  document.querySelector("#emReadout").textContent = `10em = 10 * 目前區塊 ${parent}px = ${parent * 10}px`;
}

[rootSize, parentSize].forEach((input) => input.addEventListener("input", update));

update();
