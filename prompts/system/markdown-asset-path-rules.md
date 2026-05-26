# Markdown 本地資產路徑規則

## 1. 路徑規則

Markdown 文件中的本地資產路徑，必須使用相對路徑：

```text
./assets/<asset-type>/<normalized-file-name>
```

本專案的 `*.md` 只會存放在 **章節根目錄** 中，不會放在章節底下的子目錄。因此，章節內的 Markdown 引用同章節本地資產時，路徑必須固定從 `./assets/` 開始。

章節結構如下：

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

例如：

```text
css/01-introduction/README.md
```

則資產引用方式固定為：

```md
![CSS box model](./assets/images/css-box-model-img-001-a82f91.png)

[下載範例 PDF](./assets/pdfs/css-box-model-pdf-001-c19d20.pdf)

[下載範例 Excel](./assets/files/layout-demo-file-001-f8e201.xlsx)
```

原則：

| Markdown 位置          | 資產位置                                                    | 正確路徑                                                      |
| -------------------- | ------------------------------------------------------- | --------------------------------------------------------- |
| `<章節>/README.md`    | `<章節>/assets/images/html-tag-structure-img-001-a82f91.png` | `./assets/images/html-tag-structure-img-001-a82f91.png` |
| `<章節>/01-basic.md`  | `<章節>/assets/pdfs/html-basic-pdf-001-c19d20.pdf`          | `./assets/pdfs/html-basic-pdf-001-c19d20.pdf`          |
| `<章節>/02-example.md` | `<章節>/assets/files/layout-demo-file-001-f8e201.xlsx`       | `./assets/files/layout-demo-file-001-f8e201.xlsx`       |

禁止使用下列路徑：

```md
![錯誤](assets/images/a.png)
![錯誤](../assets/images/a.png)
![錯誤](../../assets/images/a.png)
![錯誤](/assets/images/a.png)
![錯誤](C:\Users\xxx\a.png)
![錯誤](/Users/xxx/a.png)
```

---

## 2. Markdown 語法規則

本地資產必須使用合法 Markdown 語法引用。

### 圖片

圖片使用圖片語法：

```md
![alt 文字](./assets/images/css-box-model-img-001-a82f91.png)
```

適用副檔名：

```text
.png
.jpg
.jpeg
.webp
.gif
.svg
```

### PDF

PDF 使用一般連結語法：

```md
[下載 CSS Box Model 講義](./assets/pdfs/css-box-model-pdf-001-c19d20.pdf)
```

### Excel 與一般附件

Excel、Word、PowerPoint、壓縮檔、程式碼檔案、資料檔案，皆使用一般連結語法：

```md
[下載版面計算範例](./assets/files/layout-demo-file-001-f8e201.xlsx)

[查看 CSS 範例程式](./assets/files/flex-demo-file-001-d91f3a.zip)

[下載原始 JSON 資料](./assets/files/style-data-file-001-b74e20.json)
```

### 外部連結

外部網址不屬於本地資產，不應放入 `assets/` 規則管理範圍。

```md
[MDN CSS Reference](https://developer.mozilla.org/)
```

若需要離線保存，必須先下載檔案，再放入對應的 `assets/` 目錄。

---

## 3. Alt 文字與 Link Text 規則

檔名負責管理，alt 文字與 link text 負責語意。

- 圖片原本有 alt 文字時，原則上保留。
- 圖片原本沒有 alt 文字時，可以保持空 alt。
- PDF 與附件原本有 link text 時，原則上保留。
- 若 PDF 或附件的 link text 為空，必須補上可讀文字。
- 若 link text 過於模糊，例如 `下載`、`附件`、`點我`，可以依內容補成更具語意的文字，並在輸出中說明。

---

## 4. 檔名規則

所有本地資產檔名都必須轉成 normalized file name。原始檔名若有明確語意，可以將語意保留在 slug 中，但最終檔名不得保留空白、中文、URL encoded 字串或特殊符號。

