
# Notes 轉跨章節整合 HTML 專案

## 定位與適用範圍

本 skill 負責 `projects/` 跨章節整合層。它解決一個結構痛點：`demos/` 以單篇 notes 為單位（`demos/<章節>/<筆記名>/`，1:1 微觀範例），因此「結合多章知識的完整頁面（例如一個同時用到表單、語意化標籤、全局屬性、路徑、表格的註冊頁）」在 `demos/` 中無處可放。`projects/` 就是這類**宏觀綜合場景**的家。

`projects/` 與 `demos/`、`practice/`、`review/`、`appendix/`、`supplements/` 的關鍵差異：

```text
demos/      單篇 notes        微觀範例    以章節為鍵      1:1 單一來源
projects/   跨章節多篇 notes  宏觀專案    以專案為鍵      多來源追溯（多對一、跨章節）
```

`projects/` 是**選用層**，不在單章節資料流之內；只有當「把多章知識組成一個真實頁面」的教學價值明確高於各自獨立的 demo 時才生成。寧可不建，不過度生成。

本 skill 主要讀取：

```text
notes/<章節A>/*.md
notes/<章節B>/*.md
...（使用者指定、跨章節的多篇 notes）
meta/chapter-status.md
meta/projects-index.md
```

必要時唯讀讀取（可複製資產進專案，不修改原檔）：

```text
origin/<章節>/assets/...
```

只輸出或更新：

```text
projects/<專案-slug>/
meta/projects-index.md   （由 scripts/build-projects-index.mjs 重建，不手動編輯）
```

本 skill 不修改：

```text
origin/
atomic/
notes/
demos/
practice/
review/
appendix/
supplements/
meta/chapter-status.md
任何原始資產實體檔案
```

整合專案不佔用 `meta/chapter-status.md` 的章節列；其狀態與來源追溯一律記錄於 `meta/projects-index.md`（自動產生）。

---

## 角色定位

啟用本 skill 時，扮演「前端整合專案設計師」與「HTML/CSS/JavaScript 教學實作審查員」，目標是把**多篇已完成的 notes** 收斂成一個可直接打開、有完整情境的綜合頁面，讓讀者看到「分散學到的各個知識點如何在一個真實頁面裡協作」。

合格的整合專案要讓讀者：

```text
打開 index.html 就能看到一個完整、可理解的真實頁面情境
看得出這個頁面用到了哪幾章、哪幾篇 notes 的知識
每個被組合進來的知識點都能在頁面中找到對應的具體用法
能從整體頁面回推各個 HTML 結構、屬性與行為如何分工
```

必須優先避免：

1. 把整合專案做成只是把多篇 notes 內容拼貼成一頁長文。
2. 引入任何一篇來源 notes 都沒教過的新技術（破壞整合紅線）。
3. 為了「看起來綜合」硬塞不相關的章節，讓專案失焦。
4. 在來源章節尚未就緒時就生成（破壞生成閘門）。
5. 把單篇 notes 就能展示的內容硬做成跨章節專案（那應該回到 `notes-demo-generation`）。
6. 修改 `notes/`、`origin/`、`atomic/` 或原始資產檔案。
7. 未驗證就宣稱專案可用。

---

## 整合紅線（最重要）

> 專案只能組裝 `source_notes` 清單所列各篇 notes **已教過技術的聯集**，不得引入任何一篇來源 notes 都未涵蓋的新知識。

這是把單親追溯（demos 的 1:1）泛化成多親追溯（projects 的多對一）後，仍要守住的「下游不得超出來源」原則。判斷時：

1. 專案用到的每一項 HTML 標籤、屬性、CSS、JS 行為，都必須能在 `source_notes` 其中至少一篇找到支撐。
2. 若某個必要技術沒有任何來源 notes 教過，有兩個選項：將對應的 notes 補進 `source_notes`（且該章節須已就緒），或把該技術從專案中移除。兩者皆不可行時，列入「需要人工確認」，不要自行引入。
3. CSS 僅用於版面與呈現，不得成為夾帶未教技術的破口；JS 僅用於輔助觀察，不取代 HTML 本身的語意或功能。

---

## 生成閘門

一個整合專案只有在它 `source_notes` 所涉及的**所有**章節都已通過「notes 索引元資料」後才能生成（`prerequisites` 即為這組章節的去重集合）。

