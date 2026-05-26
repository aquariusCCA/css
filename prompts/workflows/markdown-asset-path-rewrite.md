# Markdown 本地資產路徑改寫流程

## 目的

將章節根目錄中的 Markdown 文件內所有本地資產引用，統一改寫為符合 `system/markdown-asset-path-rules.md` 的標準路徑格式：

```text
./assets/<asset-type>/<normalized-file-name>
```

本 workflow 只負責 **Markdown 內的資產路徑改寫與檢查**。

資產檔案應已事先放置於章節內對應的 assets 目錄：

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

本 workflow 不負責：

* 建立 assets 目錄。
* 下載外部資產。
* 搬移資產檔案。
* 任意猜測不存在的資產路徑。
* 在無法讀取實體檔案時產生假 hash。
* 將不確定的資產強行改寫成看似正確的路徑。

若檔案不存在、檔名不符合規則、路徑無法唯一對應，必須標記為「需要人工確認」。

---

## 適用任務

適用於下列任務：

* 修正 Markdown 中錯誤的本地資產路徑。
* 將 `assets/...` 改為 `./assets/...`。
* 將 `../assets/...`、`../../assets/...` 等錯誤相對路徑改為 `./assets/...`。
* 將絕對路徑改寫為章節內 assets 相對路徑。
* 將 URL encoded 的本地資產路徑改寫為安全路徑。
* 根據資產副檔名，改寫到正確的 assets 子目錄。
* 檢查圖片、PDF、一般附件是否使用正確 Markdown 語法。
* 建立 Markdown 資產引用與實際資產檔案的對照表。
* 輸出改寫結果、未處理項目與人工確認清單。

不適用於下列任務：

* 外部網址整理。
* 遠端圖片下載。
* 跨章節共用資產整理。
* Markdown 內容重寫。
* 程式碼區塊內的路徑修正。
* 非章節根目錄 Markdown 的資產整理。

---

## 工作流程

### Step 1：確認輸入資料

確認本次處理的輸入範圍，並區分使用者必須提供的資料與 workflow 必須自行檢查的資料。

#### 使用者必須提供

1. 章節根目錄位置。

   ```text
   <章節>/
   ```

2. Markdown 檔名或檔案範圍。

   可指定單一檔案：

   ```text
   README.md
   ```

   也可指定多個檔案：

   ```text
   README.md
   01-basic.md
   02-example.md
   ```

   也可指定章節根目錄下的檔案模式：

   ```text
   *.md
   ```

   指定值只允許章節根目錄下的 Markdown 檔案名稱，或不含路徑分隔符的檔案模式。

   不得指定章節子目錄中的 Markdown，例如：

   ```text
   examples/demo.md
   notes/extra.md
   ```

   若未提供 Markdown 檔名或檔案範圍，必須要求補齊輸入，不得自行預設處理全部檔案。

#### workflow 必須檢查

1. Markdown 文件是否位於章節根目錄。

2. assets 目錄是否存在。

   ```text
   assets/images/
   assets/pdfs/
   assets/files/
   ```

3. 資產是否已放在對應目錄下。

   * 圖片應放在 `assets/images/`
   * PDF 應放在 `assets/pdfs/`
   * 一般附件應放在 `assets/files/`

4. 建立本次處理的 assets 檔案清單。

   掃描：

   ```text
   assets/images/*
   assets/pdfs/*
   assets/files/*
   ```

   並記錄：

   * 實體檔案路徑
   * 檔名
   * 副檔名
   * 所屬資料夾
   * 是否符合 normalized file name
   * 若可讀取檔案，計算 SHA-256 hash6

若 assets 目錄不存在、Markdown 檔案不存在、Markdown 不在章節根目錄，或資產檔案無法讀取，先記錄在整理報告中，不得產生猜測路徑。

---

### Step 2：掃描 Markdown 中的連結

逐一掃描 Markdown 文件中的資產引用。

需要掃描：

1. Markdown 圖片語法。

   ```md
   ![alt text](path)
   ```

2. Markdown 一般連結語法。

   ```md
   [link text](path)
   ```

3. Markdown reference-style link 定義。

   ```md
   [label]: path
   ```

4. Markdown reference-style image 或 link 使用處。

   ```md
   ![alt text][label]
   [link text][label]
   ```

掃描時必須排除：

