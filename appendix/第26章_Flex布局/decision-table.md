# 問題對應屬性表

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性.md`

用途：遇到畫面問題時，快速判斷應優先檢查哪個 CSS 屬性或條件。

| 畫面問題 | 優先檢查 | 建議屬性 | 判斷理由 | 來源 |
|---|---|---|---|---|
| 想讓父容器控制子元素排列 | 父元素是否已成為 flex container | `display: flex` | 本章父項屬性需要 Flex 模型作為前提。 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| 子元素方向不是想要的水平或垂直 | 目前主軸方向是 `row` 還是 `column` | `flex-direction` | 子元素會沿著主軸排列。 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| 想讓項目在主軸置中 | 主軸方向與是否有剩餘空間 | `justify-content: center` | `justify-content` 控制主軸上的對齊。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| 想讓第一個貼起點、最後一個貼終點 | 主軸是否有可分配的剩餘空間 | `justify-content: space-between` | `space-between` 把剩餘空間放在項目之間。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| 想讓主軸所有間隔相等 | 是否需要兩端與中間間隔一致 | `justify-content: space-evenly` | `space-evenly` 讓所有間隔相等。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| 單行項目想在側軸置中 | 目前是否只有一行 flex items | `align-items: center` | `align-items` 控制單行項目在側軸上的對齊。 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| 子元素沒有高度時想沿側軸撐滿 | 子元素是否已有固定側軸尺寸 | `align-items: stretch` | `stretch` 在沒有固定側軸尺寸時會拉伸。 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| 子元素太多但沒有換行 | 父容器是否仍是 `nowrap` | `flex-wrap: wrap` | Flex 預設不換行。 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| 已經換行，想控制多行靠上或置中 | 是否真的形成多行，側軸是否有剩餘空間 | `align-content` | `align-content` 控制多行整體在側軸上的排列。 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第五課多行之後行與行之間要怎麼排) |
| 單行時調整 `align-content` 沒有效果 | 是否只有一條 flex line | `align-items` | 單行側軸對齊應優先使用 `align-items`。 | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| 想同時設定方向與換行 | 是否只需要設定 `flex-direction` 和 `flex-wrap` | `flex-flow` | `flex-flow` 是方向與換行的複合屬性。 | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| 設定了父項屬性但畫面沒變 | 屬性是否寫在 flex container 上 | `display`、對應父項屬性 | 本章屬性主要控制父容器如何安排直接子元素。 | [常見誤解](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#常見誤解與修正方式) |
| 不確定該用哪個對齊屬性 | 先判斷主軸、側軸、單行或多行 | `justify-content`、`align-items`、`align-content` | 主軸看 `justify-content`，單行側軸看 `align-items`，多行側軸看 `align-content`。 | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
