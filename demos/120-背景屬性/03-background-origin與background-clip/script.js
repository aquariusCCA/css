const originSelect = document.querySelector("#originSelect");
const clipSelect = document.querySelector("#clipSelect");
const boxDemo = document.querySelector("#boxDemo");
const codeText = document.querySelector("#codeText");
function render() {
  boxDemo.style.backgroundOrigin = originSelect.value;
  boxDemo.style.backgroundClip = clipSelect.value;
  codeText.textContent = `.box {
  padding: 52px;
  border: 24px dotted #7c3aed;
  background-origin: ${originSelect.value};
  background-clip: ${clipSelect.value};
}`;
}
[originSelect, clipSelect].forEach((item) => item.addEventListener("change", render));
render();
