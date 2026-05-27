# justify-content 控制主軸剩餘空間

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

目標知識點：`justify-content` 控制主軸上的剩餘空間分配。

## 開啟方式

直接用瀏覽器開啟 `index.html`。

## 觀察重點

- 三組範例的 HTML 結構與 item 寬度相同。
- 差異只在父元素的 `justify-content`。
- `space-between` 會把剩餘空間放在項目之間，不是放在兩端。

## 常見誤解

`justify-content` 不是永遠代表水平對齊。它控制主軸；本 demo 看起來是水平，是因為主軸維持 `row`。

