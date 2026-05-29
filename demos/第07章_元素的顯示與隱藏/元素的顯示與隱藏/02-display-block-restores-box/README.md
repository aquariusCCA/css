# display block 重新顯示 Demo

來源筆記：`notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md`

對應知識點：將 `display: none` 改成 `display: block` 後，元素會重新以 block 盒子參與排版。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作，左右比較隱藏狀態與顯示狀態。

觀察重點：

- 左側 `.demo-panel` 使用 `display: none`，畫面只看到 `.next`。
- 右側 `.demo-panel` 使用 `display: block`，粉色面板重新出現。
- 右側 `.next` 被排到粉色面板下方，表示 `.demo-panel` 又開始佔用版面空間。

常見誤解：`display: block` 會讓元素以 block 方式顯示；若原本元素應該是 inline、flex 或 grid，不能一律用 `block` 當還原值。
