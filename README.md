# CSS Knowledge Pack

本 CSS 知識包用來管理 CSS 學習資料、正式筆記、補充內容、範例程式、練習題、複習材料、提問範本與 AI skills。

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
| `origin/` | 原始資料索引區 | 只存放 `.md` 原始資料文件；文件內容可使用合法 Markdown 語法引用 PDF、Excel、圖片、程式碼檔案、外部連結或其他輔助資源。 |
| `notes/` | 正式筆記區 | 根據 `origin/` 生成教書型筆記，是整個筆記包的主幹知識。 |
| `appendix/` | 附錄資料區 | 根據 `notes/` 生成查表型資料，例如名詞表、API 表、指令表、設定檔範例。 |
| `demos/` | 示範程式區 | 根據 `notes/` 生成可執行或可參考的範例程式。 |
| `practice/` | 練習題區 | 根據 `notes/` 生成練習題、實作任務、改錯題、重構題。 |
| `review/` | 複習材料區 | 根據 `notes/` 生成重點摘要、問答題、填空題、複習卡片。 |
| `supplements/` | 補充資料區 | 根據 `notes/` 延伸補充底層原理、進階觀念、相關比較與實務案例。 |
| `prompts/` | 提問範本區 | 存放可複用的提問範本、必要上下文、輸入欄位與使用備註。詳細格式見 [`prompts/README.md`](prompts/README.md)。 |
| `skills/` | AI skill 開發區 | 存放可重複執行的生成流程、格式規則、檢查流程與輔助資源。詳細結構見 [`skills/README.md`](skills/README.md)。 |

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

* `origin/` 只放 `.md` 檔案；其他原始素材應由 `origin/*.md` 以 Markdown 語法引用
* `notes/` 是主幹知識
* `appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 是根據 `notes/` 生成的不同用途內容
* `prompts/` 只放提問範本，可作為日後複用、微調與回顧的依據
* `skills/` 放穩定、可重複執行的流程、規則、格式與輔助資源
