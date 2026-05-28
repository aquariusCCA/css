# 問題對應檢查表

來源筆記：`notes/第01章_CSS簡介/CSS簡介.md`

用途：遇到畫面問題時，快速判斷應優先檢查哪個 CSS 語法角色或條件。

| 畫面問題 | 優先檢查 | 建議檢查或語法 | 判斷理由 | 來源 |
|---|---|---|---|---|
| 不知道該改 HTML 還是 CSS | 問題是內容語意還是外觀呈現 | HTML 標籤、CSS 規則 | HTML 負責內容結構，CSS 負責外觀與布局 | [第一課](../../notes/第01章_CSS簡介/CSS簡介.md#第一課如何讓-html-保持結構讓-css-負責外觀) |
| 標題想變紅並放大 | 作用對象是否是 `h1` | `h1 { color: red; font-size: 40px; }` | selector 選到標題，declaration 描述外觀修改 | [第一課](../../notes/第01章_CSS簡介/CSS簡介.md#第一課如何讓-html-保持結構讓-css-負責外觀) |
| 看不懂 CSS 規則作用在誰身上 | 先讀 selector | `selector { property: value; }` | selector 決定這條規則的作用對象 | [第二課](../../notes/第01章_CSS簡介/CSS簡介.md#第二課一條-css-規則如何套用到畫面上) |
| 看不懂 CSS 規則改了什麼 | 再讀 declaration block | `property: value;` | declaration 描述樣式變更 | [第二課](../../notes/第01章_CSS簡介/CSS簡介.md#第二課一條-css-規則如何套用到畫面上) |
| CSS 寫了但段落文字沒變紅 | selector 是否匹配 HTML | HTML 是 `<p>` 時，不要用 `h1` 期待改段落 | selector 沒有匹配目標元素時，declaration 不會影響畫面 | [範例拆解](../../notes/第01章_CSS簡介/CSS簡介.md#範例拆解) |
| CSS 看起來完整但可能無法解析 | 冒號與分號是否為英文符號 | 使用 `color: red;` | 本章提醒 CSS 語法中的冒號與分號應使用英文符號 | [誤解三](../../notes/第01章_CSS簡介/CSS簡介.md#誤解三中英文標點可以混用) |
| 不知道日常應用展開或緊湊風格 | 目標是開發維護還是降低檔案體積 | 開發用展開風格；上線可再壓縮 | 兩種寫法畫面效果相同，差在可讀性與檔案體積 | [第三課](../../notes/第01章_CSS簡介/CSS簡介.md#第三課為什麼開發時常用展開風格) |
| 想檢查 declaration 是否放對位置 | property 是否寫在 `{}` 內 | `{}`、`:`、`;` | 大括號外的 property 無法被理解成該 selector 的宣告 | [範例拆解](../../notes/第01章_CSS簡介/CSS簡介.md#範例拆解) |
