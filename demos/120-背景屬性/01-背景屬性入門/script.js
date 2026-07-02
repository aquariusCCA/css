const card = document.querySelector("#previewCard");
const code = document.querySelector("#codeText");
const note = document.querySelector("#noteText");
const buttons = document.querySelectorAll("[data-mode]");
const states = {
  color: { cls: "", css: ".card {\n  background-color: #f9a8d4;\n}", note: "背景色可以幫你看清楚盒子的大小與位置。" },
  rgba: { cls: "mode-rgba", css: ".card {\n  background-color: rgba(15, 23, 42, .66);\n  color: #fff;\n}", note: "rgba() 只讓背景半透明，文字仍保持完整不透明。" },
  opacity: { cls: "mode-opacity", css: ".card {\n  opacity: .42;\n}", note: "opacity 會讓整個元素一起透明，包含文字內容。" },
  image: { cls: "mode-image", css: ".card {\n  background-image: radial-gradient(...);\n  background-size: 64px 64px;\n}", note: "背景圖片是裝飾層，不會像 img 一樣撐開元素。" }
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const state = states[button.dataset.mode];
    card.className = `preview-card ${state.cls}`.trim();
    code.textContent = state.css;
    note.textContent = state.note;
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  });
});
