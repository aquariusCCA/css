# 自身屬性與盒子空間

來源筆記：`notes/第02章_CSS屬性書寫順序/CSS屬性書寫順序.md`

對應知識點：`width`、`height`、`margin`、`padding`、`border`、`background` 屬於元素自身屬性，適合放在布局定位屬性之後集中閱讀。

開啟方式：直接用瀏覽器開啟 `index.html`。

觀察重點：

- 左側 `padding: 0;`，內容貼近邊框。
- 右側 `margin: 18px;` 拉開盒子和舞台邊界，`padding: 18px;` 拉開內容和邊框。
- `border` 與 `background` 讓元素自身的可見範圍更清楚。

常見誤解：把 `margin` 和 `padding` 當成同一種空間。`margin` 影響元素外部距離，`padding` 影響內容與元素邊界之間的距離。
