# prompts/

`prompts/` 用來存放可複用的提問範本，不保存單次對話紀錄。每個檔案應該說明使用情境、必要輸入，以及可直接複製調整的 prompt template。

## 命名建議

建議使用任務或用途命名：

```text
prompts/
  generate-flexbox-note.md
  flexbox-practice.md
```

## 檔案格式

每個 prompt 範本檔案建議使用以下格式：

```md
# 任務名稱

Goal:
Use when:
Inputs:

## Prompt Template

## Notes
```

## 使用原則

* `prompts/` 放提問範本，不放完整 workflow。
* 如果某套流程、格式規則或檢查步驟已經穩定，應整理到 `skills/`。
* 範本應保留可替換欄位，避免綁死單一章節或單次任務。
