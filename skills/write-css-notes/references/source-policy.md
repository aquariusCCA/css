# 來源政策

將 `origin/` 轉成 `notes/` 時，使用這份 source policy（來源政策）。

## 將 `origin/` 視為 Index（索引）

- `origin/` 中直接放置的非隱藏 source files 必須是 `.md`；忽略 `.gitkeep`、`.DS_Store` 等 housekeeping dotfiles。
- Markdown files 可以引用 PDF、spreadsheet、images、code files、本機文件或 external URLs。
- 不要把被引用的 resources 移入 `origin/`；若非隱藏 files 直接放在 `origin/` 且不是 Markdown，將它們回報為 misplaced files。

## Reading Sources（讀取來源）

- 規劃 chapters 前，先讀取每個相關的 `origin/*.md` file。
- 解析 inline links、reference-style links、image links 與 code fences。
- 當 local references（本機引用資源）會影響 CSS 解釋時，追蹤並讀取它們。
- 如果 local reference 缺失，記錄為「待補來源」。
- 如果 external URL 無法開啟，將它記錄為 unread reference（未讀取參考資料），不要憑記憶摘要。
- 不要假裝已閱讀未提供或未成功讀取的資料。

## Cleaning Sources（清理來源）

- 保留原始資料的核心意思。
- 移除無助於學習的雜訊，例如廣告、重複標題、無意義導覽文字或頁面導覽殘留。
- 將口語、片段式、跳躍式內容改寫成正式筆記，但不要改變原始教學目的。
- 原始範例可以重寫得更短、更清楚；若修正明顯錯誤，需在來源說明或相關段落交代原因。
- 若內容過長，根據 CSS 主題拆分成多個 chapters，不要硬塞到同一份筆記。

## Accuracy Rules（準確性規則）

- 不得捏造原始資料中不存在的事實。
- 若補充原始資料以外的背景知識，必須在「來源與補充說明」標示為補充。
- 若資料不足以判斷完整結論，標示為「待確認」，不要寫成肯定句。
- 若原始資料與一般 CSS 實務或標準觀念可能衝突，保留原文意思，並補充「注意」或「可能原因」。
- 對版本、規格、瀏覽器支援、CSS standards 或 API 行為等容易變動的資訊，避免絕對化表述；需要當前資訊時查閱權威來源，否則標示為待確認。

## Source Labels（來源標籤）

在規劃與每章的「來源與補充說明」中使用以下 labels：

- `來源`：由 `origin/*.md` 或實際讀取過的 referenced resource 直接支持的內容。
- `補充`：為了讓說明完整而加入的一般 CSS teaching knowledge（教學知識）。
- `推論`：根據多份 sources 推出的結構或概念連結，但來源沒有直接明說。
- `待補來源`：缺失、無法讀取或目前不可用的 source material。
- `待確認`：來源不足、版本敏感或目前無法驗證，不能寫成確定結論的內容。

## Supplement Rules（補充規則）

- 為了讓 textbook chapter 連貫，可以補充常見 CSS fundamentals（基礎概念）。
- 必須清楚標示 supplements；不要把補充內容寫成好像來自使用者提供的 source。
- 優先使用保守、廣泛接受的 CSS behavior 說明，不要過度展開冷門 edge cases。
- 對於 time-sensitive browser support、current standards 或 compatibility tables，若可使用瀏覽器或網路工具，應查閱 authoritative sources（權威來源）；否則標示為待確認。

## Citation Style（引用樣式）

使用精簡的 source notes，不使用學術 citation 格式：

```md
## 來源與補充說明

- 來源：`origin/layout.md`、`examples/flex-card.css`
- 補充：Flexbox 主軸與交叉軸的基本教學說明。
- 推論：將 alignment 拆成獨立章節是根據多份來源重複出現的概念。
- 待補來源：`assets/layout-diagram.png` 無法讀取，需補圖像說明。
- 待確認：某段 browser support 說明需要查閱目前相容性資料。
```
