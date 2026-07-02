const sizeToggle = document.querySelector("#sizeToggle");
const statusText = document.querySelector("#statusText");
const displaySize = document.querySelector("#displaySize");

function updateSizingState() {
  document.body.classList.toggle("size-applied", sizeToggle.checked);

  if (sizeToggle.checked) {
    statusText.textContent = "目前二倍圖被縮回 50px x 50px，版面尺寸符合設計稿。";
    displaySize.textContent = "50 x 50";
  } else {
    statusText.textContent = "CSS 尺寸被關閉後，二倍圖會用 100 x 100 原始尺寸顯示，版面被撐大。";
    displaySize.textContent = "100 x 100";
  }
}

sizeToggle.addEventListener("change", updateSizingState);
updateSizingState();