```text
對 source_notes 涉及的每個章節 <章節>：
  查 meta/chapter-status.md 該章「notes 索引元資料」欄位
  須為「已完成」
任一章節未完成 → 第一階段判「不生成」，列出缺口，提示先完成該章節的 notes 索引元資料
```

整合專案是橫跨多章的收斂節點，位置比任何單章下游產物都晚。

---

## 輸入資訊

開始前確認以下資訊是否足夠：

```text
專案主題或目標：例如「會員註冊表單頁」「個人履歷頁」
預計組合的來源 notes：跨章節的多篇 notes/<章節>/<檔名>.md
專案根目錄：預設為目前工作目錄
執行階段：預設為階段一「整合專案規劃」
是否允許寫入檔案：預設不允許；階段二確認語句可視為允許寫入 projects/<專案-slug>/
```

如果使用者只給了主題、沒有指定來源 notes，請先協助盤點候選來源 notes 並反問確認，不要自行假設要組合哪些章節。盤點候選來源時，可先利用 notes front matter 的 `topics` 與 `summary` 快速篩選可能相關的 notes；但候選成立前仍必須讀取 notes 全文，確認內容確實支撐專案需要。

如果使用者指定的來源 notes 不存在，或其所屬章節「notes 索引元資料」尚未完成，不要猜測或硬生，請回報缺口並請使用者先完成對應前置或調整來源清單。

在資訊不足時，只能提出需要補充的問題，不得直接產生專案。

---

## 專案粒度判斷

| 判斷 | 適用情況 | 處理 |
| --- | --- | --- |
| 生成整合專案 | 多篇跨章節 notes 的知識在「同一個完整頁面/流程」中協作，綜合展示價值明顯高於各自獨立 demo | 建立一個 `projects/<專案-slug>/` |
| 不生成 | 單篇 notes 即可展示、或只是把不相關章節湊在一起、或來源章節尚未就緒 | 不建立，說明原因；單篇可展示者導回 `notes-demo-generation` |

判斷標準：

1. 專案必須有一個清楚、真實的頁面情境（一個表單頁、一個文章頁、一個列表頁…），不是知識點的拼盤。
2. 至少要跨兩個章節、且各章節的知識在頁面中都有實質作用。
3. 若某章節只是被「順帶提到」而非真正參與頁面組成，不應列入 `source_notes`。

---

## 檔案與路徑規則

### 輸出目錄

```text
projects/<專案-slug>/
```

`<專案-slug>` 規則：

1. 採全域 `<編號>-<專案標題>`，編號三位數、間隔 10（如 `010-會員註冊表單頁`、`020-個人履歷頁`），與章節編號各自獨立。
2. 新增專案取目前最大編號 +10；間隔 10 預留插入空間。
3. 標題沿用能代表頁面情境的中文短語，不使用空白、路徑分隔符、冒號、問號等不適合檔名的字元。
4. 不得與既有專案 slug 重複。

### 專案檔案

每個專案至少建立：

```text
projects/<專案-slug>/project.md     清單檔（front matter + 簡短說明）
projects/<專案-slug>/index.html     可獨立開啟執行的整合頁面
```

依需要建立：

```text
projects/<專案-slug>/style.css
projects/<專案-slug>/script.js
projects/<專案-slug>/assets/...
```

選擇規則：

1. 整合專案的樣式與互動通常超過短小片段，建議拆出 `style.css`、`script.js`，而非全部內嵌。
2. 需要本地資產時，預設「複製」到專案內 `assets/`，讓專案自包含、可單獨打包搬移（複製不違反「不搬動或改名 origin 原始資產」）。`projects/` 可自帶 `assets/`（「不另存資產」只約束 atomic/notes）。
3. 僅在資產過大或不宜複製時，才相對引用 `origin/<章節>/assets/...`，且必須使用從專案目錄出發可解析的相對路徑，並在來源標示中註明「本專案依賴 origin 資產，非自包含」。
4. 外部 CDN、遠端資源、第三方框架預設不使用；除非來源 notes 主題本身需要，且使用者已同意。

### project.md 清單檔

`project.md` 是專案的追溯與索引來源，`meta/projects-index.md` 由它自動產生。格式：

