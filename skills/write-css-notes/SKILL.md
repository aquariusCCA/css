---
name: write-css-notes
description: 根據 CSS knowledge pack 的 `origin/` Markdown 原始資料索引，生成、重組或擴寫繁體中文、書本型 CSS 教學筆記到 `notes/`。當使用者要求 Codex 將 `origin/*.md` 原始資料、Markdown 連結引用、範例、圖片、PDF、spreadsheet、code file 或外部連結整理成詳細、循序漸進的 CSS 教學筆記時使用。
---

# Write CSS Notes

## 概述

使用這個 skill 將 `origin/` 中的 source-index Markdown files（原始資料索引文件）轉換成 `notes/` 中的 CSS 教學筆記。輸出應是繁體中文、書本型、詳細且循序漸進的筆記；CSS 技術名詞可保留常見英文原文，必要時補充中文解釋。

這個 skill 不是摘要器；它應將原始資料整理成可長期維護、適合學習者理解、可回查複習，並可延伸為範例、練習與補充材料的主幹內容。

這個 skill 只負責撰寫 `notes/`。
## 參考文件

依需求讀取以下 reference files：

- `references/note-style.md`：撰寫 prose（教學文字）或調整語氣前使用。
- `references/chapter-template.md`：建立 `notes/README.md` 或 chapter files（章節檔）前使用。
- `references/source-policy.md`：讀取 `origin/`、追蹤 Markdown links 或標記 source gaps（來源缺口）前使用。

## 工作流程

1. 檢查 knowledge pack root，確認 `origin/` 與 `notes/` 兩個目錄存在。
2. 檢查 `origin/`，確認每個直接放在其中的非隱藏 source file 都是 Markdown (`.md`)。忽略 `.gitkeep`、`.DS_Store` 等 housekeeping dotfiles。若出現其他非 Markdown files，將它們回報為 misplaced source assets（放錯位置的來源素材），不要默默使用。
3. 讀取所有相關的 `origin/*.md` files。將它們視為 source indexes（來源索引）：解析 headings、lists、Markdown links、images、code fences 與 reference-style links。
4. 需要時解析被引用的 resources：
   - 直接讀取本機 Markdown、text、CSS、HTML、JS、JSON 或其他 code files。
   - 只有當圖片內容會影響教學筆記時，才檢查本機 images。
   - 只有在工具可用時，才擷取或摘要 PDF、spreadsheet 或其他 binary resources。
   - 需要且環境允許時開啟 external links；否則將它們列為 unread references（未讀取參考資料）。
5. 寫作前先建立 chapter map（章節規劃）：
   - 找出 prerequisite order（前置知識順序）。
   - 將相關 CSS topics 分組成循序漸進的 chapters。
   - 當來源內容重疊時，優先產生較少但連貫的 chapters，而不是每個 source file 對應一章。
   - 記錄需要明確標示「待補來源」的 source gaps。
6. 撰寫 `notes/README.md`，作為書本目錄與閱讀指南。
7. 使用穩定的數字檔名撰寫 chapter files，例如 `notes/01-css-introduction.md`、`notes/02-selectors.md`、`notes/03-box-model.md`。
8. 每一章都使用 `references/chapter-template.md` 中定義的 chapter structure。
9. 依照 `references/source-policy.md`，清楚區分 source-backed content（有來源支持的內容）、一般 CSS teaching supplements（教學補充）與 inferred structure（推論出的結構）。
10. 寫完後檢查學習順序、重複說明、broken internal links、遺漏的 source notes，以及繁體中文一致性。

## 寫作要求

- 採用循序漸進的教學方式：先解釋 prerequisites，再說明依賴它們的概念。
- 每個重要概念盡量回答：這是什麼、為什麼需要它、怎麼使用、何時適合使用、容易錯在哪，以及和哪些 CSS 概念有關。
- 寫成 textbook chapter（教科書章節），不要寫成簡短 cheat sheet。
- 不要只重排來源文字；必須將片段式、跳躍式內容整理成有層次的知識結構。
- 當 CSS examples 有助於理解概念時，使用 fenced code blocks。
- 不只說明要輸入什麼 syntax，也要解釋 property、selector 或 layout behavior 為什麼會這樣運作。
- 優先使用小而聚焦的 examples，不要在 `notes/` 中放大型 demos。
- 對學習者容易卡住的地方，加入 common mistakes 與 debugging clues。
- 可以補充必要的 CSS 背景知識，但補充內容必須服務於章節主題，不能喧賓奪主，並依 `references/source-policy.md` 標示。
- 相似或容易混淆的概念要主動比較；常見錯誤要提供修正方式。
- 讓 generated notes 易於維護：使用清楚 headings、穩定 filenames，並在相關 chapters 之間建立 links。
- 不要假裝已經讀過 linked resources。若某個 resource 無法讀取，必須在該章的 source notes 中說明。
- 對版本、規格、瀏覽器支援或相容性等容易變動的資訊，除非已查證權威來源，否則不要寫成絕對結論。

## 輸出約定

生成：

- `notes/README.md`
- `notes/NN-topic-name.md` chapter files

每一章都必須包含：

- 學習目標
- 前置知識
- 核心概念說明
- 語法或 mental model（心智模型）
- 範例
- 常見誤區
- 自我檢查題或 practice prompts
- 小結
- 來源與補充說明