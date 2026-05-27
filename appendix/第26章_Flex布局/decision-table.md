# 問題對應屬性表

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

用途：遇到 Flex 排版問題時，快速判斷應優先檢查哪個 CSS 屬性或條件。

| 畫面問題 | 優先檢查 | 建議屬性 | 判斷理由 | 來源 |
|---|---|---|---|---|
| 子元素沒有照 Flex 方式排列 | 父元素是否有 `display: flex` | `display` | 父元素成為 flex container 後，直接子元素才會進入 Flex 佈局 | [前置知識](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#前置知識) |
| 想把橫向排列改成直向排列 | 目前主軸方向 | `flex-direction` | `flex-direction` 會改變主軸與子元素排列方向 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| 想控制主軸上的靠左、靠右或置中 | 是否有主軸剩餘空間 | `justify-content` | `justify-content` 控制主軸上的對齊與空間分配 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| 想讓第一個貼起點、最後一個貼終點 | 主軸上是否有可分配空間 | `justify-content: space-between` | `space-between` 把剩餘空間放在項目之間 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `justify-content` 調了但畫面不明顯 | 子元素是否已佔滿主軸 | `justify-content` | 沒有主軸剩餘空間時，分配效果不明顯 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| 單行項目想在側軸置中 | 目前是不是單行 | `align-items: center` | `align-items` 控制單行 flex items 在側軸上的對齊 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `stretch` 看不出拉伸效果 | 子元素是否有固定側軸尺寸 | `align-items: stretch` | 子元素已有固定高度時，側軸拉伸不明顯 | [對照範例](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#對照範例為什麼-stretch-有時看不出效果) |
| 子元素一行放不下但沒有換行 | 是否仍是 `nowrap` | `flex-wrap: wrap` | Flex 預設會盡量排在同一條 flex line 上 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| 已換成多行後，想讓多行靠上或置中 | 是否已形成多條 flex lines | `align-content` | `align-content` 控制多行在側軸上的整體排列 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `align-content` 調了但畫面不變 | 是否換行、是否有側軸剩餘空間 | `align-content`、`flex-wrap` | 單行或沒有側軸剩餘空間時，`align-content` 通常不明顯 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| 同時想設定排列方向與換行 | 是否只是合併這兩件事 | `flex-flow` | `flex-flow` 是 `flex-direction` 與 `flex-wrap` 的複合屬性 | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| 不知道該用 `align-items` 還是 `align-content` | 目前要控制單行還是多行 | `align-items`、`align-content` | 單行找 `align-items`，多行找 `align-content` | [選擇判斷](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#align-items-與-align-content-怎麼選) |
| 不確定 Flex 對齊問題從哪裡查 | flex container、主軸、單行或多行 | `flex-direction`、`justify-content`、`align-items`、`align-content` | 先判斷父子關係、軸線與行數，才能選對父項屬性 | [小結](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#小結) |
