本 CSS 知識包用來管理 CSS 學習資料、原子化資料、正式筆記、附錄查表資料、補充內容、示範程式、練習題、複習材料與 AI 提示詞。

## 目錄結構

```text
css/
  meta/
  origin/
  atomic/
  notes/
  appendix/
  demos/
  projects/
  practice/
  review/
  supplements/
  skills-src/
  scripts/
```

## 目錄說明

| 目錄 | 作用 | 用途 |
| --- | --- | --- |
| `meta/` | 專案管理資料區 | 存放章節處理狀態、索引與 repo 維護流程紀錄。 |
| `origin/` | 原始資料區 | 存放章節原始資料文件與 `assets/` 內的原始輔助資源。原始資料作為可追溯來源，不直接改寫為正式筆記。 |
| `atomic/` | 原子化資料區 | 根據 `origin/` 的原始資料重新切分、合併與修正後產生候選原子資料。 |
| `notes/` | 正式筆記區 | 根據 `atomic/` 生成正式 CSS 教學筆記，是整個筆記包的主幹知識。 |
| `appendix/` | 附錄資料區 | 根據 `notes/` 生成查表型資料，例如選擇器、屬性值、單位、函式、at-rule、shorthand/longhand 對照或設計 token 等。 |
| `demos/` | 示範程式區 | 根據 `notes/` 生成可執行或可參考的 CSS 範例。每組 demo 對應單一筆記，聚焦一個 CSS 知識點。 |
| `projects/` | 整合專案區 | 根據跨章節的多篇 `notes/` 生成可獨立開啟執行的 CSS 整合頁面或小型專案。 |
| `practice/` | 練習題區 | 根據 `notes/` 生成練習題、實作任務、改錯題與重構題。 |
| `review/` | 複習材料區 | 根據 `notes/` 生成重點摘要、問答題、填空題與複習卡片。 |
| `supplements/` | 補充資料區 | 整理外部素材或延伸解說為補充筆記，並以 `notes/` 作為來源追溯與內容邊界。 |
| `skills-src/` | Skill 原始碼區 | 存放各 skill 的原始碼，由 `scripts/build-skills.mjs` 建置至各 AI 工具的 skill 目錄。 |
| `scripts/` | 維護腳本區 | 存放專案維護用的 Node.js 腳本，不屬於 CSS 知識內容。 |

## 資料流

```text
origin/<章節>/*.md
origin/<章節>/assets/
  ↓
資產命名（視需要就地更新 origin/）
  ↓
alt 與連結文字整理（視需要就地更新 origin/）
  ↓
atomic 切分提案與產生
  ↓
atomic/
  ↓
atomic review
  ↓
notes/
  ↓
notes content review
  ↓
notes 索引元資料
  ↓
demos/  practice/  review/
  ↓
最終驗收
```

說明：

* `origin/` 是後續資產整理、atomic 切分與正式筆記生成的來源層。
* 「資產命名」與「alt 與連結文字整理」是 `origin/` 原始資料保護規則的例外，僅在需要整理資產路徑、圖片替代文字或連結顯示文字時進行。
* `atomic/` 是 `origin → atomic` 的中介成果，用來整理章節粒度、概念邊界、內容順序與教學可用性。
* `atomic review` 是進入正式筆記前的審查關卡，確認 CSS 技術正確性、主題歸屬、教學順序與範例可用性。
* `notes/` 是 `atomic → notes` 的正式筆記成果，應作為下游教材生成的唯一知識來源。
* `notes content review` 審查正式筆記是否符合教學筆記要求，通過後才能進入索引元資料與下游教材生成。
* `demos/`、`practice/`、`review/` 以 `notes/` 為來源生成，為每章節標準輸出。
* `appendix/` 為選用，當該章節有足夠可表格化或速查化的 CSS 內容時，以 `notes/` 為來源生成。
* `supplements/` 為選用補充層，用來承接值得延伸但不適合打斷主線教學節奏的內容。
* `projects/` 為選用的跨章節整合層，以多篇 `notes/` 為來源，生成能綜合運用已教 CSS 技術的實作專案。
* 「最終驗收」是章節標準交付內容完成後的 release gate，驗證前置閘門、產出存在性、來源追溯、連結與資產完整性、索引與狀態一致性。

## 流程與 skill 對照

