# CSS 屬性速查表

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性.md`

用途：快速查找本章出現的 Flex 父項屬性、作用對象與使用注意事項。

| 屬性 | 作用對象 | 用途 | 常見值 | 預設值 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `display` | 父元素 | 讓父元素成為 flex container | `flex` | 待補來源 | 是本章父項屬性生效的前提。 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| `flex-direction` | flex container | 決定主軸方向與子元素排列方向 | `row`、`row-reverse`、`column`、`column-reverse` | `row` | 主軸改變後，`justify-content` 和 `align-items` 的視覺方向也會跟著改變。 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| `justify-content` | flex container | 控制主軸上的對齊與剩餘空間分配 | `flex-start`、`flex-end`、`center`、`space-between`、`space-around`、`space-evenly` | `flex-start` | 如果主軸沒有剩餘空間，效果不明顯。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| `align-items` | flex container | 控制單行 flex items 在側軸上的對齊 | `stretch`、`flex-start`、`flex-end`、`center`、`baseline` | `stretch` | 適合單行情境；多行整體分配應看 `align-content`。 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| `align-content` | flex container | 控制多條 flex lines 在側軸上的排列 | `stretch`、`flex-start`、`flex-end`、`center`、`space-between`、`space-around`、`space-evenly` | `stretch` | 通常需要 `flex-wrap` 不是 `nowrap`，且側軸有剩餘空間才明顯。 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第五課多行之後行與行之間要怎麼排) |
| `flex-wrap` | flex container | 決定 flex items 是否允許換行 | `nowrap`、`wrap`、`wrap-reverse` | `nowrap` | 只決定能不能換行，不負責行與行之間的側軸分配。 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| `flex-flow` | flex container | 同時設定主軸方向與是否換行 | `row wrap`、`column nowrap` | 待補來源 | 是 `flex-direction` 與 `flex-wrap` 的複合屬性，不包含對齊屬性。 | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
