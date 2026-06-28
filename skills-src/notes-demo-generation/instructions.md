
# Notes 轉 HTML 教學 Demo

## 定位與適用範圍

本 skill 對應 `meta/chapter-status.md` 章節狀態表中「demos 生成」欄位，是 notes 完成檢查後的下游教材生成階段。demos 與 practice、review、appendix 都各自平行延伸 notes，彼此沒有先後依賴；本 skill 只負責 demos：

```text
notes 生成 → notes 完成檢查（須先完成）
  ↓
（皆平行延伸 notes，彼此無先後）
demos 生成（本 skill）
practice 生成
review 生成
appendix 索引
```

開始處理前，應先查閱 `meta/chapter-status.md` 對應章節的「notes 完成檢查」與「notes 索引元資料」欄位，確認兩者皆為「已完成」才適合開始本 skill；若尚未完成，應提示使用者先完成 `notes-content-review` 或 `notes-index-metadata`，不要預設繼續生成 demo。

本 skill 主要讀取：

```text
notes/<章節>/*.md
meta/chapter-status.md
```

必要時唯讀讀取（可複製資產進 demo，不修改原檔）：

```text
origin/<章節>/assets/...
```

只輸出或更新：

```text
demos/<章節>/<筆記名>/
```

每組 demo 至少包含：

```text
demos/<章節>/<筆記名>/index.html
```

可依需要加入：

```text
demos/<章節>/<筆記名>/style.css
demos/<章節>/<筆記名>/script.js
demos/<章節>/<筆記名>/assets/...
```

本 skill 不修改：

```text
origin/
atomic/
notes/
practice/
review/
appendix/
任何原始資產實體檔案
```

本 skill 不修改 `meta/chapter-status.md`，僅在輸出中提出「demos 生成」欄位的建議標記，由使用者自行決定是否更新狀態表。

---

## 角色定位

啟用本 skill 時，扮演「HTML 教學 demo 設計師」與「HTML 範例實作審查員」，目標是把正式 notes 中適合觀察、操作、比較或實作的 HTML 內容，轉成可直接打開的教學範例。

CSS / JavaScript 只作為展示輔助：CSS 用於讓 HTML 結構、語意、狀態或差異更容易觀察；JavaScript 用於必要的切換、模擬或狀態顯示。除非 notes 已明確支撐，否則不得把 CSS / JavaScript 變成 demo 的主要教學內容。

合格的 demo 不是把 notes 內容搬進 HTML 頁面，也不是做一個漂亮但無教學焦點的展示頁，而是要讓讀者：

```text
打開 index.html 就能看到本主題的核心效果
能透過對照、互動或可觀察結果理解概念
知道 demo 對應哪一篇 notes
能從畫面回推 HTML 結構、屬性或行為差異
能看出錯誤寫法與正確寫法的差別（若適用）
```

每組 demo 對應單一 notes。若需要把多篇 notes 或多個章節組成一個完整頁面或流程，請改用 `notes-project-generation`。

必須優先避免：

1. 每篇 notes 都機械式生成一組 demo，導致大量沒有展示價值的靜態摘要頁。
2. 把整篇 notes 轉成長篇 HTML 文章，卻沒有可觀察範例、對照或互動。
3. 生成只靠視覺裝飾、與教學目標無關的頁面。
4. 為純概念內容硬做不可靠的互動，反而誤導初學者。
5. 在 demo 中加入 notes 沒有支撐、會擴大教學範圍的 CSS/JS 技術，或讓 CSS/JS 取代 HTML 成為主要教學內容。
6. 修改 `notes/`、`origin/`、`atomic/` 或原始資產檔案。
7. 未驗證就宣稱 demo 可用。

---

## 輸入資訊

開始前確認以下資訊是否足夠：

```text
章節名稱：<章節>
專案根目錄：預設為目前工作目錄
執行階段：預設為階段一「Demo 生成規劃」
是否允許寫入檔案：預設不允許；階段二確認語句可視為允許寫入 demos/<章節>/
```

如果使用者沒有提供章節名稱，請先反問：

```text
請提供要處理的章節名稱，例如：040-HTML基本結構標籤、210-超鏈接標籤。
```

如果無法讀取 `notes/<章節>/` 或該資料夾沒有 `.md` 檔案，請不要猜測章節名稱或內容，請反問使用者確認章節資料夾名稱是否正確，或請使用者先完成 `notes-generation` 與 `notes-content-review`。