```text
標籤的結構圖.png      -> html-tag-structure-img-001-a82f91.png
HTML 基礎講義.pdf     -> html-basic-pdf-001-c19d20.pdf
表單驗證範例.zip      -> form-validation-file-001-f8e201.zip
```

沒有明確語意的原始檔名也必須使用統一命名格式，不得沿用原名。這類檔名必須由 Markdown 主題、alt text、link text 或資產內容推導 slug；若無法判斷，必須標記為需要人工確認。

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

統一命名格式：

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

欄位定義：

| 欄位 | 說明 | 範例 |
|---|---|---|
| `md-slug` | Markdown 檔名或主題 slug | `html-tag-structure` |
| `asset-kind` | 資產類型代碼：`img`、`pdf`、`file` | `img` |
| `index` | 同類型資產在 Markdown 中出現的順序，固定三位數 | `001` |
| `hash6` | 檔案內容 hash 前 6 碼 | `a82f91` |
| `ext` | 小寫副檔名 | `png` |

`asset-type` 是資料夾名稱，`asset-kind` 是檔名中的類型代碼：

| `asset-type` | `asset-kind` |
|---|---|
| `images` | `img` |
| `pdfs` | `pdf` |
| `files` | `file` |

範例：

```text
html-tag-structure-img-001-a82f91.png
html-tag-structure-img-002-c19d20.png
html-basic-pdf-001-d91f3a.pdf
html-practice-file-001-f8e201.zip
```

副檔名必須統一小寫。

---

## 5. 序號規則

序號根據資產在 Markdown 中出現的順序決定，固定三位數，不足補零。

不同資產類型分開計算序號。

例如同一份 Markdown 中依序出現圖片、PDF、圖片、附件：

```text
html-basic-img-001-a82f91.png
html-basic-pdf-001-c19d20.pdf
html-basic-img-002-f8e201.png
html-basic-file-001-d91f3a.zip
```

---

## 6. Hash 規則

hash 用於避免不同資產檔名衝突，也能協助判斷兩個檔案是否可能為同一內容。

預設 hash 規則：

- 必須由資產檔案內容產生。
- 使用 SHA-256。
- 取前 6 碼小寫十六進位字元。
- 不得人工猜測或捏造。

正確：

```text
html-tag-structure-img-001-a82f91.png
```

禁止在最終檔名或 Markdown 引用路徑中保留下列佔位文字：

```text
<hash6>
hash6
<hash>
```

錯誤：

```text
html-tag-structure-img-001-<hash6>.png
```

若無法讀取實體檔案或尚未取得資產內容，不得產生含假 hash 的檔名；必須標記為需要人工確認。

---

## URL 編碼與安全字元規則

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

整理後檔名只能使用：

```text
a-z
0-9
-
_
.
```

不得使用空白、括號、`#`、`?`、`%`、反斜線與特殊符號。

---

## 衝突處理規則

不同內容的檔案不得因為同名而互相覆蓋。

若不同檔案產生相同目標檔名，應改用更長 hash，或將項目標記為需要人工確認。

相同內容的重複資產可以共用同一檔案，並讓多個 Markdown 連結指向同一個整理後路徑。

---

## 禁止事項

不得：

- 使用絕對路徑。
- 保留 URL encoded 路徑。
- 省略 `./` 直接使用 `assets/...` 引用資產。
- 使用上一層或多層相對路徑引用資產。
- 將所有資產混放在同一個資料夾。
- 將 PDF 或附件放到 `assets/images/`。
- 使用圖片語法引用 PDF 或一般附件。
- 只依賴圖片 alt 文字作為唯一命名依據。
- 因為圖片沒有 alt 文字就跳過處理。
- 因為附件沒有 link text 就跳過處理。
- 在不同內容檔案同名時直接覆蓋。
- 在最終結果中保留 `<hash6>`、`hash6`、`<hash>`。
