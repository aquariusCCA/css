const cursorStatus = document.querySelector("#cursor-status");
const cursorCards = document.querySelectorAll("[data-cursor]");
const toggleAction = document.querySelector("#toggle-action");
const disabledSample = document.querySelector("#disabled-sample");
const disabledCopy = document.querySelector("#disabled-copy");

cursorCards.forEach((card) => {
  const label = card.dataset.cursor;

  card.addEventListener("pointerenter", () => {
    cursorStatus.textContent = label;
  });

  card.addEventListener("focus", () => {
    cursorStatus.textContent = label;
  });
});

toggleAction.addEventListener("click", () => {
  const isDisabled = disabledSample.dataset.state === "disabled";
  const nextState = isDisabled ? "available" : "disabled";

  disabledSample.dataset.state = nextState;
  toggleAction.setAttribute("aria-pressed", String(!isDisabled));

  if (nextState === "disabled") {
    toggleAction.textContent = "切換成可操作狀態";
    disabledSample.querySelector(".cursor-value").textContent = "cursor: not-allowed";
    disabledCopy.textContent = "目前不可操作，所以游標同步改成 not-allowed。";
    return;
  }

  toggleAction.textContent = "切換成不可操作狀態";
  disabledSample.querySelector(".cursor-value").textContent = "cursor: pointer";
  disabledCopy.textContent = "目前可操作，所以使用 pointer。";
});