* fenced code block 內的內容

  ````md
  ```text
  ![](assets/images/a.png)
  ````

  ```
  ```

* inline code 內的內容

  ```md
  `![demo](assets/images/a.png)`
  ```

* 外部網址

  ```md
  https://example.com/a.png
  http://example.com/a.png
  ```

* 非資產用途的連結

  ```md
  [回到首頁](../README.md)
  [章節標題](#section-title)
  [寄信](mailto:test@example.com)
  ```

每一筆掃描結果需要記錄：

```text
markdown_file
line_number
original_syntax
link_or_image
text_or_alt
original_path
is_external
is_local_asset_candidate
```

判斷為本地資產候選的條件：

* 不是外部網址。
* 不是 anchor。
* 不是 mailto、tel 等特殊協議。
* 路徑副檔名屬於圖片、PDF 或附件類型。
* 路徑看起來指向本地檔案或 assets 檔案。

---

### Step 3：判斷資產類型與目標資料夾

根據副檔名判斷資產類型、目標資料夾與 Markdown 語法。

圖片類型：

```text
.png
.jpg
.jpeg
.webp
.gif
.svg
```

對應：

```text
asset-type: images
asset-kind: img
target-folder: ./assets/images/
expected-markdown-syntax: image
```

PDF 類型：

```text
.pdf
```

對應：

```text
asset-type: pdfs
asset-kind: pdf
target-folder: ./assets/pdfs/
expected-markdown-syntax: link
```

一般附件類型：

```text
.xlsx
.xls
.docx
.doc
.pptx
.ppt
.zip
.7z
.rar
.json
.csv
.txt
.js
.ts
tsx
jsx
.java
.py
html
css
xml
yaml
yml
```

對應：

```text
asset-type: files
asset-kind: file
target-folder: ./assets/files/
expected-markdown-syntax: link
```

若副檔名無法判斷，標記為：

```text
需要人工確認：未知資產類型
```

語法檢查規則：

* 圖片副檔名應使用圖片語法：

  ```md
  ![alt text](./assets/images/example-img-001-a82f91.png)
  ```

* PDF 應使用一般連結語法：

  ```md
  [下載 PDF](./assets/pdfs/example-pdf-001-a82f91.pdf)
  ```

* 一般附件應使用一般連結語法：

  ```md
  [下載範例檔](./assets/files/example-file-001-a82f91.xlsx)
  ```

若發現：

```md
![PDF](./assets/pdfs/example.pdf)
```

或：

```md
![附件](./assets/files/example.zip)
```

必須改為一般連結語法。

---

### Step 4：判斷檔名策略

本 workflow 預設不主動搬移資產，也不任意猜測檔名。

檔名判斷優先順序如下：

#### 4.1 原始路徑已經符合規則

若原始路徑已符合：

```text
./assets/<asset-type>/<normalized-file-name>
```

且實體檔案存在，則保持路徑不變。

例如：

```md
![CSS box model](./assets/images/css-box-model-img-001-a82f91.png)
```

#### 4.2 原始路徑只是不符合 `./assets/` 前綴

若原始路徑是：

```text
assets/images/a.png
../assets/images/a.png
../../assets/images/a.png
/assets/images/a.png
```

且章節內存在對應資產：

```text
assets/images/a.png
```

則改寫為：

```text
./assets/images/a.png
```

但仍要檢查 `a.png` 是否符合 normalized file name。

若檔名不符合 normalized file name，需在報告中標記：

```text
檔名未 normalized，建議重新命名
```

#### 4.3 原始路徑是絕對路徑

若原始路徑是：

```text
/Users/user/project/css/01-basic/assets/images/demo.png
C:\Users\user\project\css\01-basic\assets\images\demo.png
```

需取出檔名 `demo.png`，並到對應的 assets 子目錄尋找實體檔案。

若唯一找到：

```text
assets/images/demo.png
```

則改寫為：

```text
./assets/images/demo.png
```

若找不到或找到多個候選，標記為：

```text
需要人工確認：絕對路徑無法唯一對應章節內資產
```

#### 4.4 原始路徑是 URL encoded path

若原始路徑包含 URL encoded 字串，例如：

```text
HTML%20Basic.pdf
%E6%A8%99%E7%B1%A4/image.png
```

需先 decode，再根據檔名與副檔名到對應 assets 子目錄尋找檔案。

若唯一找到 normalized 檔案，改寫成：

```text
./assets/<asset-type>/<normalized-file-name>
```

若只能找到未 normalized 的檔案，標記為：

```text
需要人工確認：資產檔名含 URL encoded 或不安全字元
```

#### 4.5 原始檔名與 assets 中檔名不同

若 Markdown 中引用：

```md
![](image.png)
```

但 `assets/images/` 中沒有 `image.png`，需嘗試用下列線索尋找唯一候選：

1. 同副檔名。
2. 同資產類型。
3. 同 Markdown 文件。
4. 同出現順序。
5. 檔名中的 asset-kind 與序號。
6. alt text 或 link text 語意。
7. hash6 是否可由檔案內容比對。

若可以唯一判斷，建立對照表並改寫。

若不能唯一判斷，不得猜測，標記為：

```text
需要人工確認：無法唯一對應資產檔案
```

#### 4.6 檔名未 normalized

標準檔名格式為：

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

例如：

```text
html-basic-img-001-a82f91.png
html-basic-pdf-001-c19d20.pdf
html-basic-file-001-f8e201.zip
```

若 assets 中的實體檔案未符合命名規則，例如：

```text
image.png
HTML 基礎講義.pdf
下載.pdf
未命名.docx
```

本 workflow 不直接假設可用。

處理方式：

* 若使用者允許重新命名資產，則可依規則產生建議檔名。
* 若使用者只要求改寫 Markdown 路徑，則不得改寫成不存在的 normalized 路徑。
* 若資產檔名不安全但檔案存在，應列入整理報告的「建議重新命名」區塊。
* 最終 Markdown 不應留下 URL encoded、空白、中文或特殊符號路徑。

---

### Step 5：建立序號與資產對照表

依每一份 Markdown 文件分別建立資產對照表。

序號規則：

* 依資產在該 Markdown 中出現的順序計算。
* 不同資產類型分開計算。
* 固定三位數，不足補零。

例如同一份 Markdown 依序出現：

```text
圖片
PDF
圖片
附件
```

則序號為：

```text
img-001
pdf-001
img-002
file-001
```

對照表欄位如下：

```text
markdown_file
line_number
original_syntax
original_path
asset_type
asset_kind
expected_folder
original_text_or_alt
resolved_asset_file
target_path
expected_syntax
status
note
```

範例：

| markdown_file   | line | original_path             | asset_type | asset_kind | resolved_asset_file                           | target_path                                     | status       |
| --------------- | ---: | ------------------------- | ---------- | ---------- | --------------------------------------------- | ----------------------------------------------- | ------------ |
| `README.md`     |   12 | `assets/images/a.png`     | images     | img        | `assets/images/html-basic-img-001-a82f91.png` | `./assets/images/html-basic-img-001-a82f91.png` | rewritten    |
| `01-basic.md`   |   28 | `../assets/pdfs/demo.pdf` | pdfs       | pdf        | `assets/pdfs/html-basic-pdf-001-c19d20.pdf`   | `./assets/pdfs/html-basic-pdf-001-c19d20.pdf`   | rewritten    |
| `02-example.md` |   45 | `file.zip`                | files      | file       | unresolved                                    | unresolved                                      | manual_check |

若同一個實體資產被多個 Markdown 引用：

* 若內容相同，可以共用同一路徑。
* 若檔名相同但內容不同，不得覆蓋。
* 若 hash 衝突或路徑衝突，標記為人工確認。

---

### Step 6：重寫 Markdown 連結

根據 Step 5 的對照表改寫 Markdown。

改寫規則：

#### 6.1 圖片

原本：

```md
![CSS box model](assets/images/a.png)
```

改為：

```md
![CSS box model](./assets/images/css-box-model-img-001-a82f91.png)
```

若 alt text 原本存在，原則上保留。

若 alt text 原本為空，可以保持空 alt：

```md
![](./assets/images/css-box-model-img-001-a82f91.png)
```

#### 6.2 PDF

原本：

```md
[講義](../assets/pdfs/demo.pdf)
```

改為：

```md
[講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

若 PDF 被錯誤寫成圖片語法：

```md
![講義](../assets/pdfs/demo.pdf)
```

改為：

```md
[講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

#### 6.3 一般附件

原本：

```md
[下載](file.zip)
```

改為：

```md
[下載](./assets/files/html-practice-file-001-f8e201.zip)
```

若 link text 過於模糊，例如：

```md
[下載](./assets/files/html-practice-file-001-f8e201.zip)
```

可以依內容補成更清楚的文字：

```md
[下載 HTML 練習檔](./assets/files/html-practice-file-001-f8e201.zip)
```

並在整理報告中說明：

```text
已將模糊 link text「下載」改為「下載 HTML 練習檔」
```

#### 6.4 reference-style link

原本：

```md
![CSS box model][box-model]

[box-model]: assets/images/a.png
```

改為：

```md
![CSS box model][box-model]

[box-model]: ./assets/images/css-box-model-img-001-a82f91.png
```

#### 6.5 不改寫的內容

不得改寫：

```md
[MDN](https://developer.mozilla.org/)
[回到首頁](../README.md)
[本章小結](#summary)
`![demo](assets/images/a.png)`
```

不得在最終結果中保留：

```text
<hash6>
hash6
<hash>
```

---

### Step 7：檢查

改寫完成後，逐一檢查 Markdown 與資產引用。

#### 7.1 路徑格式檢查

所有本地資產路徑必須符合：

```text
./assets/<asset-type>/<normalized-file-name>
```

不得出現：

```text
assets/
../assets/
../../assets/
/assets/
C:\
/Users/
%20
%E6
```

#### 7.2 目標資料夾檢查

確認資產類型與資料夾一致：

| 副檔名                                              | 應位於                |
| ------------------------------------------------ | ------------------ |
| `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.svg` | `./assets/images/` |
| `.pdf`                                           | `./assets/pdfs/`   |
| 其他附件                                             | `./assets/files/`  |

#### 7.3 Markdown 語法檢查

確認：

* 圖片使用 `![](...)`
* PDF 使用 `[](...)`
* 一般附件使用 `[](...)`
* PDF 與附件不得使用圖片語法

#### 7.4 檔案存在檢查

每一個改寫後的路徑，都必須能在章節目錄中找到實體檔案。

例如：

```text
./assets/images/a.png
```

必須對應到：

```text
<章節>/assets/images/a.png
```

若檔案不存在，標記為：

```text
需要人工確認：改寫後路徑找不到實體檔案
```

#### 7.5 檔名安全檢查

整理後的路徑不得包含：

* 空白
* 中文
* 括號
* `#`
* `?`
* `%`
* 反斜線
* URL encoded 字串
* 其他特殊符號

檔名只能包含：

```text
a-z
0-9
-
_
.
```

#### 7.6 normalized file name 檢查

檢查檔名是否符合：

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

若不符合，標記為：

```text
建議重新命名資產
```

若 workflow 只負責路徑改寫，不得擅自將 Markdown 改寫到尚未存在的 normalized 檔名。

#### 7.7 hash 檢查

若需要產生或驗證 hash：

* 必須讀取實體檔案內容。
* 使用 SHA-256。
* 取前 6 碼。
* 使用小寫十六進位。
* 不得猜測。
* 不得保留 placeholder。

若無法讀取檔案，標記為：

```text
需要人工確認：無法讀取檔案內容產生 hash
```

#### 7.8 衝突檢查

檢查是否有：

* 不同檔案被改寫到同一路徑。
* 同一路徑對應不同內容。
* 同名檔案位於錯誤資料夾。
* 多個候選資產無法唯一判斷。
* 同一資產被重複引用但路徑不一致。

若有衝突，不得覆蓋或強行選擇，必須標記為人工確認。

---

### Step 8：依格式輸出整理報告

完成後，依照 `prompts/formats/markdown-asset-path-report-format.md` 輸出整理報告。

報告必須根據 Step 1 到 Step 7 的實際結果填寫，至少包含：

* 處理範圍。
* 改寫摘要。
* 已改寫項目。
* 保持不變項目。
* 已略過項目。
* 需要人工確認。
* 建議重新命名資產。
* 最終檢查結果。

若某一類沒有項目，依格式檔規則填 `無` 或 `0`，不得刪除章節。

不得為了填滿報告而產生不存在的資產、hash 或路徑。

---

## 補充原則

執行此 workflow 時，應遵守以下優先順序：

```text
正確性 > 可追溯性 > 自動化程度
```

因此：

* 能唯一判斷時才自動改寫。
* 無法唯一判斷時，不猜測。
* 找不到實體檔案時，不產生假路徑。
* 無法讀取檔案時，不產生假 hash。
* 檔名不符合規則時，應報告問題，而不是靜默忽略。
* 外部連結不納入 assets 規則管理。

````

我建議這份 workflow 命名為：

```text
workflows/markdown-asset-path-rewrite.md
````

因為它的核心任務不是「資產整理」或「資產搬移」，而是更精準的：

> 根據既有 assets 目錄，將 Markdown 中的本地資產引用改寫為標準路徑。
