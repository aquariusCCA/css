# 多類名 Demo

來源筆記：`notes/第06章_選擇器/01-基礎選擇器.md`

對應知識點：同一個 HTML 元素可以有多個 class，類名之間必須用空格分隔。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作，左右比較錯誤寫法與正確寫法。

觀察重點：

- 左側 `class="red, large-text"` 讓 `large-text` 生效，但 `.red` 沒有選到。
- 右側 `class="red large-text"` 同時套用紅色與大字。
- 多類名不是用逗號分隔，逗號會變成 class 名稱的一部分。

常見誤解：把 CSS selector 的逗號分組觀念誤用到 HTML `class` 屬性；HTML 中多個 class 應該用空格分隔。