```md
---
source_notes:
  - notes/240-表單標籤/01-表單的用途與提交結構.md
  - notes/240-表單標籤/06-label與表單分組.md
  - notes/130-語意化標籤/01-語意化標籤總覽.md
  - notes/050-全局屬性/01-HTML全局屬性入門.md
topics: [表單, 語意化, 無障礙]
summary: 綜合表單、語意化標籤與全局屬性，組成一個可提交的會員註冊頁。
prerequisites: [050-全局屬性, 130-語意化標籤, 240-表單標籤]
level: 綜合
---

# 會員註冊表單頁

（一段簡短說明：這個專案是什麼頁面、組合了哪些知識點、讀者該觀察什麼。）
```

front matter 欄位：

```text
source_notes   必填，跨章節的多篇 notes 來源清單（多來源追溯，整合紅線的依據）
topics         2-5 個主題標籤
summary        一句話描述這個專案是什麼
prerequisites  前置章節清單，即為 source_notes 所涉章節的去重集合（由 source_notes 推導，不另行指定）；生成閘門以此組章節為準
level          專案層級，例如「綜合」
```

### 來源標示

`index.html` 中應以 HTML 註解列出全部來源 notes，例如：

```html
<!-- Source notes:
  notes/240-表單標籤/01-表單的用途與提交結構.md
  notes/130-語意化標籤/01-語意化標籤總覽.md
  notes/050-全局屬性/01-HTML全局屬性入門.md
-->
```

來源標示只做追溯，不把整篇 notes 搬進頁面。

---

## 處理流程

### Step 1：前置檢查

1. 是否已取得專案主題與候選來源 notes。
2. 每篇 `source_notes` 是否存在且可讀取。
3. `source_notes` 涉及的每個章節，`meta/chapter-status.md` 中「notes 索引元資料」是否為「已完成」（生成閘門）。
4. 規劃中的 `<專案-slug>` 是否與既有專案衝突。
5. 目前是否處於階段一；若沒有明確確認語句，不得進入階段二。

任一項不符合，先回報問題並要求使用者補充，不要猜測或硬生。

### Step 1.5：候選來源 notes 盤點（未指定 source_notes 時）

若使用者只提供專案主題或目標，尚未指定 `source_notes`：

1. 可先掃描已完成「notes 索引元資料」章節的 notes front matter，利用 `topics` 與 `summary` 篩出候選 notes。
2. 候選 notes 只代表「可能相關」，不得直接當作專案來源。
3. 必須讀取候選 notes 全文，確認它們實際教過專案需要的標籤、屬性、結構或行為。
4. 將候選 `source_notes` 清單交給使用者確認；未確認前不得進入階段二生成。
5. 若 `topics` / `summary` 看似相關但全文無法支撐專案需求，應排除或列入需要人工確認。

### Step 2：讀取與理解

1. 讀取所有來源 notes，理解各篇的核心知識點與可組合內容。
2. 建立 Source Notes Inventory，記錄每篇 notes 的章節、標題、核心知識點、可在整合頁面中扮演的角色。
3. 規劃一個能讓這些知識點自然協作的真實頁面情境。

### Step 3：整合專案規劃

對該專案規劃：

1. 專案目錄 `<專案-slug>` 與主要檔案。
2. 頁面情境與教學目標。
3. `source_notes` 多來源清單（逐篇對應它在頁面中的作用）。
4. `prerequisites` 前置章節清單與就緒狀態。
5. 頁面結構、版面與（若有）互動設計，需具體到看得出頁面長什麼樣、各知識點對應頁面哪個部位。
6. 整合紅線自檢：列出頁面要用到的關鍵技術，逐項標出由哪篇來源 notes 支撐。
7. 需要的 HTML/CSS/JS/資產。
8. 驗證方式。
9. 需要人工確認的風險或取捨（特別是任何「找不到來源 notes 支撐」的技術）。

### Step 4：兩階段執行

#### 階段一：整合專案規劃（預設）

階段一即 Step 1～Step 3 的執行。只輸出規劃結果，不建立、修改或刪除任何檔案，最後依「輸出格式」的階段一範本輸出規劃，等待使用者確認。

#### 階段二：產生 projects

只有在使用者明確回覆：

```text
確認，請產生 projects
```

才可以進入階段二。這句確認同時代表使用者已確認專案規劃，並允許寫入 `projects/<專案-slug>/`。

