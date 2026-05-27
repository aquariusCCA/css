# display: flex 寫在父元素上

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

目標知識點：`display: flex` 讓父元素成為 flex container。

## 開啟方式

直接用瀏覽器開啟 `index.html`。

## 觀察重點

- 左側是 normal flow，子元素依原本排版行為排列。
- 右側的 `.layout` 設定 `display: flex`，直接子元素變成 flex items。
- 父項屬性應寫在父元素上，不是寫在每個子元素上。

## 常見誤解

看到「控制子元素排列」就把 Flex 父項屬性寫在 `.item` 上。正確檢查順序是先確認哪個元素是 flex container。

