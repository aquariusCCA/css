# CSS 屬性速查表

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

用途：快速查找本章出現的 Flex 父項屬性、作用對象與使用注意事項。

| 屬性 | 作用對象 | 用途 | 常見值 | 預設值 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `display` | 父元素 | 讓父元素成為 flex container | `flex` | 待補來源 | 本章其他父項屬性都以 `display: flex` 為前提 | [前置知識](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#前置知識) |
| `flex-direction` | flex container | 決定主軸方向與子元素排列方向 | `row`、`row-reverse`、`column`、`column-reverse` | `row` | 主軸改變時，`justify-content` 與 `align-items` 的判斷方向也會改變 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| `justify-content` | flex container | 控制主軸上的對齊與剩餘空間分配 | `flex-start`、`flex-end`、`center`、`space-between`、`space-around`、`space-evenly` | `flex-start` | 沒有主軸剩餘空間時，畫面變化不明顯 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `align-items` | flex container | 控制單行 flex items 在側軸上的對齊 | `stretch`、`flex-start`、`flex-end`、`center`、`baseline` | `stretch` | 多行整體排列改看 `align-content`；`stretch` 需項目沒有固定側軸尺寸才明顯 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `flex-wrap` | flex container | 決定子元素是否允許換行 | `nowrap`、`wrap`、`wrap-reverse` | `nowrap` | 只決定能不能換行，不負責多行之間的側軸分配 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| `align-content` | flex container | 控制多條 flex lines 在側軸上的排列 | `stretch`、`flex-start`、`flex-end`、`center`、`space-between`、`space-around`、`space-evenly` | `stretch` | 需要已換行且側軸有剩餘空間；單行通常看不出效果 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `flex-flow` | flex container | 同時設定主軸方向與是否換行 | `row wrap`、`column nowrap` | 待補來源 | 只包含 `flex-direction` 與 `flex-wrap`，不包含對齊屬性 | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
