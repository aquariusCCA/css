# 筆記風格

產生 CSS 教學筆記時，使用這份寫作風格。

## 語言

- 使用繁體中文撰寫。
- 標準 CSS keywords、property names、values、selectors、pseudo-classes、pseudo-elements、at-rules 與 browser API names 保留英文。
- 重要英文術語第一次出現時，搭配簡短中文解釋，例如 cascade（層疊規則）或 specificity（選擇器權重）。
- 優先使用台灣讀者自然熟悉的用語與標點。

## 教學語氣

- 寫成耐心、清楚的 textbook author（教科書作者）語氣。
- 在展示密集 syntax（語法）前，先說明 learner's mental model（學習者應建立的心智模型）。
- 從具體 examples 推進到一般規則。
- 說明 CSS behavior（CSS 行為）為什麼會發生，特別是 cascade、inheritance、formatting contexts、layout、sizing 與 positioning。
- 對重要概念，依序說明「是什麼、為什麼、怎麼用、何時用、容易錯在哪、和誰有關」。
- 避免空泛稱讚、勵志填充語或 marketing-style wording（行銷式語氣）。

## 深度

- 詳細到讓學習者不打開原始資料也能理解主要概念。
- 不要在早期章節塞入所有 edge cases（邊界情況）。
- 先講清楚基本規則，再補充進階 caveats（注意事項）。
- 使用短 examples 讓每次只聚焦一個概念。

## 補充內容

- 可以補充 CSS 基礎定義、瀏覽器如何解讀樣式、實務開發情境、常見錯誤、相關概念比較，以及面試或工作中常見問法。
- 補充內容必須幫助理解目前章節，不要加入與主線無關的延伸知識或工具推薦。
- 避免過度深入而干擾初學者理解的細節；把冷門 caveats 留到適合的進階章節。
- 不要把沒有來源或不確定的結論寫成肯定句；需要時交給 `source-policy.md` 標示為補充、推論或待確認。

## 結構

- 使用穩定的 heading levels（標題層級）。
- 當 source-file order（來源檔案順序）不適合教學時，優先使用 ordered learning path（有順序的學習路徑）。
- 當某個概念依賴另一章時，加入相關 chapter links。
- 若某段解釋較長，在段落結尾加入簡短 takeaway（重點整理）。

## Code Examples（程式碼範例）

- 使用 fenced code blocks，並標註 language tags，例如 `html` 與 `css`。
- 範例應保持 minimal and runnable（最小且可執行）。
- 範例必須服務當前概念，不要展示過多無關技巧。
- 若展示錯誤用法，明確標示「錯誤範例」；若展示修正方式，明確標示「正確範例」。
- 用 prose（說明文字）解釋預期的視覺結果。
- 不要在 `notes/` 中建立完整 application demos；大型範例保留給未來的 `demos/` workflow。

## 品質檢查

- 不要只有列點；必要時用完整段落建立教學脈絡。
- 不要將不同層級的概念混在同一段。
- 不要產生表面完整但實際空泛的內容。
- 相似概念要比較，常見錯誤要給修正方式。
