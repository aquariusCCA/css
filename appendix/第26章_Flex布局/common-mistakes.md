# 常見誤解速查

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

用途：快速排查本章常見 Flex 父項屬性誤解與錯誤用法。

| 誤解或錯誤寫法 | 錯誤原因 | 修正方式 | 相關概念 | 來源 |
|---|---|---|---|---|
| 以為 `justify-content` 就是水平置中 | 只記住預設 `row` 的畫面結果 | 先看 `flex-direction`，再判斷主軸 | `justify-content`、主軸 | [誤解一](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#誤解一justify-content-就是水平置中) |
| 以為 `align-items` 就是垂直置中 | 把預設 `row` 的結果當成固定規則 | 記住 `align-items` 控制側軸 | `align-items`、側軸 | [誤解二](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#誤解二align-items-就是垂直置中) |
| 單行時一直調 `align-content` | 沒分清楚單行 item 對齊與多行 line 分配 | 單行先看 `align-items` | `align-items`、`align-content` | [誤解三](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#誤解三單行時調整-align-content) |
| 子元素寬度超過父容器就期待自動換行 | 忘記 Flex 預設是 `nowrap` | 設定 `flex-wrap: wrap` 或含 `wrap` 的 `flex-flow` | `flex-wrap`、`flex-flow` | [誤解四](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#誤解四忘記設定-flex-wrap) |
| 把父項屬性寫在子元素上 | 誤以為控制子元素排列就要寫在子元素本身 | 將本章父項屬性寫在 flex container 上 | flex container、flex item | [誤解五](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#誤解五把父項屬性寫在子元素上) |
| `align-items: stretch` 沒有把項目拉高 | 子元素已設定固定高度 | 移除固定側軸尺寸，或改用其他側軸對齊值 | `align-items: stretch` | [對照範例](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#對照範例為什麼-stretch-有時看不出效果) |
| 以為 `flex-wrap` 也會決定多行間距 | 把能不能換行與行距分配混在一起 | 先用 `flex-wrap` 形成多行，再用 `align-content` 控制多行側軸排列 | `flex-wrap`、`align-content` | [第四課誤判修正](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| 以為 `flex-flow` 也包含對齊設定 | 混淆簡寫屬性的範圍 | `flex-flow` 只處理方向與換行 | `flex-flow`、`justify-content`、`align-items`、`align-content` | [第六課誤判修正](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| 忘記主軸改變會影響對齊方向 | 把 `justify-content` 與 `align-items` 背成固定水平或垂直 | 先判斷主軸，再看主軸與側軸對齊 | `flex-direction`、主軸、側軸 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
