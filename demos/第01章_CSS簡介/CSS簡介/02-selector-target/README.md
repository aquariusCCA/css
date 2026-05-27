# Selector 作用對象

來源筆記：`notes/第01章_CSS簡介/CSS簡介.md`

對應知識點：CSS 規則要先透過 selector 選到元素，declaration 才會影響畫面。

開啟方式：直接用瀏覽器開啟 `index.html`。

觀察重點：

- 左邊的 HTML 只有 `<p>`，但 CSS selector 寫的是 `.missed h1`，所以沒有元素被選到。
- 右邊的 HTML 有 `<h2>`，且 selector `.matched h2` 能匹配它，所以文字變成橘紅色。
- 先確認 selector 是否匹配，再檢查 property 與 value。

常見誤解：以為只要 CSS 裡寫了 `color`，任何文字都會變色。實際上，selector 沒選到元素時，宣告不會套用到畫面上。
