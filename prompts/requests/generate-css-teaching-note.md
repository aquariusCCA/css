# 產生 CSS 教學筆記

## Goal

根據指定來源資料，產生一篇 CSS 教學型、書本型、詳細且循序漸進的正式筆記。

產出內容應優先根據來源資料，並在必要時補充 CSS 背景知識；補充內容必須清楚標示為「補充說明」。

---

## Use When

當你要把 `origin/` 或其他指定來源中的 CSS 資料整理到 `notes/`，並希望輸出可長期維護的正式教學筆記時，使用這份請求模板。

---

## Apply

請依序套用以下提示詞：

- `prompts/system/base-role.md`
- `prompts/system/css-teacher-role.md`
- `prompts/workflows/source-to-css-note.md`
- `prompts/formats/css-teaching-note-format.md`

---

## Inputs

必要輸入：

- 來源路徑：`{{source_path}}`
- 目標主題：`{{target_topic}}`
- 預期輸出路徑：`{{output_path}}`

建議輸入：

- 讀者程度：`{{audience_level}}`
- 主題邊界：`{{topic_boundary}}`
- 補充要求：`{{extra_requirements}}`
- 不希望包含的內容：`{{excluded_content}}`
- 是否需要保留來源中的原始範例：`{{keep_original_examples}}`
- 是否需要額外產生練習題或延伸閱讀提示：`{{extra_practice_or_review}}`

---

## Prompt Template

請根據以下設定產生 CSS 正式教學筆記。

### 必要設定

- 來源路徑：`{{source_path}}`
- 目標主題：`{{target_topic}}`
- 預期輸出路徑：`{{output_path}}`

### 可選設定

- 讀者程度：`{{audience_level}}`
- 主題邊界：`{{topic_boundary}}`
- 補充要求：`{{extra_requirements}}`
- 不希望包含的內容：`{{excluded_content}}`
- 是否需要保留來源中的原始範例：`{{keep_original_examples}}`
- 是否需要額外產生練習題或延伸閱讀提示：`{{extra_practice_or_review}}`

### 任務要求

1. 先閱讀並理解來源資料。
2. 在正式撰寫前，先判斷來源中哪些內容是：
   - 直接支持本章主題。
   - 只適合作為背景。
   - 應另開章節。
   - 不應納入本章。
   - 來源不足或需要待確認。
3. 只深入處理與目標主題直接相關的內容。
4. 若來源中出現其他 CSS 主題，僅在必要時簡短提及，並標示可另開章節。
5. 請依照 CSS 教科書型筆記格式輸出。
6. 請寫成正式教學筆記，不要寫成摘要、對話回覆或速查表。
7. 請先建立概念或視覺模型，再說明語法、規則或使用方式。
8. 範例應小而完整，並搭配最小必要 HTML 與 CSS。
9. 範例後必須拆解作用對象、作用條件、視覺結果與常見誤解。
10. 若補充來源以外的必要背景，請標示為「補充說明」。
11. 若來源不足、引用無法讀取或有待確認內容，請在「來源與補充說明」中標示。
12. 產出前請檢查：
    - 是否符合目標主題。
    - 是否避免發散。
    - 是否不是條列摘要。
    - 是否有範例拆解與常見誤解。
    - 是否清楚標示來源支持內容、補充說明與待確認內容。
    - 自我檢查題是否能驗證學習目標。
13. 最後將筆記內容產生到預期輸出路徑。

---

## Notes

如果某些要求經常重複出現，應沉澱到 `prompts/system/`、`prompts/workflows/` 或 `prompts/formats/`，不要長期放在這份 requests 模板中。

本模板只負責單次任務入口，不應承擔角色定義、完整工作流程或正式筆記格式。
