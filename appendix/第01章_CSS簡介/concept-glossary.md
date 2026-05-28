# 名詞表

來源筆記：`notes/第01章_CSS簡介/CSS簡介.md`

用途：快速查找本章重要名詞、CSS 基本語法角色與初學者應掌握的判斷方式。

| 名詞 | 簡短定義 | 初學者理解方式 | 相關屬性或概念 | 來源 |
|---|---|---|---|---|
| CSS | 描述 HTML 元素外觀與版面呈現的樣式語言 | 回答「內容看起來如何」 | HTML、selector、declaration | [小結](../../notes/第01章_CSS簡介/CSS簡介.md#小結) |
| HTML | 描述內容與語意結構 | 回答「這是什麼內容」 | CSS、語意、外觀 | [第一課](../../notes/第01章_CSS簡介/CSS簡介.md#第一課如何讓-html-保持結構讓-css-負責外觀) |
| selector | CSS 規則中用來選出作用對象的部分 | 先確認它是否選到正確 HTML 元素 | declaration block、HTML 結構 | [第二課](../../notes/第01章_CSS簡介/CSS簡介.md#第二課一條-css-規則如何套用到畫面上) |
| declaration block | `{ ... }` 包住一組樣式宣告 | 看大括號內有哪些樣式修改 | declaration、`{}` | [基本語法回查](../../notes/第01章_CSS簡介/CSS簡介.md#基本語法回查) |
| declaration | 一個樣式設定，例如 `color: red;` | 看 property 與 value 是否完整 | property、value、`:`、`;` | [基本語法回查](../../notes/第01章_CSS簡介/CSS簡介.md#基本語法回查) |
| property | 指定要修改的樣式類型 | 問「要改哪種樣式」 | value、declaration | [基本語法回查](../../notes/第01章_CSS簡介/CSS簡介.md#基本語法回查) |
| value | 指定該樣式要使用的值 | 問「要改成什麼」 | property、declaration | [基本語法回查](../../notes/第01章_CSS簡介/CSS簡介.md#基本語法回查) |
| 英文冒號 `:` | 分隔 property 與 value | 檢查是否使用半形英文符號 | declaration、英文分號 `;` | [基本語法回查](../../notes/第01章_CSS簡介/CSS簡介.md#基本語法回查) |
| 英文分號 `;` | 結束一條 declaration | 多條宣告時用來確認語法邊界 | declaration、英文冒號 `:` | [基本語法回查](../../notes/第01章_CSS簡介/CSS簡介.md#基本語法回查) |
| 展開風格 | selector 與每條 declaration 分行呈現 | 開發時逐行檢查 selector、property、value 與符號 | 緊湊風格、可讀性、維護性 | [第三課](../../notes/第01章_CSS簡介/CSS簡介.md#第三課為什麼開發時常用展開風格) |
| 緊湊風格 | 移除空白與換行的 CSS 寫法 | 較不適合初學者閱讀與修改 | 展開風格、檔案體積 | [第三課](../../notes/第01章_CSS簡介/CSS簡介.md#第三課為什麼開發時常用展開風格) |
