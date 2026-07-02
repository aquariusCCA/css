const messageBox = document.querySelector("#messageBox");
const overflowCode = document.querySelector("#overflowCode");
const overflowNote = document.querySelector("#overflowNote");
const buttons = document.querySelectorAll("[data-overflow]");

const states = {
  visible: "超出的內容仍會顯示在盒子外面，可能干擾周圍版面。",
  hidden: "超出盒子範圍的內容會被裁切，使用者看不到被切掉的部分。",
  scroll: "保留捲動區域；即使內容沒有溢出，也可能看到捲動條空間。",
  auto: "內容真的溢出時才出現捲動條，這是固定高度文字盒常用的選擇。"
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.overflow;
    messageBox.style.overflow = value;
    overflowCode.textContent = `.message {
  overflow: ${value};
}`;
    overflowNote.textContent = states[value];

    buttons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
  });
});
