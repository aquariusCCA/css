# CSS Knowledge Pack

本 CSS 知識包用來管理 CSS 學習資料、正式筆記、補充內容、範例程式、練習題、複習材料、實際提問紀錄與 AI skills。

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
  skills/
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
| `prompts/` | 實際提問紀錄區 | 保存曾經向 AI 提出的具體問題、上下文、相關檔案與結果備註。 |
| `skills/` | AI skill 開發區 | 存放可重複執行的生成流程、格式規則、檢查流程與輔助資源。 |

### `prompts/` 檔案格式

`prompts/` 只放實際提問範例，建議使用日期與任務命名，例如：

```text
prompts/
  2026-05-25-generate-flexbox-note.md
  2026-05-25-flexbox-practice.md
```

每個 prompt 檔案建議使用以下格式：

```md
# 任務名稱

Date:
Goal:
Related files:

## Prompt

## Result Notes
```

### `skills/` 目錄說明

`skills/` 用來維護可重複執行的 AI 工作能力。當某個 prompt 或 workflow 已經穩定、值得反覆使用時，再整理成 skill。

未來每個 skill 建議使用以下結構：

```text
skills/
  skill-name/
    SKILL.md
    references/
    scripts/
    assets/
```

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
skills/
```

## 核心原則

* `origin/` 是原始資料來源
* `notes/` 是主幹知識
* 其他目錄是根據 `notes/` 生成的不同用途內容
* `prompts/` 只放實際提問紀錄，可作為日後複用、微調與回顧的依據
* `skills/` 放穩定、可重複執行的流程、規則、格式與輔助資源
* 原本適合放在 `system/`、`workflows/`、`formats/` 的穩定內容，之後由 `skills/` 承接
