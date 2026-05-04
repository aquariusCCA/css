# background-image demo

本 demo 對應筆記：

```text
background-image_9_5_notes.md
```

## 開啟方式

直接用瀏覽器開啟：

```text
demo/background-image/index.html
```

## 檔案結構

```text
demo/background-image/
├─ index.html
├─ style.css
├─ README.md
└─ assets/
   ├─ hero-pattern.svg
   ├─ tile-pattern.svg
   └─ decorative-shape.svg
```

## 展示重點

1. `background-image: url(...)`
2. 背景圖片不會撐開盒子
3. `linear-gradient()` / `radial-gradient()` 也是背景圖像
4. 背景圖片預設會平鋪
5. 多背景圖第一個值在最上層
6. 圖片上加漸層遮罩提升文字可讀性
7. `background-color` 作為 fallback
8. `background-image` 和 `<img>` 的使用時機差異

## 注意

本 demo 使用本地 SVG 圖檔，不依賴外部圖片網址。