| 流程階段 | 對應狀態欄位 | 性質 | 操作規格 |
| --- | --- | --- | --- |
| origin 整理 | origin 整理 | 必經前置 | 人工整理，無專屬 skill |
| 資產命名 | 資產命名 | 視章節需要 | [`skills-src/asset-standardization/instructions.md`](skills-src/asset-standardization/instructions.md) |
| alt 與連結文字整理 | alt 與連結文字 | 視章節需要 | [`skills-src/asset-alt-and-link-text/instructions.md`](skills-src/asset-alt-and-link-text/instructions.md) |
| atomic 切分提案與產生 | atomic 切分提案 / atomic 產生 | 必經 | [`skills-src/atomic-note-splitting/instructions.md`](skills-src/atomic-note-splitting/instructions.md) |
| atomic review | atomic 內容審查 | 必經關卡 | [`skills-src/atomic-content-review/instructions.md`](skills-src/atomic-content-review/instructions.md) |
| notes 生成 | notes 生成 | 必經 | [`skills-src/notes-generation/instructions.md`](skills-src/notes-generation/instructions.md) |
| notes content review | notes 完成檢查 | 必經關卡 | [`skills-src/notes-content-review/instructions.md`](skills-src/notes-content-review/instructions.md) |
| notes 索引元資料 | notes 索引元資料 | 必經 | [`skills-src/notes-index-metadata/instructions.md`](skills-src/notes-index-metadata/instructions.md) |
| demos 生成 | demos 生成 | 標準輸出 | [`skills-src/notes-demo-generation/instructions.md`](skills-src/notes-demo-generation/instructions.md) |
| practice 生成 | practice 生成 | 標準輸出 | [`skills-src/notes-practice-generation/instructions.md`](skills-src/notes-practice-generation/instructions.md) |
| review 生成 | review 生成 | 標準輸出 | [`skills-src/notes-review-generation/instructions.md`](skills-src/notes-review-generation/instructions.md) |
| appendix 索引 | appendix 索引 | 選用 | [`skills-src/notes-appendix-generation/instructions.md`](skills-src/notes-appendix-generation/instructions.md) |
| supplements 生成 | 不佔用 `chapter-status.md` 標準欄位 | 選用補充 | [`skills-src/notes-supplements-generation/instructions.md`](skills-src/notes-supplements-generation/instructions.md) |
| projects 生成 | 不佔用 `chapter-status.md` 章節列 | 選用跨章節 | [`skills-src/notes-project-generation/instructions.md`](skills-src/notes-project-generation/instructions.md) |
| 最終驗收 | 最終驗收 | 必經 release gate | [`skills-src/chapter-final-acceptance/instructions.md`](skills-src/chapter-final-acceptance/instructions.md) |

## 維護更新流程

上方「資料流」描述的是初始生產管線。當已完成的章節需要事後改動時，應走維護更新流程，並以 `update-judgment` 作為進入點：

```text
變更觸發（任一層級：origin、atomic、notes、assets 或下游教材）
  ↓
update-judgment 判斷
  ↓
判斷輸出：更新類型、最新正確來源、受影響層、建議執行順序、chapter-status.md 建議標記
  ↓
依判斷結果，從主生產管線的對應位置重新執行受影響流程
  ↓
完成後同步更新 meta/chapter-status.md 受影響欄位
```

說明：

* 任何對已完成章節的改動，應先判斷更新類型、最新正確來源與受影響範圍，再決定要從主管線哪個位置重新進入。
* `update-judgment` 只產出判斷結論，不直接修改任何檔案；除非使用者明確要求，否則不得在判斷階段改動檔案。
* 判斷結果中的候選同步或候選重生成範圍是規劃清單，不等於必須全部重跑。
* 維護過程的改動應在對應欄位標回 `進行中` 或 `待確認`，完成後再標回 `已完成`。
* `projects/` 為跨章節整合層；當某章 `notes/` 改動時，須判斷是否影響相關整合專案。
* 詳細的維護過程記錄於 `meta/chapter-logs/<章節名稱>.md`，不寫入 `meta/chapter-status.md`。

## 各層目錄規則

### origin/

```text
origin/
  <章節>/
    assets/
      images/
      pdfs/
      excels/
      word/
      files/
      ...
    *.md
```

* `origin/` 為原始資料來源，不直接改寫為正式筆記。
* `assets/` 依資源類型分類存放。
* 若需要更新本地資產檔名、資產引用路徑、圖片替代文字或連結顯示文字，應在產生 `atomic/` 前完成。

### atomic/

```text
atomic/
  <章節>/
    *.md
```

* `atomic/` 可在同一 `<章節>` 內重新切分、合併與修正 `origin/` 的資料。
* `atomic/` 的內容應聚焦單一 CSS 概念或緊密相關的一組概念。
* `atomic/` 可引用 `origin/<章節>/assets/` 中的資產。

### notes/

```text
notes/
  <章節>/
    *.md
```