在資訊不足時，只能提出需要補充的問題，不得直接產生 demo。

---

## Demo 粒度判斷

本 skill 採固定的一篇 notes 對一組 demo。請依教學價值選擇以下方式：

| 生成方式 | 適用情況 | 輸出 |
| --- | --- | --- |
| 一對一 | 單篇 notes 有明確、完整、可展示的主題 | 一篇 notes 產生一組 demo |
| 不生成 | 純概念、歷史、查閱型內容，或用 demo 會失真 | 列入「不生成 Demo 的 Notes」 |

判斷標準：

1. 若 demo 只能重述文字而無法展示效果，通常不生成。
2. 若一篇 notes 內有多個可展示段落，仍放在同一組 demo 內用分區、頁籤或互動切換呈現；不要拆成多個獨立 demo 目錄。
3. 若多篇 notes 的學習價值在於同一個完整頁面或表單流程，應改用 `notes-project-generation`，不要在 demos 內做多對一整合。
4. 若某篇 notes 不適合獨立展示，列入「不生成 Demo 的 Notes」並說明原因，不要把它併入其他 notes 的 demo。
5. 每組 demo 必須有一個清楚教學目標，不要把整章內容塞進單一頁面。

---

## Demo 類型

請依 notes 主題選擇合適 demo 類型。類型可混合，但每組 demo 的主類型要明確。

### 概念視覺化 Demo

適合：網站與網頁、HTML 是標記語言、瀏覽器解析與渲染、語意化概念等。

要求：

1. 用可觀察流程、圖解區塊或狀態切換呈現概念。
2. 不把抽象概念假裝成真實瀏覽器內部機制；若是簡化模型，畫面文字需明確標示為「簡化示意」。
3. 避免大量技術細節，重點是讓初學者建立心智模型。

### 標籤展示 Demo

適合：`img`、`a`、`table`、`form`、`input`、`video`、`audio` 等標籤。

要求：

1. 展示標籤的基本語法與實際呈現。
2. 對重要屬性提供可觀察差異。
3. 若有錯誤寫法，展示錯誤原因與修正結果。
4. 不把標籤 demo 做成只列屬性清單。

### 對照比較 Demo

適合：`div` 與語意化標籤、`a` 與 `button`、不同 input type、正確與錯誤巢狀結構等。

要求：

1. 左右或上下對照要清楚標示。
2. 對照項目不宜過多，避免讀者無法聚焦。
3. 對照結論需能從畫面或互動中觀察，不只靠文字說明。

### 互動觀察 Demo

適合：表單控制項、`details` 展開收合、`datalist` 建議選項、連結目標、media controls 等。

要求：

1. 至少有一個讀者可操作的控制項。
2. 操作後要有可觀察變化或狀態回饋。
3. JavaScript 只用於輔助觀察，不要讓 JS 行為取代 HTML 本身應展示的語意或功能。

### 錯誤修正 Demo

適合：常見錯誤、易混淆屬性、錯誤語意、錯誤連結路徑、缺少 `alt` 等。

要求：

1. 同時展示錯誤寫法與修正寫法。
2. 說明錯在哪、為什麼會造成問題、如何避免。
3. 不展示會導致安全風險或破壞本機環境的程式碼。

---

## 檔案與路徑規則

### 輸出目錄

每組 demo 輸出到：

```text
demos/<章節>/<筆記名>/
```

`<筆記名>` 規則：

1. 以對應 notes 檔名（移除 `.md`）為 demo 目錄名，沿用既有中文命名，例如 `01-img標籤與圖片替代文字`。
2. 同一章節內不得產生重複 demo 目錄名。
3. 不使用空白、路徑分隔符、冒號、問號等不適合檔名的字元。
4. slug 僅沿用 notes 既有檔名用字，或標籤／屬性等技術關鍵字（如 `img`、`alt`），不要為命名額外自創描述語。

### Demo 檔案

每組 demo 至少建立：

```text
index.html
```

依需要建立：

```text
style.css
script.js
assets/
```

選擇規則：

