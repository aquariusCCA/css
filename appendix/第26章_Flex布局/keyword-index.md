# 關鍵字索引

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

用途：使用關鍵字快速定位本章相關屬性、名詞、問題與查表檔案。

| 關鍵字 | 類型 | 對應內容 | 用途說明 | 來源 |
|---|---|---|---|---|
| Flex 父項屬性 | 名詞 | `properties-reference.md` | 查本章寫在父元素上的 Flex 屬性 | [本章範圍](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#本章範圍) |
| `display: flex` | 屬性 | `display` | 查 Flex 父項屬性的生效前提 | [前置知識](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#前置知識) |
| flex container | 名詞 | flex container | 查誰負責安排直接子元素 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#先看問題為什麼子元素沒有照你想的方式排列) |
| flex item | 名詞 | flex item | 查被父容器安排的直接子元素 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#先看問題為什麼子元素沒有照你想的方式排列) |
| 父元素 | 名詞 | flex container | 查屬性應寫在哪個元素上 | [前置知識](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#前置知識) |
| 直接子元素 | 名詞 | flex item | 查 Flex 父容器安排的對象 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#先看問題為什麼子元素沒有照你想的方式排列) |
| 主軸 | 名詞 | `flex-direction`、`justify-content` | 查排列方向與主軸對齊 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| 側軸 | 名詞 | `align-items`、`align-content` | 查與主軸垂直的對齊方向 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| `flex-direction` | 屬性 | `flex-direction` | 查主軸方向與排列方向 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| `row` | 值 | `flex-direction: row` | 查橫向主軸 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| `column` | 值 | `flex-direction: column` | 查直向主軸 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| 水平置中 | 同義詞 | `justify-content` 或 `align-items` | 先確認主軸與側軸，不要直接背成固定方向 | [常見誤解](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#常見誤解與修正方式) |
| 垂直置中 | 同義詞 | `justify-content` 或 `align-items` | 先確認 `flex-direction`，再選主軸或側軸屬性 | [常見誤解](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#常見誤解與修正方式) |
| `justify-content` | 屬性 | `justify-content` | 查主軸對齊與剩餘空間分配 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| 剩餘空間 | 名詞 | `justify-content`、`align-content` | 查為什麼對齊或分配看不出效果 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `center`（主軸） | 值 | `justify-content: center` | 查整組項目在主軸置中 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `space-between`（主軸） | 值 | `justify-content: space-between` | 查主軸兩端貼齊、中間平均分配 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `space-around`（主軸） | 值 | `justify-content: space-around` | 查主軸項目兩側分配空間 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `space-evenly`（主軸） | 值 | `justify-content: space-evenly` | 查主軸所有間隔都相等 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `align-items` | 屬性 | `align-items` | 查單行 flex items 的側軸對齊 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `center`（單行側軸） | 值 | `align-items: center` | 查單行項目在側軸置中 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `stretch`（單行側軸） | 值 | `align-items: stretch` | 查單行項目沿側軸拉伸 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `baseline` | 值 | `align-items: baseline` | 查依第一行文字基線對齊 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `flex-wrap` | 屬性 | `flex-wrap` | 查子元素是否允許換行 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| `nowrap` | 值 | `flex-wrap: nowrap` | 查不換行的預設狀態 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| `wrap` | 值 | `flex-wrap: wrap` | 查主軸空間不足時換行 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| `wrap-reverse` | 值 | `flex-wrap: wrap-reverse` | 查換行但側軸堆疊方向反轉 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| 多行 | 名詞 | `align-content` | 查多條 flex lines 的側軸排列 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| 單行 | 名詞 | `align-items` | 查單行 item 的側軸對齊 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `align-content` | 屬性 | `align-content` | 查多行在側軸上的整體排列 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `center`（多行側軸） | 值 | `align-content: center` | 查多行整體在側軸置中 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `stretch`（多行側軸） | 值 | `align-content: stretch` | 查多行拉伸佔滿側軸空間 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `space-between`（多行側軸） | 值 | `align-content: space-between` | 查多行第一行與最後一行貼近兩端 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `space-around`（多行側軸） | 值 | `align-content: space-around` | 查每一行兩側分配空間 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `space-evenly`（多行側軸） | 值 | `align-content: space-evenly` | 查所有行間距與兩端間距相等 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `flex-flow` | 屬性 | `flex-flow` | 查方向與換行的複合寫法 | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| `row wrap` | 值 | `flex-flow: row wrap` | 查橫向排列並允許換行的簡寫 | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| `align-content` 沒效果 | 問題 | `align-content`、`flex-wrap` | 查是否只有單行、沒有換行或沒有側軸剩餘空間 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| 父項屬性寫在子元素 | 問題 | `common-mistakes.md` | 查屬性作用對象錯誤 | [誤解五](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#誤解五把父項屬性寫在子元素上) |
| 導覽列 | 問題 | `justify-content` | 查選單項目水平排列與靠左、靠右或分散 | [實務使用情境](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#實務使用情境) |
| 卡片列表 | 問題 | `flex-wrap`、`align-content` | 查卡片換行與多行靠上排列 | [實務使用情境](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#實務使用情境) |
| 工具列 | 問題 | `align-items` | 查按鈕、文字與圖示同列對齊 | [實務使用情境](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#實務使用情境) |
