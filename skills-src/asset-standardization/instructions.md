
# 本地資產標準化命名

## 定位與適用範圍

本 skill 對應 `meta/chapter-status.md` 章節狀態表中「資產命名」欄位，在「origin 整理」欄位完成後進行：

```text
origin/<章節>/*.md
origin/<章節>/assets/
  ↓
資產命名（本 skill）← 必須在 atomic 切分提案 之前完成
  ↓
alt 與連結文字（另一概念，不在本 skill 範圍）
  ↓
atomic 切分提案 → atomic 產生 → ...
```

專案規範中 `origin/` 是原始資料來源，原則上不直接改寫為正式筆記。本 skill 是該保護規則的**明確例外**，但範圍嚴格限定於：

* 重新命名 `origin/<章節>/assets/` 內可唯一對應的實體資產檔案。
* 同步更新 `origin/<章節>/*.md` 中對應的本地資產引用路徑。

除此之外，不得修改 `origin/` 下任何其他內容（教材文字、標題、結構、alt、連結文字等）。

本 skill 不是「alt 與連結文字整理」，也不是 atomic/notes 等下游生成流程；若使用者要求的是內容重寫、alt 優化或下游資產處理，應提示改用其他流程。

開始處理前，建議先查閱 `meta/chapter-status.md` 對應章節的「資產命名」欄位，確認狀態為「未開始」「進行中」或「待確認」才需要實際處理；若已是「已完成」，應先確認使用者是否要重新檢查，而非預設重跑。

---

## 角色定位

啟用本 skill 時，扮演「本地資產標準化命名助手」：保守、準確地檢查 Markdown 中的本地資產引用，將可確認的實體資產重新命名為標準檔名，並同步更新引用路徑。

必須優先避免：

1. 造成斷鏈
2. 誤改外部連結
3. 誤改教學範例路徑
4. 猜測不存在的檔案
5. 編造 `hash6`
6. 只改 Markdown 引用但沒有改實體檔案
7. 只改實體檔案但沒有同步更新引用

如果無法讀取檔案系統、無法取得實體檔案 bytes、無法確認目標路徑，不要模擬結果、不要猜測，改為回報「需要人工確認」。

---

## 輸入資訊

開始前確認以下資訊是否足夠：

```text
目標章節：origin/<三位數編號>-<章節標題>/
目標 Markdown 文件：全部 *.md，或指定檔案
執行模式：dry-run / apply
md-slug：每份中文 Markdown 檔名對應的英文 slug
跨文件共用資產的統一檔名（若偵測到才需要）
```

`md-slug` 規則：

1. 若使用者已指定，使用指定值。
2. 若 Markdown 檔名本身已是穩定英文 slug，可轉小寫並保留 kebab-case。
3. 章節內的中文 Markdown 檔名（例如 `01-background-image屬性.md`）需使用者指定英文 slug（例如 `background-image`），不要自行翻譯或依章節名稱、alt 文字、內容自行創造。
4. 若缺少 slug，列入「需要人工確認」並反問使用者。

若以上資訊不足，先提出問題，不要直接執行。

---

## 處理流程

### Step 1：前置檢查

確認：

1. 能讀取專案根目錄與目標章節目錄 `origin/<章節>/`。
2. 能讀取目標 Markdown 文件。
3. `origin/<章節>/assets/` 目錄存在。
4. 能讀取資產檔案 bytes。
5. 執行模式已指定：
   * `dry-run`：只輸出預計處理結果，不實際改名、不修改 Markdown。
   * `apply`：確認安全後，實際重新命名檔案並更新 Markdown。

任一項無法確認，停止處理並列入「需要人工確認」。

### Step 2：掃描引用

掃描 Markdown、HTML 與 CSS 本地資產引用，包含 fenced code block 內的 HTML 與 CSS：

```md
![圖片描述](./old/path/image.png)
[下載 PDF](./old/path/file.pdf)
```

```html
<img src="./old/path/image.png">
<a href="./old/path/file.pdf">下載</a>
<video src="./old/path/movie.mp4"></video>
<audio src="./old/path/music.mp3"></audio>
<source src="./old/path/movie.mp4" type="video/mp4">
<iframe src="./old/path/file.pdf"></iframe>
```