1. 小型 demo 可以把 CSS/JS 內嵌在 `index.html`，但若樣式或互動超過短小片段，應拆成 `style.css` 或 `script.js`。
2. demo 需要本地資產時，預設將所需資產「複製」到 demo 內的 `assets/`，讓每組 demo 自包含、可單獨打包搬移。複製不違反「不搬動或改名 `origin/` 原始資產」。
3. 僅在資產過大或不宜複製時，才相對引用 `origin/<章節>/assets/...`，且必須使用從 demo 目錄出發可解析的相對路徑，並在來源標示中註明「本 demo 依賴 origin 資產，非自包含」。
4. 外部 CDN、遠端圖片、第三方框架預設不使用；除非 notes 主題本身需要，且使用者已同意。

### 來源標示

每個 `index.html` 必須以 HTML 註解標示單一來源 notes；此註解是 demos 層等價於 `source_notes` 的追溯欄位。固定格式：

```html
<!-- Source notes: notes/180-圖片標籤/01-img標籤與圖片替代文字.md -->
```

每組 demo 只允許一筆來源 notes，路徑必須指向實體存在的 `notes/<章節>/*.md`。若頁面中另以可見文字標示來源，也不能取代 HTML 註解。來源標示只做追溯，不把整篇 notes 搬進頁面。

---

## 處理流程

### Step 1：前置檢查

1. 是否已取得 `<章節>`。
2. 是否能讀取 `notes/<章節>/*.md`。
3. `meta/chapter-status.md` 中該章節「notes 完成檢查」是否為「已完成」；若不是，提示先完成 `notes-content-review`。
4. `meta/chapter-status.md` 中該章節「notes 索引元資料」是否為「已完成」；若不是，提示先完成 `notes-index-metadata`。
5. `meta/chapter-status.md` 中該章節「demos 生成」目前狀態為何；若已是「已完成」，確認使用者是否要重新處理。
6. 目前是否處於階段一；若沒有明確確認語句，不得進入階段二。

如果任一項不符合，請先回報問題並要求使用者補充，不要猜測。

### Step 2：讀取與理解

1. 讀取 `notes/<章節>/*.md`，依檔名前綴與學習順序理解內容。
2. 建立 Notes Inventory，記錄每篇 notes 的標題、topics/summary、核心教學目標、可展示內容、資產/連結概況。
3. 找出每篇 notes 中的範例程式碼、對照表、常見錯誤、自我檢查、圖片/音訊/影片引用。
4. 判斷哪些內容適合 demo、哪些只適合 practice/review 或不適合轉成 demo。

### Step 3：Demo 規劃

對每個候選 demo 規劃：

1. Demo 目錄與主要檔案。
2. 對應單一 notes。
3. 生成方式：一對一或不生成。
4. Demo 類型。
5. 具體教學目標。
6. 互動或展示設計。
7. 需要的 HTML、展示輔助 CSS/JS 與資產。
8. 驗證方式。
9. 需要人工確認的風險或取捨。

「互動或展示設計」必須具體到看得出畫面要展示什麼、使用者能操作什麼、操作後觀察什麼；不能只寫「建立互動 demo」或「展示標籤用法」。

### Step 4：兩階段執行

#### 階段一：Demo 生成規劃（預設）

階段一即為前述 Step 1～Step 3 的執行：依序完成前置檢查、讀取與理解、Demo 規劃。階段一只輸出規劃結果，不建立、修改或刪除任何檔案，最後依「輸出格式」的階段一範本輸出規劃，等待使用者確認。

#### 階段二：產生 demos

只有在使用者明確回覆：

```text
確認，請產生 demos
```

才可以進入階段二。這句確認同時代表使用者已確認 demo 規劃，並允許寫入 `demos/<章節>/`。

階段二流程：

1. 依確認後的規劃建立或更新 demo 目錄。
2. 如果目標 demo 目錄或檔案已存在，不得直接覆蓋；先列出既有項目並要求使用者確認覆蓋、更新或保留。
3. 產生 `index.html` 與必要的 `style.css`、`script.js`、`assets/`。
4. 每組 demo 完成後執行靜態檢查。
5. 若環境可行，使用瀏覽器打開 `index.html` 做畫面與互動驗證。
6. 驗證失敗時先修正 demo，再輸出完成回報。
7. 若環境無法瀏覽器驗證，明確回報只完成靜態驗證與原因。

---

## 驗證規則

生成後必須驗證，不得省略。

### 靜態檢查（必須）

每組 demo 至少確認：

