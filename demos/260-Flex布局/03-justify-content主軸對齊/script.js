const hints = {
  "flex-start": "項目靠主軸起點，剩餘空間留在後方。",
  center: "剩餘空間平均放在整組項目的前後，項目整體置中。",
  "space-between": "第一個貼起點、最後一個貼終點，中間空間平均分配。",
  "space-around": "每個項目左右各有一份空間，兩端看起來是中間的一半。",
  "space-evenly": "所有間距都相等，包含容器兩端。"
};

const stage = document.querySelector("#stage");
const rule = document.querySelector("#rule");
const hint = document.querySelector("#hint");
const buttons = document.querySelectorAll("[data-value]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    stage.style.justifyContent = value;
    rule.textContent = `justify-content: ${value};`;
    hint.textContent = hints[value];
    buttons.forEach((item) => item.classList.toggle("active", item === button));
  });
});
