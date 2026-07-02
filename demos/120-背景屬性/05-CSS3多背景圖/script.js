const multiBg = document.querySelector("#multiBg");
const codeText = document.querySelector("#codeText");
const boxes = document.querySelectorAll("[data-layer]");
const reverseButton = document.querySelector("#reverseButton");
let reversed = false;
const layers = {
  top: { css: "radial-gradient(circle at center, #f59e0b 0 22px, transparent 23px)", setting: "no-repeat right top / 150px 150px" },
  bottom: { css: "radial-gradient(circle at center, #22c55e 0 20px, transparent 21px)", setting: "no-repeat left bottom / 130px 130px" },
  base: { css: "linear-gradient(135deg, rgba(37,99,235,.85), rgba(190,18,60,.55))", setting: "repeat center / 80px 80px" }
};
function render() {
  let active = [...boxes].filter((box) => box.checked).map((box) => box.dataset.layer);
  if (reversed) active = active.reverse();
  multiBg.style.backgroundImage = active.map((key) => layers[key].css).join(", ");
  codeText.textContent = `.box {
  background:
${active.map((key) => `    ${layers[key].css} ${layers[key].setting}`).join(",\n")};
}`;
}
boxes.forEach((box) => box.addEventListener("change", render));
reverseButton.addEventListener("click", () => {
  reversed = !reversed;
  reverseButton.classList.toggle("is-active", reversed);
  render();
});
render();
