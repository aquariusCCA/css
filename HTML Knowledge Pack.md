本 HTML 知識包用來管理 HTML 學習資料、原子化資料、正式筆記、附錄查表資料、補充內容、範例程式、練習題、複習材料與 AI 提示詞。

## 目錄結構

```text
html/
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

| 目錄             | 作用        | 用途                                                                                                                                                                                                                                                                                                                                      |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta/`        | 專案管理資料區   | 存放章節處理狀態與 repo 維護流程紀錄。                                                                                                                                                                                                                                                                                                                  |
| `origin/`      | 原始資料區     | 存放章節原始資料文件（`*.md`）與 `assets/` 內的原始輔助資源（PDF、Excel、圖片、文件、影音等）。`*.md` 內容不直接修改、覆蓋或刪除，作為可追溯的來源；唯一例外是「資產命名」（見 [`skills-src/asset-standardization/instructions.md`](skills-src/asset-standardization/instructions.md)）與「alt 與連結文字整理」（見 [`skills-src/asset-alt-and-link-text/instructions.md`](skills-src/asset-alt-and-link-text/instructions.md)）階段的就地更新。 |
| `atomic/`      | 原子化資料區    | 根據 `origin/` 中的原始資料，透過人工或 AI 重新切分、合併、修正章節後產生的候選原子資料。此區資料尚不等於正式筆記，主要用來解決原始筆記過長、過短、章節切分不合理、內容混雜等問題。                                                                                                                                                                                                                                       |
| `notes/`       | 正式筆記區     | 根據 `atomic/` 生成正式教學筆記，是整個筆記包的主幹知識。                                                                                                                                                                                                                                                                                                     |
| `appendix/`    | 附錄資料區     | 根據 `notes/` 生成查表型資料，例如名詞表、API 表、指令表、設定檔範例；視內容需要選用生成，僅在該章節有足夠可表格化的查表內容時才建立，非每章節必經。                                                                                                                                                                                                                                                       |
| `demos/`       | 示範程式區     | 根據 `notes/` 生成可執行或可參考的範例程式。每組 demo 對應單一 `notes/<章節>/<筆記>.md`，是針對單一知識點的微觀範例。                                                                                                                                                                                                                                                            |
| `projects/`    | 整合專案區     | 根據「跨章節的多篇 `notes/`」生成可獨立開啟執行的綜合 HTML 專案（例如結合表單、語意化、全局屬性的完整頁面）。以「專案」而非「章節」為單位，是綜合多知識點的宏觀場景；視內容需要選用生成，非每章節必經。                                                                                                                                                                                                            |
| `practice/`    | 練習題區      | 根據 `notes/` 生成練習題、實作任務、改錯題、重構題。                                                                                                                                                                                                                                                                                                         |
| `review/`      | 複習材料區     | 根據 `notes/` 生成重點摘要、問答題、填空題、複習卡片。                                                                                                                                                                                                                                                                                                        |
| `supplements/` | 補充資料區     | 根據 `notes/` 延伸補充底層原理、進階觀念、相關比較與實務案例；當 notes 中某概念因教學節奏未深入說明、但值得進一步理解時，視內容需要選用生成，非每章節必經。                                                                                                                                                                                                                                                  |
| `skills-src/`  | Skill 原始碼區 | 存放各 skill 的原始碼（每個子目錄對應一個 skill），由 `scripts/build-skills.mjs` 建置至各 AI 工具（Claude Code、Codex 等）的 skill 目錄，供工作流各階段呼叫。                                                                                                                                                                                                                                      |
| `scripts/`     | 維護腳本區     | 存放專案維護用的 Node.js 腳本，目前包含 `build-skills.mjs`（將 `skills-src/` 中的 skill 原始碼建置至各 AI 工具的 skill 目錄）。                                                                                                                                                                                                                                                              |

## 資料流

```text
origin/<章節>/*.md
origin/<章節>/assets/
  ↓
資產命名（就地更新 origin/）
  ↓
alt 與連結文字整理（就地更新 origin/）
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
notes 索引元資料（notes-index-metadata）
  ↓
appendix/  demos/  practice/  review/  supplements/
  ↓
最終驗收（chapter-final-acceptance）
```

說明：

