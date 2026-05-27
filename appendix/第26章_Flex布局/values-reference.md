# 屬性值對照表

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

用途：快速對照本章 CSS 屬性值的效果、條件與混淆點。

| 值 | 所屬屬性 | 畫面效果 | 適用條件 | 容易混淆 | 來源 |
|---|---|---|---|---|---|
| `flex` | `display` | 讓父元素成為 flex container，直接子元素進入 Flex 佈局 | 寫在父元素上 | 無 | [前置知識](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#前置知識) |
| `row` | `flex-direction` | 主軸為水平方向，通常由左往右 | 需要橫向排列時 | `column`：改為垂直主軸 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| `row-reverse` | `flex-direction` | 水平方向反向排列 | 需要橫向反序時 | `row`：同為水平主軸但方向不同 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| `column` | `flex-direction` | 主軸改為垂直方向，通常由上往下 | 需要直向排列時 | `row`：主軸方向不同 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| `column-reverse` | `flex-direction` | 垂直方向反向排列 | 需要直向反序時 | `column`：同為垂直主軸但方向不同 | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| `flex-start` | `justify-content` | 靠主軸起點排列 | 主軸上有項目排列需求 | `align-items: flex-start`：改看側軸 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `flex-end` | `justify-content` | 靠主軸終點排列 | 主軸上有項目排列需求 | `align-items: flex-end`：改看側軸 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `center` | `justify-content` | 整組項目在主軸置中 | 主軸上有剩餘空間時較明顯 | `align-items: center`：改看側軸 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `space-between` | `justify-content` | 第一個在起點，最後一個在終點，中間平均分配 | 主軸上有剩餘空間 | `space-around`：兩側也分配空間 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `space-around` | `justify-content` | 每個項目兩側分配空間，項目之間通常比兩端更寬 | 主軸上有剩餘空間 | `space-evenly`：所有間隔都相等 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `space-evenly` | `justify-content` | 兩端與項目之間的所有間隔都相等 | 主軸上有剩餘空間 | `space-around`：項目兩側分配空間 | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| `stretch` | `align-items` | 項目沒有固定側軸尺寸時拉伸填滿 | 單行側軸對齊 | `align-content: stretch`：控制多行 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `flex-start` | `align-items` | 單行項目靠側軸起點 | 單行側軸對齊 | `justify-content: flex-start`：控制主軸 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `flex-end` | `align-items` | 單行項目靠側軸終點 | 單行側軸對齊 | `justify-content: flex-end`：控制主軸 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `center` | `align-items` | 單行項目在側軸置中 | 單行側軸對齊 | `justify-content: center`：控制主軸 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `baseline` | `align-items` | 依第一行文字基線對齊 | 單行側軸對齊 | 無 | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| `nowrap` | `flex-wrap` | 不換行，項目留在同一條 flex line 上 | 預設單行情境 | `wrap`：允許換行 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| `wrap` | `flex-wrap` | 主軸空間不足時換到下一行 | 需要形成多行時 | `nowrap`：不換行 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| `wrap-reverse` | `flex-wrap` | 換行，但側軸堆疊方向反轉 | 需要反轉換行堆疊方向時 | `wrap`：換行但不反轉 | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| `stretch` | `align-content` | 多行拉伸佔滿側軸空間 | 已形成多條 flex lines | `align-items: stretch`：控制單行 item | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `flex-start` | `align-content` | 多行靠側軸起點 | 已形成多條 flex lines | `align-items: flex-start`：控制單行 item | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `flex-end` | `align-content` | 多行靠側軸終點 | 已形成多條 flex lines | `align-items: flex-end`：控制單行 item | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `center` | `align-content` | 多行整體在側軸置中 | 已形成多條 flex lines | `align-items: center`：控制單行 item | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `space-between` | `align-content` | 第一行與最後一行貼近兩端，中間平均分配 | 多行且側軸有剩餘空間 | `justify-content: space-between`：控制主軸 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `space-around` | `align-content` | 每一行兩側分配空間 | 多行且側軸有剩餘空間 | `space-evenly`：所有間距相等 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `space-evenly` | `align-content` | 所有行間距與兩端間距相等 | 多行且側軸有剩餘空間 | `space-around`：每一行兩側分配空間 | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| `row wrap` | `flex-flow` | 橫向排列，並允許換行 | 需要同時設定方向與換行 | 分開寫 `flex-direction` 與 `flex-wrap` | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| `column nowrap` | `flex-flow` | 直向排列，且不換行 | 需要同時設定方向與換行 | 分開寫 `flex-direction` 與 `flex-wrap` | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