1. `demos/<章節>/<筆記名>/index.html` 存在。
2. `index.html` 不是空檔。
3. `index.html` 具備最小骨架：`<!doctype html>`、`<html lang="...">`、`<meta charset="utf-8">`、`<meta name="viewport" content="width=device-width, initial-scale=1">`、非空 `<title>`。
4. 包含固定格式的 `Source notes` HTML 註解，且只列一筆可解析 notes 路徑。
5. 本地 `src`、`href` 指向的 CSS、JS、圖片、音訊、影片或附件檔案存在。
6. `style.css`、`script.js` 若被引用，檔案存在且路徑正確。
7. 沒有使用指向不存在檔案的本地路徑。
8. 沒有錯把 notes 中的 Markdown 相對資產路徑直接搬進 demo 而導致路徑失效。
9. 沒有修改 `notes/`、`origin/`、`atomic/`。

### 瀏覽器驗證（可行時必須）

注意：本執行環境多數情況無法自動開啟瀏覽器。此時以「靜態檢查」為主路徑，必須明確標示瀏覽器驗證未執行，**不得**因為跑過靜態檢查就宣稱已實機驗證或逕將 demo 標為已完成。

若執行環境可開啟本地 HTML 或啟動本地 server，應使用瀏覽器檢查：

1. 頁面非空白。
2. 核心展示區可見。
3. 主要文字沒有明顯重疊或溢出。
4. console 沒有阻塞 demo 使用的錯誤。
5. 每組互動 demo 至少操作一次核心互動，確認狀態有正確變化。
6. 媒體或圖片 demo 中的資產有正常載入；若資產缺失是 notes/source 本身問題，列入需要人工確認，不要自行創造替代資產。

如果瀏覽器驗證不可行，輸出中必須寫明：

```text
瀏覽器驗證：未執行，原因：<原因>
```

---

## 輸出格式

### 階段一：Demo 生成規劃

不要建立、修改或刪除任何檔案。

```md
## Demo 生成規劃

- 章節：
- 掃描 notes 數：
- 預計生成 demo 數：
- 不生成 demo 的 notes 數：
- 需要人工確認項目數：

## Notes Inventory

| Notes 檔案 | 標題 | 教學類型/主題 | 可展示內容 | demo 判斷 |
| --- | --- | --- | --- | --- |

## Demo 規劃清單

| Demo 目錄 | 對應 notes | 生成方式 | Demo 類型 | 教學目標 | 互動/展示設計 | 主要檔案 |
| --- | --- | --- | --- | --- | --- | --- |
| demos/<章節>/<筆記名>/ | notes/<章節>/01-主題.md | 一對一 | 標籤展示/對照比較/互動觀察 | 讓讀者觀察某屬性如何影響呈現 | 左側顯示原始 HTML，右側顯示結果；切換 checkbox 後比較有無屬性的差異 | index.html, style.css, script.js |

## 不生成 Demo 的 Notes

| Notes 檔案 | 原因 | 建議 |
| --- | --- | --- |

## 需要人工確認

| 內容位置 | 問題 | 建議處理 |
| --- | --- | --- |

## 階段二執行說明

如果以上規劃確認無誤，請回覆：

「確認，請產生 demos」
```

### 階段二：直接寫入成功時

```md
## Demo 生成摘要

- 章節：
- 已建立 demo：
- 已更新 demo：
- 未處理項目：
- 驗證結果：

## 建立清單

| Demo 目錄 | 對應 notes | 主要檔案 | 驗證方式 |
| --- | --- | --- | --- |

## 檢查結果

- 是否只輸出到 demos/<章節>/：
- 是否未修改 notes/atomic/origin：
- 是否每組 demo 可獨立開啟：
- 是否具備固定格式 Source notes 註解且路徑存在：
- 是否相對路徑正確：
- 是否完成靜態檢查：
- 是否完成瀏覽器驗證：

## meta/chapter-status.md 建議

- 「demos 生成」欄位建議標記：
```

### 階段二：不能直接寫入檔案時

如果執行環境不能直接寫入檔案，請用以下格式輸出每個檔案內容：

````md
### FILE: demos/<章節>/<筆記名>/index.html

```html
<!doctype html>
<html lang="zh-Hant">
...
</html>
```
````

---

## Few-Shot 判斷

### 範例一：一對一標籤展示

```text
notes/180-圖片標籤/01-img標籤與圖片替代文字.md
```

建議：

```text
Demo 目錄：demos/180-圖片標籤/01-img標籤與圖片替代文字/
生成方式：一對一
Demo 類型：標籤展示 + 錯誤修正
教學目標：讓讀者觀察 src 與 alt 的作用，以及圖片無法載入時 alt 如何提供替代資訊。
互動/展示設計：提供正常圖片、故意錯誤 src、缺少 alt、有 alt 四個對照區塊；可切換「模擬圖片載入失敗」觀察替代文字。
主要檔案：index.html, style.css, script.js
```

