const methods={
none:{code:`.child {
  float: left;
}

/* 父級沒有高度，也沒有清除浮動 */`,pros:"沒有額外程式碼。",cons:"父級高度可能塌陷，footer 會上移。"},
extra:{code:`<div class="clear"></div>

.clear {
  clear: both;
}`,pros:"原理直觀，很適合理解 clear: both。",cons:"會增加沒有語意的空標籤。"},
overflow:{code:`.parent {
  overflow: hidden;
}`,pros:"程式碼簡潔，父級會建立 BFC。",cons:"可能裁切超出父級的內容。"},
after:{code:`.clearfix::after {
  content: "";
  display: block;
  clear: both;
}`,pros:"不污染 HTML，可做成工具類重複使用。",cons:"比額外標籤法抽象一點。"},
both:{code:`.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}

.clearfix::after {
  clear: both;
}`,pros:"常見通用 clearfix 寫法。",cons:"對初學者較公式化。"},
flow:{code:`.parent {
  display: flow-root;
}`,pros:"語意明確，現代 CSS 中很清楚。",cons:"舊教材較少出現。"}
};
const buttons=document.querySelectorAll(".tabs button"),stage=document.querySelector("#stage"),code=document.querySelector("#code"),pros=document.querySelector("#pros"),cons=document.querySelector("#cons");
function render(method){stage.className=`stage method-${method}`;code.textContent=methods[method].code;pros.textContent=methods[method].pros;cons.textContent=methods[method].cons;buttons.forEach(b=>b.classList.toggle("is-active",b.dataset.method===method));}
buttons.forEach(b=>b.addEventListener("click",()=>render(b.dataset.method)));
render("none");
