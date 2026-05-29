# display none 不佔位 Demo

來源筆記：`notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md`

對應知識點：`display: none` 會讓元素不顯示，並且不再佔有原本位置。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作，左右比較「修改前」與「修改後」。

觀察重點：

- 左側 `.notice` 仍在版面中，`.content` 排在它下方。
- 右側 `.notice` 套用 `display: none` 後，粉色區塊消失。
- 右側 `.content` 會往上補位，表示原本位置沒有保留。

常見誤解：`display: none` 不只是讓元素看不見，它也會讓元素不參與版面排版。
