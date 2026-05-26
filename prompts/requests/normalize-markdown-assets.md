# 整理 Markdown 本地資產路徑

## Goal

根據指定 Markdown，將其中的本地資產引用整理成專案統一格式，並在同章節 `assets/` 目錄內完成可安全執行的資產重新命名與 Markdown 路徑改寫。

---

## Use When

當你已經將圖片、PDF 或附件放入章節根目錄底下的 `assets/images/`、`assets/pdfs/` 或 `assets/files/`，並希望整理指定 Markdown 中的本地資產路徑時，使用這份請求模板。

---

## Apply

請依序套用以下提示詞：

- `prompts/system/markdown-asset-path-rules.md`
- `prompts/workflows/normalize-markdown-assets.md`

---

## Inputs

必要輸入：

- Markdown 路徑：`{{markdown_paths}}`
- 章節目錄：`{{chapter_root}}`
- 任務指定的 base slug：`{{base_slug}}`

---

## Prompt Template

請根據以下設定整理 Markdown 本地資產路徑。

### 必要設定

- Markdown 路徑：`{{markdown_paths}}`
- 章節目錄：`{{chapter_root}}`
- 任務指定的 base slug：`{{base_slug}}`

### 任務要求

1. 請先套用 `prompts/system/markdown-asset-path-rules.md` 的路徑、命名、語法與安全限制。
2. 請依照 `prompts/workflows/normalize-markdown-assets.md` 的流程執行輸入檢查、掃描、尋找實體資產、重新命名、改寫與輸出報告。
3. 只處理指定的 Markdown 路徑，不要掃描或改寫未列入本次任務的 Markdown。
4. 實體資產只可在同章節的對應資料夾中尋找與重新命名：
   - 圖片：`assets/images/`
   - PDF：`assets/pdfs/`
   - 一般附件：`assets/files/`
5. 不要自動跨資料夾搬移資產檔案。
6. 整理後的 Markdown 資產路徑必須是 `./assets/<asset-type>/<normalized-file-name>`。
7. 檔名必須使用英文語意 kebab-case slug、asset kind、三位數序號與資產內容 SHA-256 hash。
8. 圖片使用 Markdown 圖片語法，PDF 與一般附件使用一般連結語法。
9. 不要改寫 code fence、inline code 或 HTML 標籤屬性中的資產引用。
10. 遇到找不到檔案、多個候選檔、資產位於錯誤類型資料夾、無法可靠產生英文 slug、無法計算 hash、HTML 屬性引用或其他不安全情況時，列入「需要人工確認」，不要猜測處理。
11. 完成後請輸出處理報告，包含已更新 Markdown、已重新命名資產、已略過、需要人工確認與文字調整；若某一類沒有項目，可以省略該小節。

---

## Notes

本模板只負責單次任務入口，不應重複定義完整路徑規則或完整工作流程。

若資產路徑、命名、安全限制或處理流程需要調整，應修改 `prompts/system/markdown-asset-path-rules.md` 或 `prompts/workflows/normalize-markdown-assets.md`，不要長期放在這份 requests 模板中。