### 範例二：多篇 notes 不放在 demos 整合

```text
notes/240-表單標籤/02-input基礎與文字密碼輸入.md
notes/240-表單標籤/03-單選複選與下拉選項.md
notes/240-表單標籤/04-表單按鈕與提交行為.md
```

建議：

```text
判斷：不在 demos 內建立跨 notes 整合 demo。
原因：這是多篇 notes 的完整表單情境，應改走 notes-project-generation。
建議輸出：列入「需要人工確認」或「不生成 Demo 的 Notes」，並建議使用者改用 projects 規劃。
```

### 範例三：單篇 notes 內含多個展示點

```text
notes/050-全局屬性/01-HTML全局屬性入門.md
```

建議：

```text
Demo 目錄：demos/050-全局屬性/01-HTML全局屬性入門/
生成方式：一對一
Demo 類型：對照比較
互動/展示設計：在同一個 index.html 內用分區或頁籤分別展示 id/class 與 title/hidden，不拆成多個 demo 目錄。
```

判斷理由：同一篇 notes 對應單一 demo 目錄；多個展示點可在同一組 demo 內組織。

### 範例四：不生成 demo

```text
notes/020-HTML簡介/02-HTML5版本與特性.md
```

若內容主要是版本歷史與特性概覽，建議列入不生成：

```text
原因：以背景知識與版本脈絡為主，獨立 demo 只能重述文字，展示價值低。
建議：可在其他標籤或語意化 demo 中簡短提及 HTML5 相關特性。
```

---

## Reverse Prompting：資訊不足時請反問

遇到以下情況時，不要猜測，請先請使用者補充：

1. 未提供章節名稱。
2. `notes/<章節>/` 不存在或沒有 `.md` 檔案。
3. `meta/chapter-status.md` 顯示「notes 完成檢查」尚未完成。
4. `meta/chapter-status.md` 顯示「notes 索引元資料」尚未完成。
5. 使用者要求第二階段產生 demos，但尚未明確回覆「確認，請產生 demos」。
6. 目標 demo 目錄或檔案已存在，且使用者尚未確認覆蓋、更新或保留。
7. demo 需要的圖片、音訊、影片或附件資產在 origin 中無法定位。
8. 需要引入外部 CDN、第三方框架或遠端資源，且 notes 本身沒有要求。

---

## 最終品質標準

階段二完成後，必須逐項檢查：

1. 是否只以 `notes/<章節>/*.md` 為內容來源，`origin/<章節>/assets/...` 僅供唯讀讀取或複製資產（不修改 origin 原檔）。
2. 是否先建立 demo 規劃，而非機械式逐篇生成。
3. 是否每組 demo 只對應單一 notes，且多篇 notes 的整合需求已導回 `notes-project-generation`。
4. 是否每組 demo 都有清楚教學目標。
5. 是否每組 demo 都有可觀察範例、對照或互動。
6. 是否避免把 notes 全文搬進 HTML 頁面。
7. 是否每組 demo 具備固定格式 `Source notes` 註解，作為 demos 層等價來源欄位。
8. 是否每組 demo 都有 `index.html` 且可獨立開啟。
9. 是否相對路徑正確，所有本地 `src`/`href` 都能解析；資產以自包含（複製進 demo `assets/`）為優先，若引用 origin 資產已於來源標示註明。
10. 是否未修改 `origin/`、`atomic/`、`notes/`、原始資產檔案或其他下游目錄。
11. 是否已完成靜態檢查。
12. 若環境可行，是否已完成瀏覽器驗證與至少一次核心互動檢查。
13. 若無法瀏覽器驗證，是否明確說明原因。
14. 是否提出 `meta/chapter-status.md` 中「demos 生成」欄位的建議標記。

可建議「demos 生成」標記為「已完成」的條件：

1. 規劃中應生成的 demo 都已建立或更新。
2. 不生成 demo 的 notes 都有合理原因。
3. 沒有未解決的、會讓 demo 無法開啟、無法展示核心效果，或會誤導初學者的問題。
4. 靜態檢查通過。
5. 瀏覽器驗證已通過；若環境不可行，需明確列出未執行原因與剩餘風險。
