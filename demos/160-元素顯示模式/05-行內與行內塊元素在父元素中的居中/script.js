const options = {
  "use-text-align": document.querySelector("#text-align"),
  "use-line-height": document.querySelector("#line-height"),
  "use-vertical-align": document.querySelector("#vertical-align"),
  "use-font-zero": document.querySelector("#font-zero"),
};

const cssState = document.querySelector("#css-state");

function render() {
  Object.entries(options).forEach(([className, input]) => {
    document.body.classList.toggle(className, input.checked);
  });

  cssState.textContent = `.outer {
  height: 300px;
  ${options["use-text-align"].checked ? "text-align: center;" : ""}
  ${options["use-line-height"].checked ? "line-height: 300px;" : ""}
  ${options["use-font-zero"].checked ? "font-size: 0;" : ""}
}

.badge,
.field {
  ${options["use-vertical-align"].checked ? "vertical-align: middle;" : ""}
}

.badge {
  font-size: 20px;
}`;
}

Object.values(options).forEach((input) => input.addEventListener("change", render));
render();
