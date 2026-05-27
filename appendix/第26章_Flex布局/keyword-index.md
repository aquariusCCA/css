# 關鍵字索引

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性.md`

用途：使用關鍵字快速定位本章相關屬性、名詞、問題與查表檔案。

| 關鍵字 | 類型 | 對應內容 | 用途說明 | 來源 |
|---|---|---|---|---|
| Flex 佈局 | 名詞 | `concept-glossary.md` | 查本章排版模型的基本角色。 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| flex container | 名詞 | `concept-glossary.md` | 查父元素角色與屬性作用位置。 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| flex item | 名詞 | `concept-glossary.md` | 查直接子元素在 Flex 中的角色。 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| 父項屬性 | 名詞 | `properties-reference.md` | 查哪些屬性要寫在 flex container 上。 | [本章範圍](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#本章範圍) |
| 直接子元素 | 名詞 | `concept-glossary.md` | 查哪些元素會被 Flex 容器安排。 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| 主軸 | 名詞 | `concept-glossary.md`、`decision-table.md` | 判斷 `justify-content` 控制方向。 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| 側軸 | 名詞 | `concept-glossary.md`、`decision-table.md` | 判斷 `align-items` 與 `align-content` 控制方向。 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| 單行 | 名詞 | `align-items`、`decision-table.md` | 判斷應使用 `align-items`。 | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| 多行 | 名詞 | `align-content`、`decision-table.md` | 判斷應使用 `align-content`。 | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| 剩餘空間 | 名詞 | `justify-content`、`align-content` | 查對齊或間距效果不明顯的原因。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| 換行 | 問題 | `flex-wrap`、`decision-table.md` | 查子元素空間不足時如何換到下一行。 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| 置中 | 問題 | `justify-content`、`align-items`、`align-content` | 依主軸、單行側軸或多行側軸選屬性。 | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| 水平置中 | 同義詞 | `justify-content`、`align-items` | 需先看目前主軸與側軸方向。 | [誤解一](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#誤解一justify-content-就是水平置中) |
| 垂直置中 | 同義詞 | `justify-content`、`align-items` | 需先看 `flex-direction`。 | [誤解二](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#誤解二align-items-就是垂直置中) |
| 平均分散 | 問題 | `space-between`、`space-around`、`space-evenly` | 查主軸或多行側軸的間距分配。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| 兩端對齊 | 問題 | `space-between` | 查第一個與最後一個貼近兩端的分配方式。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| 拉伸 | 名詞 | `stretch`、`concept-glossary.md` | 查項目或多行沿側軸填滿的行為。 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| 基線對齊 | 名詞 | `baseline` | 查單行項目依文字基線對齊。 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| `display` | 屬性 | `properties-reference.md` | 查 Flex 父容器成立前提。 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| `display: flex` | 值 | `values-reference.md` | 查如何讓父元素成為 flex container。 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| `flex-direction` | 屬性 | `properties-reference.md`、`values-reference.md` | 查主軸方向與排列方向。 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| `justify-content` | 屬性 | `properties-reference.md`、`decision-table.md` | 查主軸對齊與剩餘空間分配。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| `align-items` | 屬性 | `properties-reference.md`、`decision-table.md` | 查單行側軸對齊。 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| `align-content` | 屬性 | `properties-reference.md`、`decision-table.md` | 查多行側軸分配。 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第五課多行之後行與行之間要怎麼排) |
| `flex-wrap` | 屬性 | `properties-reference.md`、`decision-table.md` | 查是否允許換行。 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| `flex-flow` | 屬性 | `properties-reference.md`、`values-reference.md` | 查方向與換行的簡寫。 | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| `row` | 值 | `values-reference.md` | 查預設橫向主軸。 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| `column` | 值 | `values-reference.md` | 查直向主軸。 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| `center` | 值 | `values-reference.md` | 查主軸、單行側軸或多行側軸置中。 | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| `space-between` | 值 | `values-reference.md` | 查兩端貼齊、中間平均分配。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| `space-around` | 值 | `values-reference.md` | 查每個項目或每一行兩側分配空間。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| `space-evenly` | 值 | `values-reference.md` | 查所有間隔相等。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| `stretch` | 值 | `values-reference.md` | 查側軸拉伸效果。 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| `nowrap` | 值 | `values-reference.md` | 查 Flex 預設不換行。 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| `wrap` | 值 | `values-reference.md` | 查空間不足時換行。 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| `wrap-reverse` | 值 | `values-reference.md` | 查反向堆疊的換行。 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| `align-content` 沒效果 | 問題 | `common-mistakes.md`、`decision-table.md` | 查是否只有單行或沒有換行。 | [誤解三](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#誤解三單行時調整-align-content) |
| 父項屬性寫在子元素 | 問題 | `common-mistakes.md` | 查屬性作用對象錯誤。 | [誤解五](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#誤解五把父項屬性寫在子元素上) |
| `space-around` vs `space-evenly` | 問題 | `values-reference.md`、`common-mistakes.md` | 查兩端與中間間距差異。 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
