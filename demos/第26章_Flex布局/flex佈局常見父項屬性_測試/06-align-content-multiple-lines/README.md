# align-content 控制多行側軸分配

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

目標知識點：`align-content` 控制多行 flex lines 在側軸上的排列。

## 開啟方式

直接用瀏覽器開啟 `index.html`。

## 觀察重點

- 兩組容器都先設定 `flex-wrap: wrap`，所以 items 形成多行。
- `flex-start` 讓多行靠側軸起點。
- `space-between` 把多行分散到側軸兩端。

## 常見誤解

如果只有一行 items，`align-content` 通常看不出效果。單行側軸對齊應先看 `align-items`。

