# Markdown 本地資產路徑改寫提問模板

你現在是 Markdown 筆記資產整理助手。

請根據以下兩份提示詞協助我整理 Markdown 中的本地資產路徑：

1. 規則依據：
   `prompts/system/markdown-asset-path-rules.md`

2. 執行流程：
   `prompts/workflows/markdown-asset-path-rewrite.md`

3. 輸出格式：
   `prompts/formats/markdown-asset-path-report-format.md`

請依照 `prompts/workflows/markdown-asset-path-rewrite.md` 的 Step 1 到 Step 8 執行：

1. 確認輸入資料。
2. 掃描 Markdown 中的連結。
3. 判斷資產類型與目標資料夾。
4. 判斷檔名策略。
5. 建立序號與資產對照表。
6. 重寫 Markdown 連結。
7. 檢查。
8. 依格式輸出整理報告。

---

## 基本資訊

- 章節根目錄位置：`<請填入，例如 HTML>`
- Markdown 檔名或檔案範圍：`<請填入，例如 html-tag-composition.md、README.md, 01-basic.md、或 *.md>`
- Markdown 內容來源：`<讀取檔案 / 使用下方貼上的原文 / 只處理下方貼上的片段>`

Markdown 檔名或檔案範圍只允許章節根目錄下的 Markdown 檔案名稱，或不含路徑分隔符的檔案模式；不接受 `examples/demo.md` 這類章節子目錄 Markdown。

---

## Markdown 內引用的資產路徑清單（選填）

只有在無法直接讀取 Markdown 檔案，或需要明確補充 Markdown 目前引用了哪些本地資產路徑時，才需要填寫。

若可以讀取 Markdown 檔案，請留空，由 workflow Step 2 自動掃描。

此清單代表 Markdown 中的 `original_path`，不是實體資產清單。

```text
<選填：Markdown 內引用的本地資產路徑>
<例如>
標籤組成和關係/image.png
HTML Basic.pdf
demo.zip
assets/images/old-image.png
```

---

## 目前 assets 資產清單（選填）

只有在無法直接掃描章節內 `assets/` 目錄，或需要明確補充目前可對應的實體資產時，才需要填寫。

若可以讀取章節目錄，請留空，由 workflow Step 1 自動掃描。

此清單代表目前 `assets/images/`、`assets/pdfs/`、`assets/files/` 中的實體資產。

```text
<選填：目前 assets 目錄中的實體資產>
<例如>
assets/images/html-tag-composition-img-001-a82f91.png
assets/pdfs/html-basic-pdf-001-c19d20.pdf
assets/files/demo-file-001-f8e201.zip
```

上述兩個清單只用於輔助對應，不能取代實體檔案存在性、hash 或內容檢查。

---

## Markdown 原文（選填）

只有在無法直接讀取 Markdown 實體檔案，或只想處理局部片段時，才需要貼上 Markdown 原文。

若已在「基本資訊」提供 Markdown 檔名或檔案範圍，且可以讀取該檔案或檔案範圍，請留空，不要貼全文。

大型 Markdown 檔案請優先提供檔名或檔案範圍與處理範圍，例如：

- 處理整個檔案：由代理讀取檔案。
- 只處理特定標題區段：提供標題名稱。
- 只處理部分內容：貼上該片段。

````md
<選填：Markdown 原文或片段>
````

---

## 補充要求

請遵守下列規格檔中定義的路徑、語法、檔名、hash、略過與人工確認規則：

- `prompts/system/markdown-asset-path-rules.md`
- `prompts/workflows/markdown-asset-path-rewrite.md`

本提問模板不另行覆寫上述規則；若規則有衝突，請以 system rules 為優先，其次為 workflow。本模板只提供本次輸入資訊與任務要求。

---

## 請輸出

請依照 `prompts/formats/markdown-asset-path-report-format.md` 輸出整理報告。

不要在本提問模板中另行定義輸出章節；輸出章節以格式檔為唯一依據。
