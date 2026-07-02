const viewportRange = document.querySelector("#viewportRange");
const viewport = document.querySelector("#viewport");
const widthValue = document.querySelector("#widthValue");
const viewportLabel = document.querySelector("#viewportLabel");
const breakpointLabel = document.querySelector("#breakpointLabel");
const containerValue = document.querySelector("#containerValue");

function getContainer(width) {
  if (width < 768) {
    return { width: width, label: "超小螢幕", text: "100%" };
  }

  if (width < 992) {
    return { width: 750, label: "平板", text: "750px" };
  }

  if (width < 1200) {
    return { width: 970, label: "桌面顯示器", text: "970px" };
  }

  return { width: 1170, label: "大桌面顯示器", text: "1170px" };
}

function updateDemo() {
  const width = Number(viewportRange.value);
  const container = getContainer(width);

  viewport.style.setProperty("--demo-width", `${width}px`);
  viewport.style.setProperty("--container-width", `${container.width}px`);
  widthValue.textContent = width;
  viewportLabel.textContent = `${width}px`;
  breakpointLabel.textContent = container.label;
  containerValue.textContent = container.text;
}

viewportRange.addEventListener("input", updateDemo);
updateDemo();
