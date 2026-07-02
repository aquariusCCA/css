const data = {
  normal: {
    code: `div {
  width: 150px;
  height: 92px;
}

/* 標準流中，div 會獨占一行 */`,
    text: "標準流很適合處理上下結構。塊級盒子預設會一個接一個往下排。"
  },
  left: {
    code: `div {
  float: left;
  width: 150px;
  height: 92px;
}`,
    text: "多個盒子都 left 浮動後，會向左貼靠，形成傳統橫向排列。"
  },
  split: {
    code: `.left {
  float: left;
}

.right {
  float: right;
}`,
    text: "left 與 right 浮動可以讓兩個盒子分別貼向父容器左右兩側。"
  },
  wrap: {
    code: `img {
  float: left;
  margin-right: 16px;
}`,
    text: "浮動元素脫離標準流，但仍會影響文字與行內內容，所以文字會繞著它排版。"
  }
};
const buttons = document.querySelectorAll(".tabs button");
const stage = document.querySelector("#stage");
const code = document.querySelector("#code");
const explain = document.querySelector("#explain");
function render(mode){stage.className=`stage mode-${mode}`;code.textContent=data[mode].code;explain.textContent=data[mode].text;buttons.forEach(b=>b.classList.toggle("is-active",b.dataset.mode===mode));}
buttons.forEach(button=>button.addEventListener("click",()=>render(button.dataset.mode)));
render("normal");
