const fixed=document.querySelector("#fixedHeight"),cases=document.querySelectorAll(".demo-case"),code=document.querySelector("#code"),explain=document.querySelector("#explain");
function render(){cases.forEach(c=>c.classList.toggle("fixed",fixed.checked));if(fixed.checked){code.textContent=`.parent {
  height: 160px;
}

.child {
  float: left;
}`;explain.textContent="父級有固定高度時，footer 會被父級高度推開，因此不一定需要額外清除浮動。";}else{code.textContent=`.child {
  float: left;
}

/* 未清除：父級高度可能變成 0 */

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}`;explain.textContent="父級沒有高度、子級全都浮動時，父級無法自然撐高；清除浮動的目標是讓浮動影響留在父盒子內部。";}}
fixed.addEventListener("change",render);render();
