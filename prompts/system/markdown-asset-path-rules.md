# Markdown 本地資產路徑規則

## 使用情境

當需要將 Markdown 中的本地資產路徑整理成專案統一格式時，套用本規則。

本檔案只定義長期有效的路徑、命名、語法與安全限制；不負責描述完整執行流程。若要實際整理資產，請搭配 `prompts/workflows/normalize-markdown-assets.md` 使用。

---

## 1. 規則範圍

### 應處理

只處理 Markdown 圖片語法與一般連結語法中的本地資產：

```md
![alt 文字](path/to/image.png)
[下載講義](path/to/file.pdf)
```

應處理的資產類型包含：

| 資產類型 | 副檔名 | 目標資料夾 | 檔名類型代碼 |
|---|---|---|---|
| 圖片 | `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.svg` | `assets/images/` | `img` |
| PDF | `.pdf` | `assets/pdfs/` | `pdf` |
| 一般附件 | 其他附件副檔名，例如 `.docx`, `.pptx`, `.xlsx`, `.zip`, `.json`, `.csv`, `.html`, `.css`, `.js` | `assets/files/` | `file` |

### 不應處理

下列內容不屬於本規則的改寫範圍：

- 外部網址：`http://`、`https://`
- 郵件、電話與資料 URI：`mailto:`、`tel:`、`data:`
- 頁內錨點：`#heading`
- Markdown 文件互相連結：例如 `[下一章](../02-basic/README.md)`
- code fence 與 inline code 內的 Markdown 範例文字
- HTML 標籤中的 `src`、`href` 或其他屬性

若 HTML 標籤內也有本地資產引用，應列入「需要人工確認」，不要自行改寫。

---

## 2. 章節結構與目標路徑

本專案的章節 Markdown 只放在章節根目錄，不放在章節底下的子目錄。

章節標準目標結構如下：

```text
<章節>/
    assets/
        images/
        pdfs/
        files/
    README.md
    01-basic.md
    02-example.md
```

整理資產時，只需要本次 Markdown 實際引用的資產類型目標資料夾存在。未被本次引用的資產類型資料夾缺失，不應阻止其他已可安全處理的資產重新命名與改寫。

整理後，Markdown 中的本地資產路徑必須固定為：

```text
./assets/<asset-type>/<normalized-file-name>
```

範例：

```md
![CSS box model](./assets/images/css-box-model-img-001-a82f91.png)

[下載範例 PDF](./assets/pdfs/css-box-model-pdf-001-c19d20.pdf)

[下載範例 Excel](./assets/files/layout-demo-file-001-f8e201.xlsx)
```

禁止使用下列路徑：

```md
![錯誤](assets/images/a.png)
![錯誤](../assets/images/a.png)
![錯誤](../../assets/images/a.png)
![錯誤](/assets/images/a.png)
![錯誤](C:\Users\xxx\a.png)
![錯誤](/Users/xxx/a.png)
![錯誤](%E6%A8%99%E7%B1%A4/image.png)
```

---

## 3. 資產檔案前提

使用者會先將資產檔案放入同章節的 `assets/` 目錄。

可以在正確的資產類型資料夾內重新命名檔案，但不要自動跨資料夾搬移檔案：

- 圖片只允許在 `assets/images/` 內重新命名。
- PDF 只允許在 `assets/pdfs/` 內重新命名。
- 一般附件只允許在 `assets/files/` 內重新命名。

若 Markdown 引用的是圖片，但實體檔案被放在 `assets/files/`，應列為「需要人工確認」，不要自行搬移。

---

## 4. Markdown 語法規則

### 圖片

圖片必須使用圖片語法：

```md
![alt 文字](./assets/images/css-box-model-img-001-a82f91.png)
```

圖片原本有 alt 文字時，原則上保留。圖片原本沒有 alt 文字時，可以保持空 alt。

### PDF 與附件

PDF 與一般附件必須使用一般連結語法：

```md
[下載 CSS Box Model 講義](./assets/pdfs/css-box-model-pdf-001-c19d20.pdf)

[下載版面計算範例](./assets/files/layout-demo-file-001-f8e201.xlsx)
```

PDF 與附件原本有 link text 時，原則上保留。

若 link text 為空，必須補上可讀文字。若 link text 過於模糊，例如 `下載`、`附件`、`點我`，可以依內容補成更具語意的文字，並記錄調整原因。

### 語法不符

若 PDF 或一般附件被圖片語法引用，例如：

```md
![講義](./assets/pdfs/css-basic-pdf-001-a82f91.pdf)
```

應改成一般連結語法：

```md
[講義](./assets/pdfs/css-basic-pdf-001-a82f91.pdf)
```

若圖片被一般連結語法引用，除非任務明確要求保留「下載圖片」語意，否則應改成圖片語法。

---

## 5. 檔名規則

所有本地資產檔名都必須轉成 normalized file name。

統一命名格式：

```text
<base-slug>-<asset-kind>-<index>-<hash>.<ext>
```

欄位定義：