階段二流程：

1. 依確認後的規劃建立專案目錄。
2. 如果目標目錄或檔案已存在，不得直接覆蓋；先列出既有項目並要求使用者確認覆蓋、更新或保留。
3. 產生 `project.md`（含完整 front matter）、`index.html` 與必要的 `style.css`、`script.js`、`assets/`。
4. 執行 `node scripts/build-projects-index.mjs` 重建 `meta/projects-index.md`。
5. 執行靜態檢查。
6. 若環境可行，使用瀏覽器打開 `index.html` 做畫面與互動驗證。
7. 驗證失敗時先修正，再輸出完成回報。
8. 若環境無法瀏覽器驗證，明確回報只完成靜態驗證與原因。

---

## 驗證規則

生成後必須驗證，不得省略。

### 靜態檢查（必須）

1. `projects/<專案-slug>/project.md` 與 `index.html` 存在且非空。
2. `project.md` front matter 含 `source_notes`、`topics`、`summary`、`prerequisites`、`level`，且 `source_notes` 每筆都指向實際存在的 `notes/<章節>/*.md`。
3. `index.html` 具備最小骨架：`<!doctype html>`、`<html lang="...">`、`<meta charset="utf-8">`、`<meta name="viewport" content="width=device-width, initial-scale=1">`、非空 `<title>`。
4. 本地 `src`、`href` 指向的 CSS、JS、圖片、附件檔案存在；資產以自包含（複製進專案 `assets/`）為優先。
5. 整合紅線複查：頁面用到的每項技術都有 `source_notes` 中某篇支撐，沒有夾帶未教技術。
6. 已執行 `build-projects-index.mjs`，`meta/projects-index.md` 已包含本專案。
7. 沒有修改 `notes/`、`origin/`、`atomic/`、其他下游目錄或 `meta/chapter-status.md`。

### 瀏覽器驗證（可行時必須）

注意：本執行環境多數情況無法自動開啟瀏覽器。此時以「靜態檢查」為主路徑，必須明確標示瀏覽器驗證未執行，**不得**因為跑過靜態檢查就宣稱已實機驗證或逕將專案標為已完成。

若可開啟本地 HTML 或啟動本地 server，應檢查：

1. 頁面非空白，整合情境完整可見。
2. 各來源知識點對應的頁面部位都有正確呈現。
3. 主要文字沒有明顯重疊或溢出。
4. console 沒有阻塞使用的錯誤。
5. 若有互動，至少操作一次核心互動，確認狀態有正確變化。

如果瀏覽器驗證不可行，輸出中必須寫明：

```text
瀏覽器驗證：未執行，原因：<原因>
```

---

## 輸出格式

### 階段一：整合專案規劃

不要建立、修改或刪除任何檔案。

```md
## 整合專案規劃

- 專案主題：
- 預計 slug：projects/<編號>-<專案標題>/
- 涉及章節數：
- 來源 notes 數：
- 生成閘門檢查：通過 / 未通過（列出未就緒章節）
- 需要人工確認項目數：

## Source Notes Inventory

| 來源 notes | 章節 | 核心知識點 | 在整合頁面中的作用 |
| --- | --- | --- | --- |

## 專案設計

- 頁面情境：
- 教學目標：
- 頁面結構與版面：
- 互動設計（若有）：
- prerequisites：
- level：

## 整合紅線自檢

| 頁面要用到的技術 | 由哪篇來源 notes 支撐 | 是否需要人工確認 |
| --- | --- | --- |

## 需要人工確認

| 內容位置 | 問題 | 建議處理 |
| --- | --- | --- |

## 階段二執行說明

如果以上規劃確認無誤，請回覆：

「確認，請產生 projects」
```

### 階段二：直接寫入成功時

```md
## 整合專案生成摘要

- 專案：projects/<專案-slug>/
- 來源 notes：
- 已建立檔案：
- meta/projects-index.md 是否已重建：
- 驗證結果：

## 檢查結果

- 是否只輸出到 projects/<專案-slug>/ 與重建 meta/projects-index.md：
- 是否未修改 notes/atomic/origin/其他下游/chapter-status.md：
- 是否每項技術都有來源 notes 支撐（整合紅線）：
- 是否專案可獨立開啟、相對路徑正確：
- 是否完成靜態檢查：
- 是否完成瀏覽器驗證：
```

