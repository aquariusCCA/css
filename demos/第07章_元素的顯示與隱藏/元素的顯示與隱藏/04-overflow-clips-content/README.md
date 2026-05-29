# overflow 處理溢出內容 Demo

來源筆記：`notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md`

對應知識點：`overflow` 控制內容超出盒子後的顯示方式，不是控制整個元素是否從版面消失。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作；在 `auto` 範例中，可以直接捲動粉色盒子內的內容。

觀察重點：

- `overflow: visible` 讓超出盒子的文字仍然露出。
- `overflow: hidden` 會裁切超出邊框的文字。
- `overflow: auto` 在內容超出時提供捲動查看。
- 三個範例的盒子背景、邊框與位置都仍然存在，表示元素本身沒有被隱藏。

常見誤解：`overflow: hidden` 的 hidden 是裁切溢出內容，不是像 `display: none` 一樣移除整個元素。
