const toggles = {
  "has-width": document.querySelector("#has-width"),
  "auto-margin": document.querySelector("#auto-margin"),
  "vertical-margin": document.querySelector("#vertical-margin"),
  "hide-collapse": document.querySelector("#hide-collapse"),
};

const statusList = document.querySelector("#status-list");

function update() {
  Object.entries(toggles).forEach(([className, input]) => {
    document.body.classList.toggle(className, input.checked);
  });

  const messages = [
    {
      ok: toggles["has-width"].checked && toggles["auto-margin"].checked,
      text: toggles["has-width"].checked && toggles["auto-margin"].checked
        ? "水平居中條件成立：子元素有明確寬度，左右外距交給瀏覽器分配。"
        : "水平居中條件不足：少了 width 或左右 auto，就看不出 margin: 0 auto 的效果。",
    },
    {
      ok: toggles["vertical-margin"].checked,
      text: toggles["vertical-margin"].checked
        ? "固定高度場景中，margin-top: 125px 讓盒子看起來垂直居中。"
        : "一般正常流裡，margin: auto 不會自動完成垂直居中。",
    },
    {
      ok: toggles["hide-collapse"].checked,
      text: toggles["hide-collapse"].checked
        ? "父元素設定 overflow: hidden，可避免上外距塌陷干擾觀察。"
        : "移除 overflow 後，父子垂直外距塌陷可能讓位置看起來不如預期。",
    },
  ];

  statusList.innerHTML = messages
    .map((message) => `<li class="${message.ok ? "is-ok" : ""}">${message.text}</li>`)
    .join("");
}

Object.values(toggles).forEach((input) => input.addEventListener("change", update));
update();