### 階段二：不能直接寫入檔案時

如果執行環境不能直接寫入檔案，請用以下格式輸出每個檔案內容：

````md
### FILE: projects/<專案-slug>/project.md

```md
---
source_notes:
  - notes/...
...
---

# 標題
```

### FILE: projects/<專案-slug>/index.html

```html
<!doctype html>
<html lang="zh-Hant">
...
</html>
```
````

並提醒使用者寫入後執行 `node scripts/build-projects-index.mjs` 重建索引。

---

## Few-Shot 判斷

### 範例一：生成整合專案（會員註冊頁）

```text
來源 notes：
  notes/240-表單標籤/01-表單的用途與提交結構.md
  notes/240-表單標籤/06-label與表單分組.md
  notes/130-語意化標籤/01-語意化標籤總覽.md
  notes/050-全局屬性/01-HTML全局屬性入門.md
```

建議：

```text
專案：projects/010-會員註冊表單頁/
頁面情境：一個完整的會員註冊頁，含 header/main/footer 語意結構，主體是一個分組（fieldset/legend）的註冊表單。
各知識點作用：
  240 表單 → 表單結構、input、label 與分組
  130 語意化 → 用語意化標籤搭出整頁骨架
  050 全局屬性 → id/class/title 串接 label 與控制項
整合紅線：頁面只用到上述四篇 notes 教過的技術，未引入新知識。
prerequisites：050-全局屬性、130-語意化標籤、240-表單標籤（皆須「notes 索引元資料」已完成）
```

### 範例二：不生成（單篇即可展示）

```text
來源 notes：notes/240-表單標籤/05-HTML5輸入類型與表單屬性.md
```

判斷：單篇 notes 即可在一組 demo 中展示各 input type，沒有跨章節綜合需求。

```text
原因：屬單一知識點，宜回到 notes-demo-generation 在 demos/240-表單標籤/ 生成單章 demo，不需整合專案。
```

### 範例三：不生成（來源章節未就緒）

```text
來源 notes 涉及 130-語意化標籤、240-表單標籤
但 130 的「notes 索引元資料」尚為「進行中」
```

判斷：生成閘門未通過。

```text
原因：130-語意化標籤 尚未完成 notes 索引元資料；先完成該章前置，再回來生成整合專案。
```

---

## Reverse Prompting：資訊不足時請反問

遇到以下情況時，不要猜測，請先請使用者補充：

1. 只給專案主題、未指定要組合哪些來源 notes。
2. 指定的 `source_notes` 有檔案不存在。
3. `source_notes` 涉及章節的「notes 索引元資料」尚未完成（生成閘門未過）。
4. 頁面需要某項技術，但任何一篇來源 notes 都沒教過（整合紅線衝突）。
5. 使用者要求第二階段產生 projects，但尚未明確回覆「確認，請產生 projects」。
6. 目標專案目錄或檔案已存在，且使用者尚未確認覆蓋、更新或保留。
7. 專案需要的資產在 origin 中無法定位，或需引入外部資源而來源 notes 未要求。

---

## 最終品質標準

階段二完成後，必須逐項檢查：

1. 是否以多篇跨章節 `notes/` 為來源，`origin/<章節>/assets/...` 僅供唯讀讀取或複製（不修改 origin 原檔）。
2. 是否先建立專案規劃，且通過生成閘門（來源章節皆就緒）。
3. 是否守住整合紅線：每項技術都有來源 notes 支撐，未引入新知識。
4. 是否有清楚、真實的頁面情境，而非知識點拼盤。
5. 是否每個來源知識點都在頁面中有實質作用。
6. 是否 `project.md` front matter 完整（source_notes/topics/summary/prerequisites/level）且 source_notes 皆可解析。
7. 是否 `index.html` 可獨立開啟、相對路徑正確、資產自包含優先。
8. 是否已執行 `build-projects-index.mjs` 重建 `meta/projects-index.md`。
9. 是否未修改 `notes/`、`origin/`、`atomic/`、其他下游目錄或 `meta/chapter-status.md`。
10. 是否完成靜態檢查。
11. 若環境可行，是否完成瀏覽器驗證與至少一次核心互動檢查；若不可行，是否明確說明原因。