```css
background-image: url('./old/path/image.png');
@font-face { src: url('./old/path/font.woff2') format('woff2'); }
```

若 fenced code block 中的本地 `src`/`href`/`url(...)` 可唯一對應到目前章節 `assets/` 的實體檔案，視為可處理資產引用，不是排除的教學示例。

處理時保留原本的：Markdown 語法、HTML 標籤、屬性順序、引號風格、縮排、alt/title 文字、連結顯示文字。

### Step 3：排除不可處理項目

不要改寫：

```text
http://
https://
#anchor
mailto:
tel:
javascript:
line:
data:
blob:
空連結，例如 href=""
```

教學示例路徑判斷優先順序：

1. 若本地路徑可依匹配規則唯一對應到 `assets/` 內實體檔案 → 可處理。
2. 若無法唯一對應 → 視為不可處理的教學示例路徑。
3. 可處理時只更新路徑字串，不改寫程式碼範例其他內容。

### Step 4：匹配實體資產

1. 若原始引用路徑直接指向 `./assets/...` 且檔案存在 → 可處理。
2. 若不是 `./assets/...`，只能在以下情況處理：
   * 依原路徑正規化後，可在章節 `assets/` 找到唯一檔案。
   * 或依原始檔名，可在對應資產分類目錄中找到唯一檔案。
   * 即使該路徑位於 fenced code block 的 HTML 範例中，只要符合唯一匹配條件也可處理。
3. 找不到候選檔案 → 列入「無法匹配的資產」。
4. 多個候選檔案 → 列入「需要人工確認」。
5. 同一檔名在多個資產分類中都存在 → 列入「需要人工確認」。

不得自行猜測候選檔案。

### Step 5：判斷資產分類

| 類型 | 副檔名 | 目標目錄 | asset-kind |
| --- | --- | --- | --- |
| 圖片 | `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`, `.bmp`, `.ico` | `./assets/images/` | `img` |
| PDF | `.pdf` | `./assets/pdfs/` | `pdf` |
| Excel | `.xls`, `.xlsx`, `.csv` | `./assets/excels/` | `excel` |
| Word | `.doc`, `.docx`, `.odt`, `.rtf` | `./assets/word/` | `word` |
| 音訊 | `.mp3`, `.wav`, `.ogg`, `.m4a` | `./assets/files/` | `file` |
| 影片 | `.mp4`, `.webm`, `.mov`, `.avi` | `./assets/files/` | `file` |
| 字型 | `.woff`, `.woff2`, `.ttf`, `.otf`, `.eot` | `./assets/fonts/` | `font` |
| 壓縮檔 | `.zip`, `.rar`, `.7z`, `.tar`, `.gz` | `./assets/files/` | `file` |
| 其他本地檔案 | 其他可確認存在於 `assets/` 內的檔案 | `./assets/files/` | `file` |

若目標分類目錄不存在，回報缺少目錄，不要自行建立。

### Step 6：產生標準檔名

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

| 欄位 | 規則 |
| --- | --- |
| `md-slug` | 使用者指定，或檔名本身已是穩定英文 slug |
| `asset-kind` | `img`、`pdf`、`excel`、`word`、`font`、`file` |
| `index` | 同一份 Markdown、同一種 asset-kind，依第一次出現順序編號，固定三位數 |
| `hash6` | 讀取實體檔案 bytes 後，SHA-256 前 6 碼小寫十六進位 |
| `ext` | 小寫副檔名 |

`hash6` 規則：

1. 必須由實體資產檔案 bytes 計算。
2. 不得猜測、不得由檔名/路徑/alt/內容產生。
3. 無法讀取檔案 bytes → 列入「需要人工確認」。

### Step 7：處理多次引用與衝突

1. 同一實體資產被同一份 Markdown 多次引用 → 只產生一個新檔名，所有引用同步指向同一新路徑。
2. 同一實體資產被同一章節內多份 Markdown 引用，且依不同 Markdown 會產生不同標準檔名 → 不自動改名，列入「需要人工確認」。
3. 新檔名與既有檔案衝突 → 不改名，列入「需要人工確認」。
4. 既有檔名已符合標準格式，且 `hash6` 與目前檔案內容一致：
   * 引用路徑不正確 → 只更新引用路徑。
   * 引用路徑也正確 → 標示「已符合標準」。
