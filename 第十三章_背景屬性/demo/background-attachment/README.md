# background-attachment demo

本 demo 對應筆記：

```text
background-attachment_9_5_notes.md
```

## 開啟方式

直接用瀏覽器開啟：

```text
demo/background-attachment/index.html
```

## 檔案結構

```text
demo/background-attachment/
├─ index.html
├─ style.css
├─ README.md
└─ assets/
   ├─ landscape.svg
   ├─ pattern-grid.svg
   └─ local-stripes.svg
```

## 展示重點

1. `background-attachment: scroll`
2. `background-attachment: fixed`
3. `background-attachment: local`
4. 頁面捲動時 `scroll` 與 `fixed` 的差異
5. 容器內部捲動時 `scroll` 與 `local` 的差異
6. 多背景圖與 `background-attachment` 逐層對應
7. 手機版將 `fixed` 回退為 `scroll` 的保守做法

## 注意

本 demo 使用本地 SVG 圖檔，不依賴外部圖片網址。

在部分行動裝置或瀏覽器中，`background-attachment: fixed` 的效果可能與桌面版不同；demo 的 CSS 已在小螢幕時回退為 `scroll`。
