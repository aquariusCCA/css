# CSS Knowledge Pack

本 CSS 知識包用來管理 CSS 學習資料、正式筆記、補充內容、範例程式、練習題、複習材料與 AI 提示詞。

## 目錄結構

```text
css/
  origin/
  notes/
  appendix/
  demos/
  practice/
  review/
  supplements/
  prompts/
    ├── system/
    ├── workflows/
    ├── formats/
    └── requests/
```

## 目錄說明

| 目錄 | 作用 | 用途 |
|---|---|---|
| `origin/` | 原始資料區 | 存放未整理、未加工的原始資料，例如課程內容、官方文件、文章、PDF、源碼片段等。 |
| `notes/` | 正式筆記區 | 根據 `origin/` 生成教書型筆記，是整個筆記包的主幹知識。 |
| `appendix/` | 附錄資料區 | 根據 `notes/` 生成查表型資料，例如名詞表、API 表、指令表、設定檔範例。 |
| `demos/` | 示範程式區 | 根據 `notes/` 生成可執行或可參考的範例程式。 |
| `practice/` | 練習題區 | 根據 `notes/` 生成練習題、實作任務、改錯題、重構題。 |
| `review/` | 複習材料區 | 根據 `notes/` 生成重點摘要、問答題、填空題、複習卡片。 |
| `supplements/` | 補充資料區 | 根據 `notes/` 延伸補充底層原理、進階觀念、相關比較與實務案例。 |
| `prompts/` | AI 提示詞區 | 存放用來生成、整理、轉換、複習筆記的提示詞模板與實際提問範例。 |

### `prompts/` 子目錄說明

| 目錄 | 作用 | 用途 |
|---|---|---|
| `prompts/system/` | 系統規則提示詞 | 存放穩定的 AI 角色設定與總體規則，例如語言、教學風格、輸出原則。 |
| `prompts/workflows/` | 工作流程提示詞 | 存放一套完整的生成流程，例如從 `origin/` 生成 `notes/`，或從 `notes/` 生成練習題、複習材料。 |
| `prompts/formats/` | 輸出格式提示詞 | 存放各種固定輸出格式，例如教書型筆記格式、練習題格式、複習卡格式、API 表格格式。 |
| `prompts/requests/` | 實際提問範例 | 存放實際向 AI 發問時可直接使用或參考的提問內容，例如針對某章節、某份原始資料、某個任務的具體問題。 |

## 資料流

```text
origin/
  ↓
notes/
  ↓
appendix/
demos/
practice/
review/
supplements/
prompts/
```

## 核心原則

* `origin/` 是原始資料來源
* `notes/` 是主幹知識
* 其他目錄是根據 `notes/` 生成的不同用途內容
* `prompts/system/`、`prompts/workflows/`、`prompts/formats/` 偏向可重複使用的提示詞模板
* `prompts/requests/` 偏向實際使用時的具體提問內容，可作為日後複用、微調與回顧的紀錄
