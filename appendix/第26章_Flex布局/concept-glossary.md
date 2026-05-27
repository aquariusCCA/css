# 名詞表

來源筆記：`notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md`

用途：快速查找本章重要 Flex 名詞、版面模型詞彙與判斷概念。

| 名詞 | 簡短定義 | 初學者理解方式 | 相關屬性或概念 | 來源 |
|---|---|---|---|---|
| 父元素 | 包住其他元素的外層元素 | 例如 `.layout` 包住多個 `.item` | flex container、直接子元素 | [前置知識](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#前置知識) |
| 直接子元素 | 位在父元素第一層內的元素 | 本章父項屬性主要安排這些元素 | flex item、父項屬性 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#先看問題為什麼子元素沒有照你想的方式排列) |
| flex container | 設定 `display: flex` 的父容器 | 它負責安排直接子元素 | `display: flex`、父項屬性 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#先看問題為什麼子元素沒有照你想的方式排列) |
| flex item | flex container 的直接子元素 | 被父容器沿主軸與側軸安排的項目 | flex container、直接子元素 | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#先看問題為什麼子元素沒有照你想的方式排列) |
| 父項屬性 | 寫在 flex container 上的排版屬性 | 控制父容器如何安排直接子元素 | `flex-direction`、`justify-content`、`align-items` | [本章範圍](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#本章範圍) |
| normal flow | 未套用 Flex 排版前的原本排列方式 | 只設定 item 外觀時，元素仍先按原本流程排列 | `display: flex` | [先看問題](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#先看問題為什麼子元素沒有照你想的方式排列) |
| 主軸 | flex items 主要排列前進的方向 | 先看 `flex-direction`，再判斷主軸對齊 | `flex-direction`、`justify-content` | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| 側軸 | 與主軸垂直的方向 | 主軸改變後，側軸也會跟著改變 | `align-items`、`align-content` | [第一課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第一課先決定主軸方向才知道排列往哪裡走) |
| 剩餘空間 | 容器扣掉項目佔用後多出的可分配空間 | 沒有剩餘空間時，對齊或分配效果不明顯 | `justify-content`、`align-content` | [第二課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第二課主軸上多出來的空間要怎麼分配) |
| 單行 | flex items 只形成一條 flex line | 側軸上的 item 對齊優先看 `align-items` | `align-items` | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| 多行 | flex items 換行後形成多條 flex lines | 行與行整體分布優先看 `align-content` | `flex-wrap`、`align-content` | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| flex line | Flex 佈局中的一條排列線 | `nowrap` 時通常只有一條，`wrap` 後可能有多條 | `flex-wrap`、`align-content` | [第五課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第五課已經換成多行後行與行之間要怎麼排) |
| 換行 | flex items 空間不足時移到下一行或新欄 | 是否允許換行由 `flex-wrap` 決定 | `flex-wrap`、`wrap`、`nowrap` | [第四課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第四課盒子太多時要擠在同一行還是換行) |
| 拉伸 | 沿側軸填滿可用空間的對齊效果 | 項目有固定高度時，`align-items: stretch` 不明顯 | `align-items: stretch`、`align-content: stretch` | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| 基線對齊 | 依第一行文字基線對齊項目 | 屬於單行側軸對齊的一種值 | `align-items: baseline` | [第三課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第三課單行時側軸上的位置要怎麼控制) |
| 複合屬性 | 用一條宣告合併多個相關設定 | `flex-flow` 合併方向與換行設定 | `flex-flow`、`flex-direction`、`flex-wrap` | [第六課](../../notes/第26章_Flex布局/flex佈局常見父項屬性_測試.md#第六課同時設定方向與換行時用-flex-flow-簡化) |
