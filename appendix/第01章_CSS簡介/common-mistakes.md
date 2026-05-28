# 常見誤解速查

來源筆記：`notes/第01章_CSS簡介/CSS簡介.md`

用途：快速排查本章常見誤解、錯誤原因與修正方向。

| 誤解或錯誤寫法 | 錯誤原因 | 修正方式 | 相關概念 | 來源 |
|---|---|---|---|---|
| 把文字變大就當成真正標題 | CSS 只改外觀，不改 HTML 語意 | 先用正確 HTML 標籤，再用 CSS 調整外觀 | HTML、CSS、語意 | [誤解一](../../notes/第01章_CSS簡介/CSS簡介.md#誤解一css-會改變-html-的語意) |
| 只寫 property 就期待畫面一定改變 | 沒確認 selector 是否匹配元素 | 先對照 selector 與 HTML 結構 | selector、declaration | [誤解二](../../notes/第01章_CSS簡介/CSS簡介.md#誤解二寫了-property畫面就一定會變) |
| 寫成 `color：red；` | CSS 語法中的冒號與分號應使用英文符號 | 改成 `color: red;` | `:`、`;`、declaration | [誤解三](../../notes/第01章_CSS簡介/CSS簡介.md#誤解三中英文標點可以混用) |
| 日常開發優先寫緊湊風格 | 初學者不易看出語法邊界 | 學習與開發階段先使用展開風格 | 展開風格、緊湊風格 | [誤解四](../../notes/第01章_CSS簡介/CSS簡介.md#誤解四緊湊風格比較適合日常開發) |
| 把 CSS 只理解成讓網頁變好看 | 忽略文字呈現、圖片外型、間距與版面配置 | 把 CSS 視為外觀與版面呈現規則 | CSS 角色、版面呈現 | [誤解五](../../notes/第01章_CSS簡介/CSS簡介.md#誤解五css-只是讓網頁變好看) |
| 把 `font-size` 寫在大括號外 | declaration 不在 declaration block 內 | 把 property 與 value 放進 selector 的 `{}` | declaration block、property、value | [範例拆解](../../notes/第01章_CSS簡介/CSS簡介.md#範例拆解) |
| HTML 只有 `<p>`，卻期待 `h1` 規則改到段落 | selector 沒有匹配目標元素 | 改 selector，或確認 HTML 結構符合預期 | selector、HTML 結構 | [範例拆解](../../notes/第01章_CSS簡介/CSS簡介.md#範例拆解) |