* 「origin 整理」對應 `meta/chapter-status.md` 的「origin 整理」欄位，代表原始資料（`*.md`）與各類資產已依目錄結構放入 `origin/<章節>/`，是後續資產命名、alt 與連結文字整理、atomic 切分提案的前提
* 「資產命名」「alt 與連結文字整理」是 `origin/` 唯讀規則的例外，須在 atomic 切分提案前完成（或標記為不適用）：「資產命名」（見 [`skills-src/asset-standardization/instructions.md`](skills-src/asset-standardization/instructions.md)）對應 `meta/chapter-status.md` 的「資產命名」欄位，就地重新命名 `origin/<章節>/assets/` 實體資產檔案並同步更新 `origin/<章節>/*.md` 的本地資產引用路徑；「alt 與連結文字整理」（見 [`skills-src/asset-alt-and-link-text/instructions.md`](skills-src/asset-alt-and-link-text/instructions.md)）對應「alt 與連結文字」欄位，就地更新 `origin/<章節>/*.md` 中的 alt 文字與連結顯示文字，不涉及資產改名
* 「atomic 切分提案與產生」對應 `meta/chapter-status.md` 的「atomic 切分提案」「atomic 產生」欄位（見 [`skills-src/atomic-note-splitting/instructions.md`](skills-src/atomic-note-splitting/instructions.md)），是 `origin → atomic` 的生成過程，產出直接寫入 `atomic/`，不會再修改 `origin/`
* `atomic review` 對應 `meta/chapter-status.md` 的「atomic 內容審查」欄位（見 [`skills-src/atomic-content-review/instructions.md`](skills-src/atomic-content-review/instructions.md)），審查 `atomic/<章節>/*.md` 的技術正確性、邏輯可靠性、主題歸屬與教學可用性，分為審查報告與確認後修正兩階段，且只更新 `atomic/`、不修改 `origin/`
* `notes/` 生成對應 `meta/chapter-status.md` 的「notes 生成」欄位（見 [`skills-src/notes-generation/instructions.md`](skills-src/notes-generation/instructions.md)），是 `atomic → notes` 的生成過程，須在 `atomic review` 通過後進行，分為映射與結構提案、確認後產生正式教學筆記兩階段，且只更新 `notes/`、不修改 `origin/` 或 `atomic/`
* `notes content review` 對應 `meta/chapter-status.md` 的「notes 完成檢查」欄位（見 [`skills-src/notes-content-review/instructions.md`](skills-src/notes-content-review/instructions.md)），審查 `notes/<章節>/*.md` 是否符合正式教學筆記要求，審查通過後才能進入 notes 索引元資料階段
* `notes 索引元資料` 對應 `meta/chapter-status.md` 的「notes 索引元資料」欄位（見 [`skills-src/notes-index-metadata/instructions.md`](skills-src/notes-index-metadata/instructions.md)），在 `notes content review` 通過後為 `notes/<章節>/*.md` 的 front matter 加上 `topics` 與 `summary` 欄位，完成後才能進入下游教材生成
* `atomic review`、`notes content review` 為審查關卡，審查通過後才能進入下一層生成
* `demos/`、`practice/`、`review/` 皆以 `notes/` 為唯一來源生成，為每章節標準輸出，分別對應 `meta/chapter-status.md` 的「demos 生成」「practice 生成」「review 生成」欄位
* `appendix/` 為選用，當該章節有足夠可表格化的查表內容（名詞表、API 表、指令表、設定檔範例）時，以 `notes/` 為唯一來源生成，對應 `meta/chapter-status.md` 的「appendix 索引」欄位，非每章節必經
* `supplements/` 為選用補充，當 `notes/` 中某概念因教學節奏未深入說明、但值得進一步理解時，以 `notes/` 為唯一來源生成底層原理、進階觀念、相關比較或實務案例，非每章節必經
* `projects/` 為選用的「跨章節整合層」，不在上方單章節資料流之內：它以「跨多個章節的多篇 `notes/`」為來源（多來源追溯），在所有相關章節的「notes 索引元資料」皆完成後才生成，對應 `notes-project-generation` skill（見 [`skills-src/notes-project-generation/instructions.md`](skills-src/notes-project-generation/instructions.md)）；其狀態與來源追溯記錄於 `meta/projects-index.md`，不佔用 `meta/chapter-status.md` 的章節列
* 「最終驗收」對應 `meta/chapter-status.md` 的「最終驗收」欄位（見 [`skills-src/chapter-final-acceptance/instructions.md`](skills-src/chapter-final-acceptance/instructions.md)），是所有下游教材生成完畢後的 release gate，驗證前置閘門完整性、產出存在性、跨層來源追溯鏈、連結與資產完整性、索引與狀態一致性

## 維護更新流程

上方「資料流」描述的是**初始生產管線**（每個章節從 origin 到最終驗收的一次性流程）。當已完成的章節需要事後改動時，應走**維護更新流程**，以 `update-judgment` 作為唯一進入點：

