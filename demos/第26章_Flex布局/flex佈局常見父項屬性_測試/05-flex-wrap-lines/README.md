# flex-wrap 決定是否換行

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

目標知識點：`flex-wrap` 決定 flex items 是否允許換行。

## 開啟方式

直接用瀏覽器開啟 `index.html`。

## 觀察重點

- `nowrap` 是預設行為，items 會盡量留在同一行。
- `wrap` 允許 items 在主軸空間不足時換到下一行。
- 換行後的行距與整體分配不是 `flex-wrap` 負責。

## 常見誤解

子元素寬度加總超過父容器，不代表一定會換行；Flex 預設是 `nowrap`。