5. 既有檔名格式正確但 `hash6` 不一致 → 不得標示已符合標準，列入「需要人工確認」。

### Step 8：實際更新

只有以下條件全部成立才能改名與更新引用：

1. 執行模式是 `apply`。
2. 實體檔案可唯一匹配。
3. `hash6` 可由實體檔案 bytes 計算。
4. 新檔名不衝突。
5. 實體資產可安全重新命名。
6. Markdown/HTML 引用可安全更新。

任一條件不成立 → 不修改檔案，列入「需要人工確認」或「無法匹配的資產」。

---

## 輸出格式

各表格欄位的可用值如下：

「預計處理清單」「已處理清單」表格的「狀態」欄位：

```text
已符合標準
多處引用
```

依模式區分的動作狀態（避免 dry-run 出現完成式用詞）：

```text
dry-run（預計處理清單）：預計改名、預計更新引用
apply（已處理清單）：已改名、已更新引用
```

「無法匹配的資產」表格的「原因」欄位：

```text
找不到檔案
```

「需要人工確認」表格的「問題」欄位（常見類型，可依實際情況描述其他問題）：

```text
多個候選檔案
跨文件共用資產
重名衝突
無法計算 hash
hash6 不一致
缺少目錄
```

### dry-run 模式

```md
## 預覽摘要

- 掃描章節：
- 掃描文件數：
- 預計重新命名資產數：
- 預計更新引用路徑數：
- 無法匹配資產數：
- 需要人工確認數：

## 預計處理清單

| Markdown 文件 | 原路徑 | 原檔案 | 預計新檔名 | 預計新引用路徑 | 狀態 |
| --- | --- | --- | --- | --- | --- |

## 無法匹配的資產

| Markdown 文件 | 原路徑 | 原因 |
| --- | --- | --- |

## 需要人工確認

| Markdown 文件 | 原路徑 | 問題 |
| --- | --- | --- |

## 檢查結果

- 是否實際修改檔案：否，dry-run 模式
- `hash6` 是否由實體檔案內容計算：
- 是否發現重名衝突：
- 是否發現跨文件共用資產：
- 是否發現缺少資產分類目錄：
- 是否發現不可安全處理項目：
```

### apply 模式

```md
## 處理摘要

- 掃描章節：
- 掃描文件數：
- 已重新命名資產數：
- 已更新引用路徑數：
- 未處理資產數：

## 已處理清單

| Markdown 文件 | 原路徑 | 原檔案 | 新檔名 | 新引用路徑 | 狀態 |
| --- | --- | --- | --- | --- | --- |

## 無法匹配的資產

| Markdown 文件 | 原路徑 | 原因 |
| --- | --- | --- |

## 需要人工確認

| Markdown 文件 | 原路徑 | 問題 |
| --- | --- | --- |

## 檢查結果

- `hash6` 是否由實體檔案內容計算：
- 實體資產檔名是否已同步處理：
- Markdown 圖片語法是否正常：
- Markdown 連結語法是否正常：
- HTML `src`/`href` 是否正常：
- 是否誤改外部連結：
- 是否保留原文內容：

## meta/chapter-status.md 建議

- 「資產命名」欄位建議標記：
```

「資產命名」欄位建議標記須為 `meta/chapter-status.md` 規定的六種狀態值之一（未開始 / 進行中 / 待確認 / 已完成 / 暫停 / 不適用），依以下規則對應：

* 全部資產已處理完成，且無「無法匹配的資產」「需要人工確認」項目 → 已完成
* 仍有「無法匹配的資產」或「需要人工確認」項目 → 待確認
* dry-run 模式（尚未實際修改檔案）→ 維持該欄位原狀態，不建議變更

---

## Few-Shot 範例

以下範例中的 `hash6` 只是格式示意，實際執行時必須讀取實體檔案 bytes 計算。

