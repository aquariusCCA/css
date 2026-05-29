# 本章查表入口

來源筆記：`notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md`

用途：快速判斷本章 appendix 應該先查哪份資料。

## 先從這裡查

| 讀者想查 | 先看檔案 | 適合查什麼 |
|---|---|---|
| 不知道該用 `display`、`visibility` 還是 `overflow` | `decision-table.md` | 從畫面問題反查應優先使用或檢查的屬性 |
| 想比較元素是否可見、是否佔位 | `values-reference.md` | 查 `none`、`block`、`hidden`、`visible`、`auto` 等值的效果 |
| 想快速確認本章出現的 CSS 屬性 | `properties-reference.md` | 查 `display`、`visibility`、`overflow` 的用途與注意事項 |
| 想確認「佔位」、「溢出內容」等名詞 | `concept-glossary.md` | 查本章判斷模型與重要名詞 |
| 想排除常見誤解 | `common-mistakes.md` | 查把 `display: none`、`visibility: hidden`、`overflow: hidden` 混用的問題 |
| 想用關鍵字回找資料 | `keyword-index.md` | 從屬性、值、問題或同義詞定位查表檔 |

## 核心總覽

| 核心項目 | 角色或作用範圍 | 適合情境 | 注意或限制 | 來源 |
|---|---|---|---|---|
| `display: none` | 元素本身不顯示且不佔位 | 元素要退出版面，後方內容要補位 | 會改變後續元素位置 | [第一課](../../notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md#第一課想讓元素完全從版面中消失) |
| `display: block` | 讓元素以 block 盒子參與排版 | 從 `display: none` 還原成區塊顯示 | 不是所有元素都適合用 `block` 還原 | [第二課](../../notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md#第二課想把被隱藏的元素重新顯示) |
| `visibility: hidden` | 元素不可見但保留原本空間 | 需要保留位置、避免版面補位 | 不適合用來收合空間 | [第三課](../../notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md#第三課想讓元素看不見但保留原本位置) |
| `overflow` | 控制盒子內容溢出後的處理方式 | 固定尺寸容器內容過多 | 不是隱藏整個元素 | [第四課](../../notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md#第四課想處理超出盒子的內容) |
| 可見性與佔位判斷 | 分開判斷元素看不看得到、是否佔版面 | 比較 `display` 與 `visibility` | 不要只用「隱藏」一詞判斷 | [先看問題](../../notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md#先看問題元素不見時版面要不要留下空位) |
| 元素與內容分流判斷 | 分清楚隱藏元素本身或裁切溢出內容 | 判斷 `overflow` 是否適用 | `overflow: hidden` 只裁切超出部分 | [判斷流程](../../notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md#顯示與隱藏的判斷流程) |

## 本章檔案

| 檔案 | 產生狀態 | 用途 |
|---|---|---|
| `README.md` | 已產生 | 本章 appendix 入口與核心查表路徑 |
| `properties-reference.md` | 已產生 | 查 `display`、`visibility`、`overflow` 的作用對象、用途與注意事項 |
| `values-reference.md` | 已產生 | 對照本章出現的屬性值與畫面效果 |
| `concept-glossary.md` | 已產生 | 查可見性、佔位、溢出內容與正常排版流程等名詞 |
| `decision-table.md` | 已產生 | 從畫面問題反查應使用或檢查的屬性 |
| `common-mistakes.md` | 已產生 | 查本章常見誤解、錯誤原因與修正方向 |
| `keyword-index.md` | 已產生 | 從關鍵字、同義詞或問題詞回找資料 |

## 已省略的預設查表檔

本章未省略預設查表檔。`display`、`visibility`、`overflow` 及其值都直接支撐本章核心判斷，因此屬性表與屬性值表皆有查表價值。
