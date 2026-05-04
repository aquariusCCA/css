# img-vs-background-image demo

本 demo 對應筆記：

```text
img-vs-background-image_9_5_notes.md
```

## 開啟方式

直接用瀏覽器開啟：

```text
demo/img-vs-background-image/index.html
```

## 檔案結構

```text
demo/img-vs-background-image/
├─ index.html
├─ style.css
├─ README.md
└─ assets/
   ├─ avatar.svg
   ├─ decorative-pattern.svg
   ├─ hero-scene.svg
   ├─ product-camera.svg
   ├─ sales-chart.svg
   └─ search-icon.svg
```

## 展示重點

1. 內容圖片使用 `<img>`
2. 裝飾圖片使用 `background-image`
3. `alt` 的用途與功能 icon 的替代文字
4. `<img>` 會佔位，背景圖不會撐開盒子
5. `<img> + object-fit: cover` 與 `background-size: cover`
6. 只有背景圖 icon 的按鈕需要 `aria-label` 或可見文字
7. 商品圖、頭像、圖表、Hero 背景、卡片底紋的使用判斷

## 注意

本 demo 使用本地 SVG 圖檔，不依賴外部圖片網址。
