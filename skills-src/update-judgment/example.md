# 判斷範例：修改 notes 標題

使用者輸入：

```text
章節：100-標題標籤
改動檔案或資料夾：notes/100-標題標籤/
改動摘要：調整一篇 notes 的 H2 標題文字，但核心內容未改。
已知最新正確來源：notes/100-標題標籤/
希望處理方式：只判斷
補充限制：不要實際改檔。
```

建議判斷：

```text
更新類型：教學筆記標題修正
主要更新位置：notes/100-標題標籤/
最新正確來源：notes/100-標題標籤/
是否需要更新：暫緩
原因：notes 標題已變動，需確認 appendix 索引或 anchor 是否引用舊標題；核心內容未改，暫不判定需要重生成 demos、practice 或 review。
上游需要補齊：無
下游可能影響：appendix/100-標題標籤/ 的索引文字或 anchor；可能影響 demos/practice/review 中引用該標題的文字。
候選同步 / 候選重生成範圍：候選同步 appendix 索引；候選檢查 demos/practice/review 的標題引用；不建議重生成全部下游。
chapter-status.md 建議標記：appendix 索引可標為待確認；notes 生成與notes 完成檢查需依實際內容審查結果判斷，不因標題改動自動改為已完成。
建議更新順序：先檢查 notes 標題與 anchor，再檢查 appendix 索引，最後搜尋下游是否引用舊標題。
不應更新的位置：origin/、atomic/、其他章節、未受影響的下游內容。
待確認事項：新的標題是否改變 anchor；appendix 或下游是否引用舊標題。
```
