# skills/

`skills/` 用來維護可重複執行的 AI 工作能力。當某套生成流程、格式規則或檢查流程已經穩定、值得反覆使用時，再整理成 skill。

## 成立條件

適合整理成 skill 的內容通常具備以下特徵：

* 有明確使用情境。
* 有可重複執行的步驟或規則。
* 有固定或可預期的輸出格式。
* 需要搭配參考資料、腳本或素材時，能一起放入同一個 skill 目錄。

## 建議結構

每個 skill 建議使用以下結構：

```text
skills/
  skill-name/
    SKILL.md
    references/
    scripts/
    assets/
```

## 使用原則

* `SKILL.md` 說明 skill 的用途、觸發情境、操作流程與輸出要求。
* `references/` 放穩定參考資料。
* `scripts/` 放可輔助執行流程的腳本。
* `assets/` 放流程需要的素材或範本檔。
* 單純提問文字仍應放在 `prompts/`，不要直接放進 `skills/`。
