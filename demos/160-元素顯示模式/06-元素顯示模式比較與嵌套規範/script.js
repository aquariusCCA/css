const blockLink = document.querySelector("#block-link");

function update() {
  document.body.classList.toggle("use-block", blockLink.checked);
}

blockLink.addEventListener("change", update);
update();
