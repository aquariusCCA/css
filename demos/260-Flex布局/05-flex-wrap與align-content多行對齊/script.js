const contentHints = {
  "flex-start": "多行貼著側軸起點排列；行與行之間沒有額外分散。",
  center: "多行整體集中在容器側軸中間。",
  "space-between": "第一行貼側軸起點，最後一行貼側軸終點，中間行距平均。",
  "space-evenly": "側軸兩端與行距全部保持相等。",
  stretch: "多行會沿側軸拉伸以填滿可用空間。"
};

const stage = document.querySelector("#stage");
const wrapRule = document.querySelector("#wrapRule");
const contentRule = document.querySelector("#contentRule");
const hint = document.querySelector("#hint");
const wrapButtons = document.querySelectorAll("[data-wrap]");
const contentButtons = document.querySelectorAll("[data-content]");

wrapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.wrap;
    stage.style.flexWrap = value;
    wrapRule.textContent = `flex-wrap: ${value};`;
    wrapButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

contentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.content;
    stage.style.alignContent = value;
    contentRule.textContent = `align-content: ${value};`;
    hint.textContent = contentHints[value];
    contentButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});
