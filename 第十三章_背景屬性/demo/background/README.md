# background shorthand demo

本 demo 對應筆記：

```text
background_9_5_notes.md
```

## 開啟方式

直接用瀏覽器開啟：

```text
demo/background/index.html
```

## 檔案結構

```text
demo/background/
├─ index.html
├─ style.css
├─ README.md
└─ assets/
   ├─ hero-scene.svg
   ├─ pattern-grid.svg
   └─ badge.svg
```

## 展示重點

1. longhand 與 `background` shorthand 對照
2. `position / size` 的 `/` 規則
3. shorthand 會重設未寫出的背景子屬性
4. 只想改圖片時，應使用 `background-image`
5. 多背景圖用逗號分層
6. `background-color` 只能在最後一層
7. `origin / clip` 的 box 值
8. 複雜背景可拆回 longhand 提高可維護性

## 注意

本 demo 使用本地 SVG 圖檔，不依賴外部圖片網址。
