# visibility hidden 保留空位 Demo

來源筆記：`notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md`

對應知識點：`visibility: hidden` 會讓元素不可見，但仍然保留原本位置。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作，左右比較「修改前」與「修改後」。

觀察重點：

- 左側 `.avatar` 可見，`.name` 排在它下方。
- 右側 `.avatar` 使用 `visibility: hidden`，粉色盒子看不見。
- 右側 `.name` 沒有往上補位，表示 `.avatar` 的空間仍然保留。

常見誤解：`visibility: hidden` 和 `display: none` 都會讓元素看不見，但只有 `visibility: hidden` 會保留原本位置。
