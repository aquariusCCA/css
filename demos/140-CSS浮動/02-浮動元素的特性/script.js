const info={
detach:{code:`.float-box {
  float: left;
}

.normal-box {
  /* 標準流盒子會往上補位 */
}`,text:"浮動盒子脫離標準流，後面的標準流盒子會像它不在普通流中一樣往上補位。"},
text:{code:`.float-box {
  float: left;
  margin-right: 14px;
}`,text:"浮動元素雖然脫標，但文字和行內內容仍會避開它，形成環繞。"},
flow:{code:`.item {
  float: left;
}

/* 空間不足時，後面的浮動盒會尋找能放下的位置 */`,text:"多個浮動盒會互相貼靠，通常頂端對齊；拖曳容器寬度可觀察換行。"},
inline:{code:`span,
a,
em {
  float: left;
  width: 130px;
  height: 86px;
}`,text:"行內元素浮動後會形成浮動盒，可以設定寬度與高度。"}
};
const buttons=document.querySelectorAll(".tabs button"),stage=document.querySelector("#stage"),code=document.querySelector("#code"),explain=document.querySelector("#explain"),range=document.querySelector("#widthRange"),out=document.querySelector("#widthOut");
function render(mode){stage.className=`stage mode-${mode}`;code.textContent=info[mode].code;explain.textContent=info[mode].text;buttons.forEach(b=>b.classList.toggle("is-active",b.dataset.mode===mode));}
buttons.forEach(b=>b.addEventListener("click",()=>render(b.dataset.mode)));
range.addEventListener("input",()=>{stage.style.width=`${range.value}px`;out.textContent=`${range.value}px`;});
render("detach");