* `notes/` 根據對應的 `atomic/<章節>/` 生成正式 CSS 教學筆記。
* 正式筆記應清楚區分 CSS 選擇器、屬性、值、層疊、繼承、盒模型、布局、視覺效果、響應式、限制、常見錯誤與實作情境。
* 可提及必要的 HTML 結構，但僅作為選擇器目標、DOM 載體、demo 結構或練習起始碼背景，不應把重點轉為 HTML 教學。
* `notes/` 可引用 `origin/<章節>/assets/` 中的資產。

### appendix/ practice/ review/ supplements/

```text
<目錄>/
  <章節>/
    *.md
```

* 這些目錄根據 `notes/<章節>/*.md` 生成或對應，章節資料夾與 `origin/`、`atomic/`、`notes/` 對齊。
* `appendix/` 為選用，僅在該章節有足夠可速查化的內容時才建立。
* `supplements/` 為選用補充層，內容須以 `source_notes` 回連既有 `notes/`。

### demos/

```text
demos/
  <章節>/
    <筆記名>/
      index.html
      ...
```

* `notes/<章節>/<筆記名>.md` 對應一個 `demos/<章節>/<筆記名>/` 資料夾。
* CSS demo 可包含必要的 HTML 作為 DOM 載體，並可少量使用 JavaScript 作為互動輔助，但教學重點應放在 CSS 規則、樣式效果、布局行為與瀏覽器渲染差異的觀察。
* demo 應可獨立開啟執行，並盡量讓 CSS 範例清楚、聚焦、容易比較。

### projects/

```text
projects/
  <專案-slug>/
    project.md
    index.html
    ...
```

* `projects/` 是跨章節整合層，以「專案」為單位，不以章節為鍵。
* 每個專案資料夾至少包含 `project.md` 清單檔與可獨立開啟執行的檔案。
* `project.md` 作為專案來源追溯與 `meta/projects-index.md` 自動索引的依據。
* 專案只能組裝來源 notes 已教過的 CSS 技術，不應引入尚未建立筆記來源的新知識；必要的 HTML 僅作為頁面結構與樣式套用對象。

### 工具目錄

```text
skills-src/
  <skill-name>/
    ...

scripts/
  build-skills.mjs
  ...
```

* `skills-src/` 每個子目錄對應一個 skill，由 `scripts/build-skills.mjs` 建置至各 AI 工具的 skill 目錄。
* 新增或修改 skill 原始碼後，執行 `node scripts/build-skills.mjs` 重新建置。
* `scripts/` 存放專案維護腳本，不屬於 CSS 知識內容。

## 章節命名規則

* 格式：`<編號>-<章節標題>`，編號為三位數，建議間隔 10，例如 `010`、`020`、`030`。
* 目前不預先固定 CSS 章節數量；待 `origin/` 中的原始 CSS 筆記整理完成後，再依實際章節新增追蹤列與編號。
* 同一章節的資料夾名稱應在 `origin/`、`atomic/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 之間保持一致。
* `projects/` 不在上述跨層一致規則內；它以專案為單位，採獨立的全域 `<編號>-<專案標題>` 命名。

## meta/ 章節索引

`meta/chapter-status.md` 記錄所有章節的：

* 章節編號與標題。
* 各維護概念的處理狀態。
* 整體完成率、整體狀態、下一步待辦與備註。

狀態值建議維持：未開始 / 進行中 / 待確認 / 已完成 / 暫停 / 不適用。

`meta/chapter-logs/<章節名稱>.md` 記錄各章節的狀態摘要、已執行流程、待確認事項與下一步。

`meta/index.md` 是 `notes/` 的聚合索引，由 `scripts/build-index.mjs` 從各 `notes/<章節>/*.md` 的 front matter 自動產生。

`meta/projects-index.md` 是 `projects/` 整合專案層的索引與反向追溯表，由 `scripts/build-projects-index.mjs` 從各 `projects/<專案-slug>/project.md` 的 front matter 自動產生。

`meta/supplements-index.md` 是 `supplements/` 補充筆記層的聚合索引，由 `scripts/build-supplements-index.mjs` 從各 `supplements/<章節>/*.md` 的 front matter 自動產生。

## 核心原則

* `origin/` 是原始資料來源；正式筆記應由 `atomic/` 與 `notes/` 流程產生。
* `meta/` 是專案管理資料的集中位置，不作為 CSS 知識來源。
* `atomic/` 是整理原始資料的中介層，不等於正式筆記。
* `notes/` 是根據 `atomic/` 生成的主幹知識。
* `demos/`、`practice/`、`review/` 是根據 `notes/` 生成的不同用途內容，為每章節標準輸出。
* `appendix/`、`supplements/`、`projects/` 為選用輸出，依內容需要建立。
* 各層 `<章節>` 資料夾名稱需在章節型目錄之間保持一致；`projects/` 以專案為鍵，不在此列。
* `atomic/`、`notes/` 不另存資產，統一引用 `origin/<章節>/assets/`。
