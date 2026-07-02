const comparisonGrid = document.querySelector(".comparison-grid");
const orderButtons = document.querySelectorAll("[data-order-view]");
const colorButtons = document.querySelectorAll("[data-color-order]");
const overrideCode = document.querySelector("#overrideCode");
const colorResult = document.querySelector(".color-result");
const colorWord = document.querySelector("#colorWord");
const colorNote = document.querySelector("#colorNote");

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.orderView;
    comparisonGrid.dataset.currentView = view;

    orderButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
  });
});

const colorStates = {
  blue: {
    code: `.box {
  color: red;
  color: blue;
}`,
    word: "blue",
    note: "因為後面的 color: blue 覆蓋了前面的 color: red。"
  },
  red: {
    code: `.box {
  color: blue;
  color: red;
}`,
    word: "red",
    note: "因為後面的 color: red 覆蓋了前面的 color: blue。"
  }
};

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextColor = button.dataset.colorOrder;
    const state = colorStates[nextColor];

    overrideCode.textContent = state.code;
    colorResult.dataset.finalColor = state.word;
    colorWord.textContent = state.word;
    colorNote.textContent = state.note;

    colorButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
  });
});
