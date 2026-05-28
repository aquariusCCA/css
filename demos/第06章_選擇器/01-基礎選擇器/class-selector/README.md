# 類選擇器 Demo

來源筆記：`notes/第06章_選擇器/01-基礎選擇器.md`

對應知識點：類選擇器 `.important` 會選到 `class="important"` 的元素。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作，左右比較「選太廣」與「選精準」。

觀察重點：

- 左側使用 `li`，所有清單項目都變紅。
- 右側使用 `.important`，只有前兩個有 class 的項目變紅。
- CSS 中的句點 `.` 對應 HTML 的 `class` 屬性。

常見誤解：HTML 寫了 `class="important"`，CSS 卻漏掉 `.` 寫成 `important { ... }`，這樣 CSS 會把它當成標籤名稱。