```text
變更觸發（任一層級：origin、atomic、notes、assets 或下游教材）
  ↓
update-judgment 判斷
（見 skills-src/update-judgment/instructions.md）
  ↓
判斷輸出：更新類型、最新正確來源、受影響層、建議執行順序、chapter-status.md 建議標記
  ↓
依判斷結果，從主生產管線的對應位置重新執行受影響的 skill
  ↓
完成後同步更新 meta/chapter-status.md 受影響欄位
```

說明：

* 任何對已完成章節的改動，必須先執行 `update-judgment` 判斷，確認更新類型、最新正確來源與受影響範圍，再決定要從主管線哪個位置重新進入
* `update-judgment` 只產出判斷結論，不直接修改任何檔案；除非使用者明確要求，否則不得在判斷階段改動檔案
* 判斷結果中的「候選同步 / 候選重生成範圍」是規劃清單，不等於必須全部重跑；未受影響的層級可略過
* 維護過程的改動應在對應欄位標回 `進行中` 或 `待確認`，完成後再標回 `已完成`；`meta/chapter-status.md` 欄位結構不因維護更新而變動
* `projects/` 不以章節為鍵，無法靠章節資料夾同名找到下游；當某章 `notes/` 改動時，`update-judgment` 須加掃 `meta/projects-index.md`，凡 `source_notes` 命中該章的整合專案，一律列為受影響下游候選重生成
* 詳細的維護過程（執行了哪些 skill、修正了什麼、待確認事項）記錄於 `meta/chapter-logs/<章節名稱>.md`，不寫入 `meta/chapter-status.md`

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

* `origin/` 為唯讀原始資料，不可直接修改、覆蓋或刪除；唯一例外是「資產命名」（見 [`skills-src/asset-standardization/instructions.md`](skills-src/asset-standardization/instructions.md)）可就地更新 `assets/` 實體檔名與 `*.md` 的本地資產引用路徑，以及「alt 與連結文字整理」（見 [`skills-src/asset-alt-and-link-text/instructions.md`](skills-src/asset-alt-and-link-text/instructions.md)）可就地更新 `*.md` 中的 alt 文字與連結顯示文字
* `assets/` 依資源類型分類存放

### atomic/

```text
atomic/
  <章節>/
    *.md
```

* atomic 可在同一 `<章節>` 內重新切分、合併、修正 `origin/` 的 `*.md`，但不會新增、刪除或重新命名 `<章節>` 資料夾
* atomic 的 `*.md` 引用 `origin/<章節>/assets/` 中的資產（已完成資產命名、alt 與連結文字整理）

### notes/

```text
notes/
  <章節>/
    *.md
```

* 根據對應的 `atomic/<章節>/` 生成正式教學筆記
* 引用 `origin/<章節>/assets/` 中的資產

### appendix/ practice/ review/ supplements/

```text
<目錄>/
  <章節>/
    *.md
```

* 根據 `notes/<章節>/*.md` 生成，章節資料夾與 `origin/`、`atomic/`、`notes/` 對齊
* `appendix/` 為選用，僅在該章節有足夠可表格化的查表內容時才建立
* `supplements/` 為選用，僅在該章節有對應補充內容時才建立

### demos/

```text
demos/
  <章節>/
    <筆記名>/
      index.html
      ...
```

* `notes/<章節>/<筆記名>.md` 對應一個 `demos/<章節>/<筆記名>/` 資料夾
* 資料夾內存放可獨立開啟執行的 HTML 教學 demo，可包含對應的 CSS、JS 或其他資源

### projects/

```text
projects/
  <專案-slug>/
    project.md
    index.html
    ...
```

* `projects/` 是跨章節整合層，以「專案」為單位，**不以章節為鍵**，因此明文豁免「各層 `<章節>` 資料夾名稱跨層一致」的規則；`<專案-slug>` 採全域三位數編號（如 `010`、`020`，間隔 10 預留插入空間）加專案標題
* 每個專案資料夾須包含一個 `project.md` 清單檔，承載 `source_notes`（跨章節的多篇 `notes/` 來源清單，多來源追溯）、`topics`、`summary`、`prerequisites`（前置章節清單）、`level` 等 front matter，以及可獨立開啟執行的 `index.html` 與必要的 CSS、JS、`assets/`
* 整合紅線：專案只能組裝 `source_notes` 清單所列各篇 `notes/` 已教過技術的**聯集**，不得引入任何一篇來源 notes 都未涵蓋的新知識
* 生成閘門：一個專案僅在 `prerequisites` 列出的所有章節都已通過「notes 索引元資料」後才生成
* 與 `demos/` 的分工：`demos/` 是單篇 notes 的微觀範例（1:1）；`projects/` 是多篇 notes 的宏觀綜合場景（多對一、跨章節）
* `projects/` 可比照 `demos/` 自帶 `assets/`（「不另存資產」規則只約束 `atomic/` 與 `notes/`）