| 欄位 | 說明 | 範例 |
|---|---|---|
| `base-slug` | 英文語意 kebab-case slug | `css-box-model` |
| `asset-kind` | `img`、`pdf`、`file` | `img` |
| `index` | 同一份 Markdown、同一 asset-kind 的出現順序，固定三位數 | `001` |
| `hash` | 資產內容 SHA-256 hash，預設取前 6 碼 | `a82f91` |
| `ext` | 小寫副檔名 | `png` |

範例：

```text
css-syntax-rule-img-001-a82f91.png
css-basic-pdf-001-c19d20.pdf
layout-demo-file-001-f8e201.xlsx
```

整理後檔名只能使用：

```text
a-z
0-9
-
.
```

不得使用空白、中文、URL encoded 字串、括號、`#`、`?`、`%`、反斜線、底線或其他特殊符號。

---

## 6. Base Slug 規則

`base-slug` 必須使用英文語意 kebab-case。不得直接保留中文、URL encoded 字串或無語意檔名。

若任務明確提供 `base-slug`，必須使用該值作為命名基礎，不得自行改寫、翻譯或用其他來源覆蓋。

未明確提供 `base-slug` 的例外情況，若流程允許自行推導，來源順位如下：

1. 圖片 alt text 或附件 link text。
2. URL decode 後的原檔名。
3. Markdown 第一個主標題或檔名。
4. 資產內容可辨識的主題。

在例外情況中，若多個來源可用，優先使用最能描述資產內容的語意。

沒有明確語意的原始檔名不得沿用，必須從 Markdown 主題、alt text、link text 或資產內容推導 slug。

沒有語意的檔名包含：

```text
image.png
image 1.png
img.png
picture.png
screenshot.png
untitled.png
file.pdf
document.pdf
attachment.zip
下載.pdf
未命名.docx
```

若無法可靠產生英文語意 slug，必須列為「需要人工確認」，不得自行產生空泛檔名。

---

## 7. 序號與 Hash 規則

序號根據資產在 Markdown 中出現的順序決定，固定三位數，不足補零。

不同 asset-kind 分開計算序號。

多個 Markdown 同時處理時，序號依每一份 Markdown、每一種 asset-kind 各自從 `001` 開始。

例如同一份 Markdown 中依序出現圖片、PDF、圖片、附件：

```text
css-basic-img-001-a82f91.png
css-basic-pdf-001-c19d20.pdf
css-basic-img-002-f8e201.png
css-basic-file-001-d91f3a.zip
```

若同一批處理中遇到已重新命名過的同內容資產，後續引用可以沿用第一次產生的 normalized filename，不另外產生新序號。

hash 用於避免不同資產檔名衝突，也能協助判斷兩個檔案是否為相同內容。

預設 hash 規則：

- 必須由資產檔案內容產生。
- 使用 SHA-256。
- 預設取前 6 碼小寫十六進位字元。
- 不得人工猜測或捏造。

正確：

```text
css-syntax-rule-img-001-a82f91.png
```

禁止在最終檔名或 Markdown 引用路徑中保留下列佔位文字：

```text
<hash6>
hash6
<hash>
```

錯誤：

```text
css-syntax-rule-img-001-<hash6>.png
```

若無法讀取實體檔案或尚未取得資產內容，不得產生含假 hash 的檔名，必須列為「需要人工確認」。

---

## 8. 衝突處理規則

不同內容的檔案不得因為同名而互相覆蓋。

若目標檔名已存在：

1. 若既有檔案與目前檔案內容 hash 完全相同，視為同內容資產，可以共用同一檔案，並讓多個 Markdown 連結指向同一路徑。
2. 若內容不同，先將 hash 從 6 碼加長到 12 碼重新產生檔名。
3. 若 12 碼仍衝突，使用完整 SHA-256 hash。
4. 若仍無法安全判斷，列為「需要人工確認」。

不得直接覆蓋既有檔案。

---

## 9. URL 編碼與安全字元規則

整理後的 Markdown 路徑不得保留 URL encoded path。

錯誤：

```md
![](%E6%A8%99%E7%B1%A4/image.png)
[講義](HTML%20Basic.pdf)
```

正確：

```md
![](./assets/images/html-tag-structure-img-001-a82f91.png)
[HTML 基礎講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

處理 URL encoded 路徑時，可以為了尋找實體檔案而 decode；但整理後的檔名與 Markdown 路徑不得保留 `%xx` 編碼。

---

## 10. 禁止事項

不得：

- 使用絕對路徑。
- 保留 URL encoded 路徑。
- 省略 `./` 直接使用 `assets/...` 引用資產。
- 使用上一層或多層相對路徑引用資產。
- 將所有資產混放在同一個資料夾。
- 自動跨資料夾搬移資產檔案。
- 將 PDF 或附件放到 `assets/images/`。
- 使用圖片語法引用 PDF 或一般附件。
- 只依賴圖片 alt 文字作為唯一命名依據。
- 因為圖片沒有 alt 文字就跳過處理。
- 因為附件沒有 link text 就跳過處理。
- 在不同內容檔案同名時直接覆蓋。
- 在最終結果中保留 `<hash6>`、`hash6`、`<hash>`。
- 在 code fence 或 inline code 內改寫示範用 Markdown。
