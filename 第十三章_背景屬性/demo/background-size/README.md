# background-size demo

本 demo 對應筆記：

```text
background-size_9_5_notes.md
```

## 開啟方式

直接用瀏覽器開啟：

```text
demo/background-size/index.html
```

## 檔案結構

```text
demo/background-size/
├─ index.html
├─ style.css
├─ README.md
└─ assets/
   ├─ hero-scene.svg
   ├─ pattern-grid.svg
   ├─ badge.svg
   └─ landmark.svg
```

## 展示重點

1. 一個值與兩個值
2. `auto`
3. `cover`
4. `contain`
5. 百分比尺寸
6. 平鋪 tile 大小
7. 多背景圖逐層設定 `background-size`
8. `background` shorthand 中的 `position / size`

## 注意

本 demo 使用本地 SVG 圖檔，不依賴外部圖片網址。

觀察 `cover` / `contain` 時，最好搭配固定高度的區塊，以及 `background-position: center`。
