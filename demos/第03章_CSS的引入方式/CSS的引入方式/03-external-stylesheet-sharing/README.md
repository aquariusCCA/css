# Demo 03：外部樣式表共用

來源筆記：`notes/第03章_CSS的引入方式/CSS的引入方式.md`

對應知識點：外部樣式表把 CSS 放在獨立 `.css` 檔案中，再由 HTML 使用 `<link rel="stylesheet" href="...">` 引入。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作。`index.html` 會預覽 `home.html` 與 `about.html`，兩個頁面都引用 `shared.css`。

觀察重點：兩個 HTML 內容不同，但標題顏色、邊線、卡片樣式與間距一致，因為它們共用同一份外部 CSS 檔案。

常見誤解：外部樣式表不會自動讓設計變好看；它的主要價值是讓樣式獨立、可共用、可維護。
