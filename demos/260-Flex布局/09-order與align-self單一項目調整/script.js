const orderToggle = document.querySelector("#orderToggle");
const selfToggle = document.querySelector("#selfToggle");
const itemTwo = document.querySelector("#itemTwo");
const itemThree = document.querySelector("#itemThree");
const orderRule = document.querySelector("#orderRule");
const selfRule = document.querySelector("#selfRule");

orderToggle.addEventListener("change", () => {
  itemTwo.classList.toggle("is-first", orderToggle.checked);
  orderRule.textContent = orderToggle.checked
    ? ".two { order: -1; }"
    : "/* 第二項維持 order: 0 */";
});

selfToggle.addEventListener("change", () => {
  itemThree.classList.toggle("is-end", selfToggle.checked);
  selfRule.textContent = selfToggle.checked
    ? ".three { align-self: flex-end; }"
    : "/* 第三項沿用 align-items */";
});
