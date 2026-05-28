# Demo 05：不同 selector 的優先級

來源筆記：`notes/第04章_CSS三大特性/CSS三大特性.md`

對應知識點：不同 selector 同時選到同一元素並設定同一屬性時，先比較 specificity；ID 選擇器高於類選擇器，類選擇器高於標籤選擇器。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作，觀察文字顏色與 CSS 書寫順序。

觀察重點：`span`、`.text`、`#demo` 都選到同一段文字，而且都設定 `color`。即使 `span` 寫在最後，最後仍是 `#demo` 的綠色。

常見誤解：不要只看誰寫在下面；不同 selector 權重不同時，要先比較 specificity。