### 工具目錄

```text
skills-src/
  <skill-name>/
    ...

scripts/
  build-skills.mjs
  ...
```

* `skills-src/` 每個子目錄對應一個 skill，由 `scripts/build-skills.mjs` 建置至各 AI 工具（Claude Code、Codex 等）的 skill 目錄；新增或修改 skill 原始碼後，執行 `node scripts/build-skills.mjs` 重新建置
* `scripts/` 存放專案維護腳本，不屬於 HTML 知識內容，不參與 `origin → supplements` 的資料流

## 章節命名規則

* 格式：`<編號>-<章節標題>`，編號為三位數，間隔 10（例如 `010`、`020`、`030`...）
* 目前 `origin/` 共 32 個章節，編號範圍 `010` ~ `320`
* 同一章節的資料夾名稱（編號+標題）須在 `origin/`、`atomic/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 之間保持一致
* 編號間隔 10 預留插入空間：未來新增章節可使用中間編號（如 `015`），不需重新命名既有章節資料夾
* `projects/` 不在上述跨層一致規則內：它以「專案」為單位、跨多個章節，採獨立的全域 `<編號>-<專案標題>`（編號三位數、間隔 10）命名，與章節編號各自獨立

## meta/ 章節索引

`meta/chapter-status.md` 記錄所有章節的：

* 章節編號與標題
* 各維護概念（origin 整理、資產命名、alt 與連結文字、atomic 切分提案／產生／內容審查、notes 生成／完成檢查／索引元資料、demos／practice／review 生成、appendix 索引、最終驗收）的處理狀態
* 整體完成率、整體狀態、下一步待辦與備註

其中「origin 整理」欄位代表原始資料與資產已放入 `origin/<章節>/` 目錄結構（`*.md` 置於章節根目錄、各類資產依分類放入 `assets/`），是後續資產命名、alt 與連結文字整理、atomic 切分提案的前提；與「資產命名」「alt 與連結文字」是先後接續關係，內容不互相重疊。

狀態值共六種：未開始 / 進行中 / 待確認 / 已完成 / 暫停 / 不適用。

作為整個知識包的進度總表。

`meta/chapter-logs/<章節名稱>.md` 記錄各章節的狀態摘要、已執行流程與待確認與下一步事項，由 `meta/chapter-status.md` 的「備註」欄連結。

`meta/projects-index.md` 是 `projects/` 整合專案層的索引與反向追溯表，由 `scripts/build-projects-index.mjs` 從各 `projects/<專案-slug>/project.md` 的 front matter 自動產生（請勿手動編輯）：依專案列出 `source_notes`、`prerequisites`、`topics`、`summary`，並提供「依來源章節」反查視圖，供 `update-judgment` 在某章 `notes/` 改動時找出受影響的整合專案。整合專案不佔用 `meta/chapter-status.md` 的章節列。

## 核心原則

* `origin/` 是不可直接修改、覆蓋或刪除的原始資料來源；唯一例外是「資產命名」「alt 與連結文字整理」階段的就地更新（見資料流說明）
* `meta/` 是專案管理資料的集中位置，不作為 HTML 知識來源
* 任何對已完成章節的事後改動，須先執行 `update-judgment` 判斷再動手，見「維護更新流程」章節；`update-judgment` 規則集中於 [`skills-src/update-judgment/instructions.md`](skills-src/update-judgment/instructions.md)，不屬於 `meta/`
* `atomic/` 是整理原始資料的中介層，不等於正式筆記
* `notes/` 是根據 `atomic/` 生成的主幹知識
* `demos/`、`practice/`、`review/` 是根據 `notes/` 生成的不同用途內容，為每章節標準輸出
* `appendix/` 為選用，當該章節有足夠可表格化的查表內容時，以 `notes/` 為來源生成，非每章節必經
* `supplements/` 為選用補充，當 `notes/` 中某概念值得進一步理解但教學節奏未深入說明時，以 `notes/` 為來源生成，非每章節必經
* `projects/` 為選用的跨章節整合層，以「專案」為單位、跨多篇 `notes/` 生成綜合 HTML 專案，索引與反向追溯記錄於 `meta/projects-index.md`；只能組裝來源 notes 已教技術的聯集，不得引入新知識
* 各層 `<章節>` 資料夾名稱（編號+標題）需在 `origin/` ~ `supplements/` 之間保持一致；`projects/` 以專案為鍵、不在此列
* `atomic/`、`notes/` 不另存資產，統一引用 `origin/<章節>/assets/`
