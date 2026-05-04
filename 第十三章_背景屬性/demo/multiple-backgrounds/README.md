# multiple backgrounds demo

本 demo 對應筆記：

```text
multiple-backgrounds_9_5_notes.md
```

## 開啟方式

直接用瀏覽器開啟：

```text
demo/multiple-backgrounds/index.html
```

## 檔案結構

```text
demo/multiple-backgrounds/
├─ index.html
├─ style.css
├─ README.md
└─ assets/
   ├─ hero-scene.svg
   ├─ pattern-grid.svg
   ├─ badge.svg
   └─ halo.svg
```

## 展示重點

1. 圖層順序：第一個在最上層
2. Hero 遮罩背景：漸層 + 圖片 + 底色
3. 逐層設定 `repeat`、`position`、`size`
4. 逐層設定 `origin`、`clip`
5. `background` shorthand 的多背景圖寫法

## 注意

本 demo 使用本地 SVG 圖檔，不依賴外部圖片網址。

多背景圖的核心規則是：
- 第一個背景在最上層
- 最後一個背景在最下層
- 背景色在所有背景圖的最底下
