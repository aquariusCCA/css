# id 選擇器 Demo

來源筆記：`notes/第06章_選擇器/01-基礎選擇器.md`

對應知識點：id 選擇器 `#main-title` 會選到 `id="main-title"` 的唯一元素。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作，觀察畫面中哪一個元素被套用紫色樣式。

觀察重點：

- 只有 `id="main-title"` 的元素變成紫色。
- `class="main-title"` 不會被 `#main-title` 選到。
- `#` 對應 id，`.` 對應 class。

常見誤解：把 id 當成可重複使用的樣式名稱。若同一樣式要套用到多個元素，應使用 class。
