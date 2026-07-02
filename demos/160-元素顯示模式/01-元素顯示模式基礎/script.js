const controls = document.querySelectorAll(".control");

controls.forEach((control) => {
  control.addEventListener("click", () => {
    controls.forEach((item) => item.classList.remove("is-active"));
    control.classList.add("is-active");
    document.body.classList.toggle("is-sized", control.dataset.mode === "sized");
  });
});
