# 名詞表

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性.md`

用途：快速查找本章重要名詞與初學者應掌握的理解方式。

| 名詞 | 簡短定義 | 初學者理解方式 | 相關屬性或概念 | 來源 |
|---|---|---|---|---|
| Flex 佈局 | 讓父容器安排直接子元素的 CSS 排版方式 | 先讓父元素 `display: flex`，再用父項屬性控制子元素排列 | `display: flex`、flex container、flex item | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| flex container | 設定 `display: flex` 的父元素 | 控制子元素排列規則的容器 | `display`、父元素 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| flex item | flex container 的直接子元素 | 被父容器安排位置與對齊的項目 | 直接子元素、父子元素 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| 父元素 | 包住子元素的元素 | 本章多數屬性要寫在父元素上 | flex container | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| 直接子元素 | flex container 直接包住的下一層元素 | 只有直接子元素會成為本章範例中的 flex items | flex item | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
| 主軸 | flex items 主要排列的方向 | 先看 `flex-direction`，再判斷主軸是水平或垂直 | `flex-direction`、`justify-content` | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| 側軸 | 與主軸相對的另一個方向 | 主軸改變時，側軸也會跟著改變 | `align-items`、`align-content` | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第一課先決定主軸方向才知道什麼叫置中) |
| 單行 | flex items 只形成一條 flex line | 單行側軸對齊優先看 `align-items` | `align-items` | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| 多行 | flex items 換行後形成多條 flex lines | 多行整體在側軸上的分配優先看 `align-content` | `flex-wrap`、`align-content` | [對齊選擇](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#align-items-與-align-content-怎麼選) |
| flex line | flex items 排成的一條線 | `nowrap` 時通常只有一條；`wrap` 後可能有多條 | `flex-wrap`、`align-content` | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| 剩餘空間 | 父容器扣掉子元素後還能分配的空間 | 沒有剩餘空間時，對齊或分配效果可能不明顯 | `justify-content`、`align-content` | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第二課主軸上多出來的空間要放哪裡) |
| 換行 | flex items 空間不足時移到下一行或新欄 | 是否允許換行由 `flex-wrap` 控制 | `flex-wrap` | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第四課盒子太多時要擠在同一行還是換行) |
| 拉伸 | 項目或多行沿側軸填滿可用空間 | `stretch` 在項目沒有固定側軸尺寸時較明顯 | `align-items: stretch`、`align-content: stretch` | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| 基線對齊 | 依文字第一行基線對齊項目 | 用於單行 flex items 的文字對齊情境 | `align-items: baseline` | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第三課單行時側軸要怎麼對齊) |
| 複合屬性 | 一個屬性同時設定多個相關規則 | `flex-flow` 同時設定方向與換行 | `flex-flow`、`flex-direction`、`flex-wrap` | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
| normal flow | 元素沒有進入 Flex 前的原本排列方式 | 只設定 item 尺寸時，元素仍依原本排版流排列 | `display: flex` | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性.md#先看問題為什麼盒子沒有照你想的方向排列) |
