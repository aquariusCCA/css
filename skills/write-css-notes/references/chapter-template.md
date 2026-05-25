# 章節範本

產生 `notes/README.md` 與 chapter files（章節檔）時，使用這份結構。

## `notes/README.md`

```md
# CSS 教學筆記

## 閱讀方式

說明建議閱讀順序、適合讀者，以及如何搭配原始資料。

## 章節目錄

1. [章節標題](01-topic.md)
2. [章節標題](02-topic.md)

## 來源總覽

- `origin/source-file.md`：簡述涵蓋內容。
- 未讀取或待補資源：列出原因。
```

## Chapter File Naming（章節檔命名）

- 使用 `NN-topic-name.md`。
- 使用兩位數 sequence numbers（序號），例如 `01`、`02`、`03`。
- 檔名使用 lowercase English slugs（小寫英文短名）。
- 除非使用者要求重組，否則 chapter file 發布後應維持穩定檔名。

## Chapter Structure（章節結構）

```md
# 章節標題

## 學習目標

- 完成本章後，讀者應能...

## 前置知識

- 需要先理解...
- 如果沒有前置知識，寫「無」。

## 核心概念

用循序漸進的方式解釋本章主題。

## 語法與心智模型

說明語法、規則、瀏覽器如何解讀，以及常用判斷方式。

## 範例

使用短 HTML/CSS 範例，並說明預期結果。

## 常見誤區

- 誤區：...
  說明：...

## 自我檢查

- 問題或小練習。

## 小結

濃縮本章重點。

## 來源與補充說明

- 來源：列出使用到的 `origin/*.md` 與已讀取引用資源。
- 補充：列出哪些內容是一般 CSS 教學補充。
- 推論：列出哪些章節安排或連結是根據多份來源推論而來。
- 待補來源：列出未能驗證但會影響完整性的材料。
```

## Ordering Guidance（章節順序建議）

當 sources（來源資料）沒有明確指定教學順序時，優先採用以下大方向：

1. CSS 的角色、syntax（語法），以及 style 如何套用到 HTML
2. Selectors、cascade（層疊規則）、specificity（選擇器權重）、inheritance（繼承）
3. Units、colors、values、custom properties（自訂屬性）
4. Box model、display、normal flow（一般文流）
5. Text、fonts、backgrounds、borders
6. Layout：Flexbox、Grid、positioning
7. Responsive design 與 media queries
8. Transitions、transforms、animations
9. Architecture（架構）、maintainability（可維護性）、debugging
