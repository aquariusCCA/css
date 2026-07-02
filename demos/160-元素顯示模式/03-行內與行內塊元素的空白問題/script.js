const removeSpace = document.querySelector("#remove-space");
const restoreText = document.querySelector("#restore-text");
const cssState = document.querySelector("#css-state");

function renderState() {
  document.body.classList.toggle("remove-space", removeSpace.checked);
  document.body.classList.toggle("restore-text", restoreText.checked);

  cssState.textContent = `.stage {
  font-size: ${removeSpace.checked ? "0" : "16px"};
}

.chip {
  font-size: ${restoreText.checked ? "16px" : "0"};
}`;
}

removeSpace.addEventListener("change", renderState);
restoreText.addEventListener("change", renderState);
renderState();
