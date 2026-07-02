const targetBox = document.querySelector("#targetBox");
const modeCode = document.querySelector("#modeCode");
const visibleState = document.querySelector("#visibleState");
const spaceState = document.querySelector("#spaceState");
const modeNote = document.querySelector("#modeNote");
const modeButtons = document.querySelectorAll("[data-mode]");

const modes = {
  visible: {
    className: "",
    code: `.box1 {
  display: block;
  visibility: visible;
}`,
    visible: "可見",
    space: "保留",
    note: "第一個方塊正常參與版面，第二個方塊維持在它下方。"
  },
  display: {
    className: "is-display-none",
    code: `.box1 {
  display: none;
}`,
    visible: "不可見",
    space: "不保留",
    note: "第一個方塊被移出版面，第二個方塊會往上補到原本的位置。"
  },
  visibility: {
    className: "is-visibility-hidden",
    code: `.box1 {
  visibility: hidden;
}`,
    visible: "不可見",
    space: "保留",
    note: "第一個方塊看不見，但原本空間仍在，所以第二個方塊不會補位。"
  }
};

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = modes[button.dataset.mode];
    targetBox.className = `demo-box target-box ${mode.className}`.trim();
    modeCode.textContent = mode.code;
    visibleState.textContent = mode.visible;
    spaceState.textContent = mode.space;
    modeNote.textContent = mode.note;

    modeButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
  });
});
