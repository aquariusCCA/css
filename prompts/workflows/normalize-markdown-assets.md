# Markdown 本地資產整理流程

## 使用情境

當需要將指定的一個或多個 `*.md` 中的本地資產路徑整理成專案統一格式時，套用這份可重複流程。

本流程負責「掃描 Markdown 引用 -> 尋找實體資產 -> 重新命名 -> 改寫 Markdown -> 輸出報告」的處理步驟。路徑、命名、語法與安全限制必須依照 `prompts/system/markdown-asset-path-rules.md`。

---

## 必要輸入

- Markdown 路徑：一個或多個要處理的 `*.md`。
- 章節目錄：Markdown 所在的章節根目錄。

## 建議輸入

- 任務指定的 `base-slug`。
- 是否保留圖片作為下載連結的特殊語意。
- 需要人工確認時偏好的回報方式。

---

## 輸入檢查

1. 檢查每個 Markdown 路徑是否存在且可讀。
2. 確認 Markdown 位於章節根目錄，不在章節底下的子目錄。
3. 檢查同章節是否有下列目錄：

   ```text
   assets/images/
   assets/pdfs/
   assets/files/
   ```

4. 若必要輸入不足、Markdown 無法讀取或章節資產目錄不符合規則，先列為「需要人工確認」，不要改寫 Markdown。
5. 若任務提供的章節目錄與 Markdown 實際位置不一致，先列為「需要人工確認」，不要猜測。

---

## 掃描流程

1. 逐一讀取指定 Markdown。
2. 掃描 Markdown 圖片語法與一般連結語法中的 URL。
3. 排除下列不處理內容：
   - 外部網址、郵件、電話、資料 URI。
   - 頁內錨點。
   - Markdown 文件互相連結。
   - code fence 與 inline code 內的 Markdown 範例文字。
4. 若發現 HTML 標籤中的 `src`、`href` 或其他本地資產屬性，列為「需要人工確認」，不要自行改寫。
5. 對每個可處理的本地資產引用保留原始語法、link text 或 alt text、原始路徑與出現順序。

---

## 尋找實體資產檔

處理每一個本地資產引用時，必須先找到對應的唯一實體檔案。

尋找順序：

1. 依 Markdown 原始路徑解析出檔名。
2. 根據副檔名判斷目標資產類型與目標資料夾。
3. 在同章節的對應資料夾中尋找檔案。
4. 依序比對下列 basename：
   - Markdown 路徑中的 raw basename。
   - URL-decoded basename。
   - 重複 URL decode 後的 basename，直到結果不再變化。
5. 若 Markdown 原路徑已包含 `assets/<type>/`，仍以同章節 `assets/<type>/` 為搜尋基準。

範例：

```md
![CSS語法規範.png](%E7%AC%AC01%E7%AB%A0_CSS%E7%B0%A1%E4%BB%8B/CSS%25E8%25AA%259E%25E6%25B3%2595%25E8%25A6%258F%25E7%25AF%2584.png)
```

可嘗試在同章節的 `assets/images/` 中尋找：

```text
CSS%25E8%25AA%259E%25E6%25B3%2595%25E8%25A6%258F%25E7%25AF%2584.png
CSS%E8%AA%9E%E6%B3%95%E8%A6%8F%E7%AF%84.png
CSS語法規範.png
```

若找不到任何實體檔案，或找到多個可能檔案，必須列為「需要人工確認」，不得猜測。

若引用副檔名與實體檔案所在資料夾類型不一致，例如圖片放在 `assets/files/`，列為「需要人工確認」，不得自動跨資料夾搬移。

---

## 重新命名與改寫流程

對每個可處理的本地資產引用，依序執行：

1. 判斷引用是否在處理範圍內。
2. 根據副檔名決定 `asset-type` 與 `asset-kind`。
3. 在同章節對應 `assets/<asset-type>/` 中找到唯一實體檔案。
4. 計算檔案內容 SHA-256 hash。
5. 產生 `base-slug`。
6. 依序號規則產生 normalized file name。
7. 若目標檔名尚未存在，將實體檔案重新命名。
8. 若目標檔名已存在，依衝突處理規則判斷是否共用、加長 hash 或列為人工確認。
9. 將 Markdown 引用改寫為：

   ```text
   ./assets/<asset-type>/<normalized-file-name>
   ```

10. 視需要修正 Markdown 語法，例如 PDF 從圖片語法改為一般連結語法。
11. 若 PDF 或附件 link text 為空或過於模糊，補上可讀文字，並在輸出報告中說明。

---

## 人工確認條件

遇到下列情況時，不要自行猜測或改寫該項目，必須列為「需要人工確認」：

- 找不到對應實體檔案。
- 找到多個可能的實體檔案。
- 實體檔案位於錯誤資產類型資料夾。
- 無法可靠產生英文語意 `base-slug`。
- 無法讀取檔案內容或無法計算 hash。
- 目標檔名衝突且無法安全判斷是否同內容。
- 本地資產引用出現在 HTML 標籤屬性中。
- Markdown 路徑或章節目錄前提不符合規則。

---

## 輸出前檢查

完成改寫前，確認：

- Markdown 最終路徑一律是 `./assets/<asset-type>/<normalized-file-name>`。
- 最終檔名只包含 `a-z`、`0-9`、`-`、`.`。
- 最終路徑沒有 URL encoded 字串、絕對路徑、上一層相對路徑或 `<hash>` 類佔位文字。
- 圖片使用圖片語法，PDF 與一般附件使用一般連結語法。
- code fence 與 inline code 內的示範文字沒有被改寫。
- 不同內容檔案沒有被覆蓋。

---

## 輸出報告

完成處理後，必須輸出簡短報告。若某一類沒有項目，可以省略該小節。

```md
## 已更新 Markdown

- `<markdown-path>`

## 已重新命名資產

- `<old-path>` -> `<new-path>`

## 已略過

- `<markdown-path>`：外部連結、頁內錨點、Markdown 文件連結或 code fence 內範例

## 需要人工確認

- `<markdown-path>`：找不到實體檔案
- `<markdown-path>`：找到多個可能檔案
- `<markdown-path>`：無法可靠產生英文 slug
- `<markdown-path>`：資產位於錯誤類型資料夾

## 文字調整

- `<markdown-path>`：將模糊 link text `下載` 改為 `下載 CSS 基礎講義`
```