### 範例一：Markdown 圖片改名

改寫前（`origin/030-CSS顏色與背景/01-background-image屬性.md`）：

```md
![背景圖片效果示意.png](./images/背景圖片效果示意.png)
```

改寫後：

```md
![背景圖片效果示意.png](./assets/images/background-image-img-001-7e5dcd.png)
```

實體檔案同步改名：

```text
改名前：origin/030-CSS顏色與背景/assets/images/背景圖片效果示意.png
改名後：origin/030-CSS顏色與背景/assets/images/background-image-img-001-7e5dcd.png
```

### 範例二：同一資產多次引用

改寫前：

```md
![示意圖](./images/example.png)
[下載示意圖](./images/example.png)
```

改寫後：

```md
![示意圖](./assets/images/background-image-img-001-a82f91.png)
[下載示意圖](./assets/images/background-image-img-001-a82f91.png)
```

### 範例三：CSS url() 改名

改寫前（`origin/030-CSS顏色與背景/01-background-image.md`）：

````md
```css
.hero {
  background-image: url('./images/hero.jpg');
}
@font-face {
  font-family: 'MyFont';
  src: url('./fonts/myfont.woff2') format('woff2');
}
```
````

改寫後：

````md
```css
.hero {
  background-image: url('./assets/images/background-image-img-001-3a7f12.jpg');
}
@font-face {
  font-family: 'MyFont';
  src: url('./assets/fonts/background-image-font-001-c94e28.woff2') format('woff2');
}
```
````

實體檔案同步改名：

```text
改名前：origin/030-CSS顏色與背景/assets/images/hero.jpg
改名後：origin/030-CSS顏色與背景/assets/images/background-image-img-001-3a7f12.jpg

改名前：origin/030-CSS顏色與背景/assets/fonts/myfont.woff2
改名後：origin/030-CSS顏色與背景/assets/fonts/background-image-font-001-c94e28.woff2
```

### 範例四：不應處理的連結

```md
[外部網站](https://example.com)
[章節錨點](#section-1)
```

```html
<a href="mailto:test@example.com">寄信</a>
<a href="tel:10010">電話聯繫</a>
<a href="javascript:alert('Hello')">點擊</a>
<a href="">刷新本頁面</a>
```

---

## Reverse Prompting：資訊不足時請反問

缺少以下資訊時，先反問，不要開始處理：

1. 要處理哪一個章節（`origin/<三位數編號>-<標題>/`）？
2. 要處理全部 Markdown，還是指定 Markdown？
3. 執行模式是 `dry-run` 還是 `apply`？
4. 中文 Markdown 檔名是否已指定英文 `md-slug`？例如 `01-background-image屬性.md` 可由使用者指定為 `background-image`。
5. 若偵測到跨 Markdown 共用資產，是否要人工指定統一檔名？
6. `meta/chapter-status.md` 中該章節「資產命名」欄位目前狀態為何，使用者是否確認要（重新）處理？

---

## 最終品質標準

1. 所有可確認的本地資產檔名都符合 `<md-slug>-<asset-kind>-<index>-<hash6>.<ext>`。
2. 所有可確認的本地資產引用都改成 `./assets/<資產分類>/<標準檔名>`。
3. 改寫後的路徑必須能對應到目前章節的 `assets/` 目錄。
4. 實體資產改名與 Markdown/HTML 引用更新必須同步完成。
5. `hash6` 必須來自實體檔案 bytes 的 SHA-256 前 6 碼。
6. Markdown 圖片與連結語法不得被破壞。
7. HTML 標籤、屬性、引號與原本縮排不得被破壞。
8. 外部連結、錨點連結與特殊協議連結不得被誤改。
9. 教材文字內容不得被重寫、刪除或補充。
10. 找不到資產、無法計算 hash、分類目錄不存在或有多個候選檔案時，必須清楚回報，不能猜測。
11. 回報內容要能讓使用者快速知道哪些檔案被改、哪些問題需要人工處理。
12. 除 `origin/<章節>/assets/` 實體資產與 `origin/<章節>/*.md` 中的本地資產引用路徑外，不修改 `origin/` 下任何其他內容。
