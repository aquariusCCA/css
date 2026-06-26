# 020-HTML簡介

## 狀態摘要

- origin 整理：已完成
- 資產命名：已完成
- alt 與連結文字：已完成
- notes 生成：已完成
- notes 完成檢查：已完成
- notes 索引 metadata：已完成
- demos 生成：已完成
- appendix 索引：已完成
- 最終驗收：已完成
- 目前最新正確來源：`notes/020-HTML簡介/`（已通過 notes 完成檢查）
- 候選概念來源：`atomic/020-HTML簡介/`
- 後續流程：demos、practice、review 與 appendix 生成已完成；最終驗收已核可，章節交付完成。

## 已執行流程

- 2026-06-07：已匯入本章 origin Markdown，共 4 個來源檔案。
- 2026-06-07：已整理本章本地圖片資產，共 8 個圖片檔。
- 2026-06-07：已依 `.claude/skills/asset-standardization/SKILL.md` 完成本地資產路徑與檔名標準化。
- 2026-06-07：已依 `.claude/skills/asset-alt-and-link-text/SKILL.md` 完成圖片替代文字與本地附件連結文字整理。
- 2026-06-07：依 `.claude/skills/update-judgment/SKILL.md` 判斷，本章目前應由 `origin/` 進入 `atomic` 切分提案階段；下游尚無實質檔案可同步。
- 2026-06-08：已完成 `atomic/020-HTML簡介/` 切分與產生，共 9 個候選原子筆記。
- 2026-06-08：使用者確認本章 atomic 已完整覆蓋 origin，且沒有遺漏、錯分或重複概念；atomic 中引用的圖片與來源路徑全部有效。
- 2026-06-08：本章僅完成 atomic 切分與產生，atomic 內容審查尚未開始。
- 2026-06-12：已依 `.claude/skills/atomic-content-review/SKILL.md` 完成 `atomic/020-HTML簡介/` 內容審查，並完成必要 atomic 內容修正。
- 2026-06-12：依 `.claude/skills/update-judgment/SKILL.md` 判斷，最新正確來源為 `atomic/020-HTML簡介/`；後續應先生成 `notes/020-HTML簡介/` 並完成 notes 內容檢查，再依標準輸出規則生成或同步 `appendix/`、`demos/`、`practice/`、`review/`。

- 2026-06-17：已依 `.codex/skills/notes-generation/SKILL.md` 由已審查的 `atomic/020-HTML簡介/` 生成正式教學筆記 `notes/020-HTML簡介/`；尚未執行 notes 完成檢查。
- 2026-06-17：已依 `.codex/skills/notes-content-review/SKILL.md` 完成 `notes/020-HTML簡介/` 內容檢查，未發現需修改項目；可進入下游生成流程。

- 2026-06-19：已依 `.codex/skills/notes-index-metadata/SKILL.md` 完成 `notes/020-HTML簡介/` 的 topics / summary 標記；並確認 `scripts/build-index.mjs --check` 通過，`meta/index.md` 與 notes front matter 一致。

- 2026-06-21：已依 `.codex/skills/notes-demo-generation/SKILL.md` 由已完成檢查的 `notes/020-HTML簡介/` 生成 `demos/020-HTML簡介/` 教學 demo；靜態檢查與瀏覽器驗證已完成，`demos 生成` 可同步標記為已完成。

- 2026-06-22：已依 `notes-practice-generation` skill 完成 `practice/020-HTML簡介/` 生成；共建立 2 份練習（`01-HTML骨架練習.md`、`02-標籤結構與元素關係練習.md`），各含應用練習題與改錯題共 4 題；靜態檢查與可解性回溯驗證通過；`practice 生成` 欄位已標記為「已完成」。

- 2026-06-23：已依 `notes-review-generation` skill 完成 `review/020-HTML簡介/` 生成；共建立 5 份複習材料（01–05），涵蓋網站與網頁入門、HTML5 版本與特性、文件骨架、標籤與元素關係、版本宣告比較，共 36 張卡片（問答 14、填空 10、卡片 12）；靜態檢查與來源回溯驗證通過；`review 生成` 欄位已標記為已完成。

- 2026-06-25：已依 `.codex/skills/notes-appendix-generation/SKILL.md` 由已完成檢查的 `notes/020-HTML簡介/` 生成 `appendix/020-HTML簡介/` 查表資料，共 2 份 appendix Markdown（`01-HTML文件骨架速查.md`、`02-HTML文件宣告版本比較.md`）；已完成 source_notes 回溯、front matter 欄位、表格欄數與上游/下游誤引用檢查，`appendix 索引` 可同步標記為已完成。

- 2026-06-25：已依 `.codex/skills/chapter-final-acceptance/SKILL.md` 完成最終驗收；第一階段驗收無 S1/S2/S3/S4 轉交項目，使用者已人工核可本章通過最終驗收，並將本章標記為章節交付完成。

## 待確認與下一步
- 無待確認項目；章節交付完成。
