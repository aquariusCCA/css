const doorButton = document.querySelector("[data-open-door]");
const doorDemo = document.querySelector("[data-door-demo]");

doorButton.addEventListener("click", () => {
  const isOpen = doorDemo.classList.toggle("is-open");
  doorButton.setAttribute("aria-pressed", String(isOpen));
  doorButton.textContent = isOpen ? "關上門片" : "打開門片";
});
