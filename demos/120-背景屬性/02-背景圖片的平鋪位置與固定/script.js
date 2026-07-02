const repeatSelect = document.querySelector("#repeatSelect");
const positionSelect = document.querySelector("#positionSelect");
const attachmentSelect = document.querySelector("#attachmentSelect");
const preview = document.querySelector("#previewBox");
const scrollDemo = document.querySelector("#scrollDemo");
const longCode = document.querySelector("#longCode");
const shortCode = document.querySelector("#shortCode");
function render() {
  const repeat = repeatSelect.value;
  const position = positionSelect.value;
  const attachment = attachmentSelect.value;
  preview.style.backgroundRepeat = repeat;
  preview.style.backgroundPosition = position;
  scrollDemo.style.backgroundAttachment = attachment;
  longCode.textContent = `.box {
  background-image: radial-gradient(...);
  background-repeat: ${repeat};
  background-position: ${position};
  background-attachment: ${attachment};
}`;
  shortCode.textContent = `background: #fce7f3 radial-gradient(...) ${repeat} ${attachment} ${position};`;
}
[repeatSelect, positionSelect, attachmentSelect].forEach((item) => item.addEventListener("change", render));
render();
