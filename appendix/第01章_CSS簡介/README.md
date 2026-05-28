# 本章查表入口

來源筆記：`notes/第01章_CSS簡介/CSS簡介.md`

用途：快速判斷本章 appendix 應該先查哪份資料。

## 先從這裡查

| 讀者想查 | 先看檔案 | 適合查什麼 |
|---|---|---|
| 不知道 HTML 與 CSS 如何分工 | `concept-glossary.md` | 查 CSS、HTML、語意與外觀的角色差異 |
| 看不懂一條 CSS 規則 | `concept-glossary.md` | 查 selector、declaration、property、value 與語法符號 |
| CSS 寫了但畫面沒有照預期改變 | `decision-table.md` | 從畫面問題反查 selector、語法與寫法檢查點 |
| 擔心把語意、外觀或寫法混在一起 | `common-mistakes.md` | 查本章常見誤解與修正方向 |
| 想用關鍵字快速回找資料 | `keyword-index.md` | 從中文說法、英文術語或問題詞定位查表檔 |

## 核心總覽

| 核心項目 | 角色或作用範圍 | 適合情境 | 注意或限制 | 來源 |
|---|---|---|---|---|
| HTML 與 CSS 分工 | HTML 描述內容語意；CSS 描述外觀與布局 | 判斷應修改 HTML 還是 CSS | CSS 不會改變 HTML 語意 | [第一課](../../notes/第01章_CSS簡介/CSS簡介.md#第一課如何讓-html-保持結構讓-css-負責外觀) |
| CSS 規則 | selector 選作用對象；declaration block 放樣式宣告 | 讀懂一條 CSS 如何套用到元素 | selector 未匹配時 declaration 不會影響畫面 | [第二課](../../notes/第01章_CSS簡介/CSS簡介.md#第二課一條-css-規則如何套用到畫面上) |
| 基本語法符號 | `:`、`;`、`{}` 組成 declaration 與區塊 | 檢查 CSS 語法是否完整 | 本章只處理基本規則，不展開完整 selector 或 cascade | [基本語法回查](../../notes/第01章_CSS簡介/CSS簡介.md#基本語法回查) |
| 展開風格 | selector 與每條 declaration 分行呈現 | 學習、開發與維護 CSS | 不改變畫面效果，改善的是可讀性 | [第三課](../../notes/第01章_CSS簡介/CSS簡介.md#第三課為什麼開發時常用展開風格) |
| 入門排查順序 | 先檢查是否選到元素、語法是否完整、寫法是否易維護 | 畫面沒有照預期改變時 | 不是完整除錯流程，後續章節會再展開 | [學習目標](../../notes/第01章_CSS簡介/CSS簡介.md#學習目標) |

## 本章檔案

| 檔案 | 產生狀態 | 用途 |
|---|---|---|
| `README.md` | 已產生 | 本章 appendix 入口與查找路徑 |
| `concept-glossary.md` | 已產生 | 查重要名詞、語法角色與初學判斷方式 |
| `decision-table.md` | 已產生 | 從畫面問題反查優先檢查項目 |
| `common-mistakes.md` | 已產生 | 查常見誤解、錯誤原因與修正方向 |
| `keyword-index.md` | 已產生 | 從關鍵字、同義詞或問題詞回找資料 |
| `properties-reference.md` | 未產生 | 本章的 `color`、`font-size` 只作為語法範例，沒有獨立屬性對照價值 |
| `values-reference.md` | 未產生 | 本章的 `red`、`40px` 只作為範例值，沒有獨立值對照價值 |
