# flex-flow 同時設定方向與換行

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

目標知識點：`flex-flow` 是 `flex-direction` 與 `flex-wrap` 的簡寫。

## 開啟方式

直接用瀏覽器開啟 `index.html`。

## 觀察重點

- 左側分別設定 `flex-direction: row` 與 `flex-wrap: wrap`。
- 右側使用 `flex-flow: row wrap`。
- 兩邊畫面相同，代表簡寫設定的是方向與換行。

## 常見誤解

`flex-flow` 不包含 `justify-content`、`align-items` 或 `align-content`，它只處理主軸方向與是否換行。

