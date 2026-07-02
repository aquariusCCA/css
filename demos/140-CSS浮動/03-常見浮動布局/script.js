const layouts={
page:{code:`.top,
.footer {
  /* 標準流：上下排列 */
}

.box li {
  float: left;
  width: 237px;
  margin-right: 10px;
}

.box .last {
  margin-right: 0;
}`,calc:"上、下大區塊保留標準流；內容區子項目用 float: left 形成四欄。"},
cards:{code:`.box {
  width: 1226px;
}

.box li {
  float: left;
  width: 296px;
  margin-right: 14px;
}

.box .last {
  margin-right: 0;
}`,calc:"寬度計算：296 * 4 + 14 * 3 = 1226。最後一項不能再有右間距。"},
grid:{code:`.left {
  float: left;
  width: 234px;
}

.right {
  float: left;
}

.right > div {
  float: left;
}`,calc:"外層左右欄先浮動，右欄內部卡片再浮動，形成兩層浮動布局。"}
};
const buttons=document.querySelectorAll(".tabs button"),stage=document.querySelector("#stage"),code=document.querySelector("#code"),calc=document.querySelector("#calc"),bad=document.querySelector("#badGap");
function render(layout){stage.className=`stage layout-${layout}${bad.checked?" bad-gap":""}`;code.textContent=layouts[layout].code;calc.textContent=bad.checked?"最後一項仍有右間距時，總寬度可能超出父級，卡片會換行或錯位。":layouts[layout].calc;buttons.forEach(b=>b.classList.toggle("is-active",b.dataset.layout===layout));}
let current="page";buttons.forEach(b=>b.addEventListener("click",()=>{current=b.dataset.layout;render(current);}));bad.addEventListener("change",()=>render(current));render(current);
