# 第九章 布局重置默認樣式（9.5 分版本）

## 章節導讀

這一章整理瀏覽器默認樣式、`reset.css`、`normalize.css`、modern CSS reset 與 Vue / Vite 專案中的工程用法。

本章重點不是背某一份 reset 程式碼，而是理解：

> 重置樣式的目的，是讓後續版面控制建立在一致、可預期、可維護的起點上。

## 章節內容

- [第09章_布局重置默認樣式](./第09章_布局重置默認樣式.md)

## 閱讀順序

1. 先看「為什麼瀏覽器會有默認樣式」
2. 再看 `*` 快速重置、`reset.css`、`normalize.css` 的差異
3. 接著看 modern CSS reset
4. 最後看 Vue / Vite 專案中的放置方式與組件庫注意事項

## 回查入口

- 想確認為什麼要重置默認樣式，回看「第 1～2 節」
- 想快速理解 `* { margin: 0; padding: 0; }`，回看「第 3 節」
- 想比較 `reset.css` 和 `normalize.css`，回看「第 4～7 節」
- 想找現代 CSS reset 範本，回看「第 10 節」
- 想知道 Vue / Vite 專案怎麼引入 reset，回看「第 8 節」
- 想避免組件庫樣式被 reset 破壞，回看「第 9 節」
- 面試前想快速複習，回看「第 13 節」
- 實作專案前想檢查是否漏掉基礎設定，回看「第 14 節」

## 本章適合搭配練習

- 建立一個 Vite + Vue 專案
- 建立 `src/assets/styles/reset.css`
- 建立 `base.css`、`variables.css`、`index.css`
- 在 `main.ts` 中引入全局樣式
- 用 DevTools 觀察 `body`、`h1`、`p`、`button`、`input` 的預設樣式與 reset 後差異
