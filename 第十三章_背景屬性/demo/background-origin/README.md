# background-origin demo

本 demo 對應筆記：

```text
background-origin_9_5_notes.md
```

## 開啟方式

直接用瀏覽器開啟：

```text
demo/background-origin/index.html
```

## 檔案結構

```text
demo/background-origin/
├─ index.html
├─ style.css
├─ README.md
└─ assets/
   ├─ pattern-grid.svg
   ├─ corner-badge.svg
   └─ soft-dots.svg
```

## 展示重點

1. `border-box`
2. `padding-box`
3. `content-box`
4. `background-origin` 與 `background-position` 的關係
5. `background-origin` 與 `background-repeat` 的關係
6. `background-origin` 與 `background-clip` 的差異
7. 多背景圖逐層對應 `background-origin`

## 注意

本 demo 使用本地 SVG 圖檔，不依賴外部圖片網址。

要看出三種 origin 的差異，元素需要有明顯的 `padding` 與 `border`。
