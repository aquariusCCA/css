# background-clip demo

本 demo 對應筆記：

```text
background-clip_9_5_notes.md
```

## 開啟方式

直接用瀏覽器開啟：

```text
demo/background-clip/index.html
```

## 檔案結構

```text
demo/background-clip/
├─ index.html
├─ style.css
├─ README.md
└─ assets/
   ├─ pattern-grid.svg
   ├─ corner-badge.svg
   └─ soft-dots.svg
```

## 展示重點

1. `background-clip: border-box`
2. `background-clip: padding-box`
3. `background-clip: content-box`
4. `background-clip: text`
5. `background-clip` 與 `background-origin` 的差異
6. 多背景圖逐層對應 `background-clip`
7. 進階值 `border-area` 的 `@supports` 示範

## 注意

本 demo 使用本地 SVG 圖檔，不依賴外部圖片網址。

要清楚看出 `border-box`、`padding-box`、`content-box` 的差異，元素需要明顯的 `padding` 和 dashed / transparent border。
