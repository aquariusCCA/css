const zoomButton = document.querySelector("[data-zoom-toggle]");
const zoomCard = document.querySelector("[data-zoom-card]");

zoomButton.addEventListener("click", () => {
  const isZoomed = zoomCard.classList.toggle("is-zoomed");
  zoomButton.setAttribute("aria-pressed", String(isZoomed));
  zoomButton.textContent = isZoomed ? "隱藏中心圖示" : "顯示中心圖示";
});
