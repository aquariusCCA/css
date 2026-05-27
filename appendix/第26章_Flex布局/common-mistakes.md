# 常見誤解速查

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性.md`

用途：快速排查本章常見誤解與錯誤用法。

| 誤解或錯誤寫法 | 錯誤原因 | 修正方式 | 相關概念 | 來源 |
|---|---|---|---|---|
| 以為 `justify-content` 永遠是水平對齊 | 只記住預設 `row` 的畫面結果，沒有回到主軸 | 先看 `flex-direction`，`justify-content` 永遠控制主軸 | 主軸、`flex-direction`、`justify-content` | [誤解一](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#誤解一justify-content-就是水平置中) |
| 以為 `align-items` 永遠是垂直對齊 | 把預設 `row` 的側軸方向當成固定規則 | 先看側軸方向；`column` 時側軸通常變成水平方向 | 側軸、`align-items` | [誤解二](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#誤解二align-items-就是垂直置中) |
| 單行時一直調整 `align-content` | 沒有分清楚單行 item 對齊與多行 line 分配 | 單行用 `align-items`，多行整體才用 `align-content` | 單行、多行、`align-items`、`align-content` | [誤解三](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#誤解三單行時調整-align-content) |
| 子元素寬度加總超過父容器就以為一定會換行 | Flex 預設是 `nowrap` | 設定 `flex-wrap: wrap` 或使用包含 `wrap` 的 `flex-flow` | `flex-wrap`、`flex-flow` | [誤解四](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#誤解四忘記設定-flex-wrap) |
| 把父項屬性寫在子元素上 | 看到「控制子元素排列」就誤以為要寫在子元素本身 | 將本章屬性寫在 flex container 上 | flex container、flex item | [誤解五](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#誤解五把父項屬性寫在子元素上) |
| 設定了 `justify-content` 但效果不明顯 | 主軸上可能沒有剩餘空間，或子元素已佔滿主軸 | 檢查父容器尺寸、子元素尺寸與主軸剩餘空間 | 剩餘空間、`justify-content` | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| 以為 `stretch` 一定會明顯拉伸項目 | 子元素可能已經設定固定高度或側軸尺寸 | 移除固定側軸尺寸，或改用其他對齊值 | `align-items: stretch` | [stretch 對照](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#對照範例為什麼-stretch-有時看不出來) |
| 以為 `flex-wrap` 會控制行距或多行分配 | `flex-wrap` 只決定是否換行 | 換行後的多行側軸分配改看 `align-content` | `flex-wrap`、`align-content` | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| 以為 `flex-flow` 包含所有 Flex 對齊設定 | `flex-flow` 只合併方向與換行 | 對齊仍需使用 `justify-content`、`align-items` 或 `align-content` | `flex-flow` | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| 只看水平或垂直，不先判斷軸線 | Flex 對齊屬性跟主軸、側軸有關 | 先問：誰是 flex container？主軸是哪個方向？目前是單行還是多行？ | 主軸、側軸、單行、多行 | [小結](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#小結) |
