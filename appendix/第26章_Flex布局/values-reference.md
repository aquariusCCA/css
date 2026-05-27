# 屬性值對照表

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性.md`

用途：快速對照本章 Flex 屬性值的效果、條件與混淆點。

| 值 | 所屬屬性 | 畫面效果 | 適用條件 | 容易混淆 | 來源 |
|---|---|---|---|---|---|
| `flex` | `display` | 讓父元素成為 flex container，直接子元素成為 flex items | 寫在父元素上 | 無 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| `row` | `flex-direction` | 主軸為水平方向，子元素橫向排列 | flex container | `column`：改成直向排列 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| `row-reverse` | `flex-direction` | 主軸為水平方向反向，子元素橫向反序排列 | flex container | `row`：方向不反轉 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| `column` | `flex-direction` | 主軸改為垂直方向，子元素直向排列 | flex container | `row`：預設橫向排列 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| `column-reverse` | `flex-direction` | 主軸為垂直方向反向，子元素直向反序排列 | flex container | `column`：方向不反轉 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| `flex-start` | `justify-content`、`align-items`、`align-content` | 靠目前軸線起點排列 | 依所屬屬性判斷主軸或側軸 | `flex-end`：靠終點排列 | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| `flex-end` | `justify-content`、`align-items`、`align-content` | 靠目前軸線終點排列 | 依所屬屬性判斷主軸或側軸 | `flex-start`：靠起點排列 | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| `center` | `justify-content`、`align-items`、`align-content` | 在目前軸線上置中 | 依所屬屬性判斷主軸、單行側軸或多行側軸 | 無 | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| `space-between` | `justify-content`、`align-content` | 第一個與最後一個貼近兩端，中間平均分配 | 需要對應軸向有剩餘空間 | `space-around`、`space-evenly`：兩端間距分配不同 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| `space-around` | `justify-content`、`align-content` | 每個項目或每一行兩側分配空間，項目或行之間通常比兩端大 | 需要對應軸向有剩餘空間 | `space-evenly`：所有間隔相等 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| `space-evenly` | `justify-content`、`align-content` | 所有間隔相等，包含兩端與項目或行之間 | 需要對應軸向有剩餘空間 | `space-around`：兩端距離通常較小 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| `stretch` | `align-items`、`align-content` | 沿側軸拉伸填滿可用空間 | `align-items` 需項目沒有固定側軸尺寸時較明顯；`align-content` 用於多行 | `center`：不拉伸，只置中 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| `baseline` | `align-items` | 依第一行文字基線對齊 | 單行 flex items | 無 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| `nowrap` | `flex-wrap` | 所有 flex items 盡量排在同一條 flex line 上 | flex container | `wrap`：空間不足時換行 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| `wrap` | `flex-wrap` | 主軸空間不足時換到下一行或新欄 | flex container | `nowrap`：不換行 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| `wrap-reverse` | `flex-wrap` | 允許換行，但側軸堆疊方向反轉 | flex container | `wrap`：換行方向不反轉 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| `row wrap` | `flex-flow` | 主軸橫向，並允許換行 | flex container | 分開寫 `flex-direction: row; flex-wrap: wrap;` | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| `column nowrap` | `flex-flow` | 主軸直向，且不允許換行 | flex container | 分開寫 `flex-direction: column; flex-wrap: nowrap;` | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
