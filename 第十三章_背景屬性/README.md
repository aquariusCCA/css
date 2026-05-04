# 第13章 背景屬性

## 章節說明

本章整理 CSS 背景相關屬性，包含背景顏色、背景圖片、背景圖片平鋪方式、背景圖片位置、背景圖片大小、背景圖像固定、背景複合寫法、多背景圖、背景圖片定位原點、背景裁減，以及 `img` 標籤和背景圖片的使用差異。

這一章的學習重點不是只記住屬性名稱，而是理解背景屬性控制的是「盒子背後的視覺層」。背景不會改變盒子的內容語意，也不會自己撐開盒子的尺寸。

## 本章筆記

- [背景顏色 background-color](./背景顏色background-color.md)
- [背景圖片 background-image](./背景圖片background-image.md)
- [背景平鋪 background-repeat](./背景平舖background-repeat.md)
- [背景位置 background-position](./背景位置background-position.md)
- [背景圖片大小 background-size](./背景圖片大小background-size.md)
- [背景圖像固定 background-attachment](./背景圖像固定background-attachment.md)
- [背景複合寫法 background](./背景複合寫法background.md)
- [多背景圖](./多背景圖.md)
- [img 標籤和背景圖片的區別](./img標籤和背景圖片的區別.md)
- [設置背景圖的原點 background-origin](./設置背景圖的原點background-origin.md)
- [背景裁減 background-clip](./背景裁減background-clip.md)

## 建議閱讀順序

1. 先讀 [背景顏色 background-color](./背景顏色background-color.md)，理解背景層的基本概念。
2. 再讀 [背景圖片 background-image](./背景圖片background-image.md)，學會替元素加上背景圖。
3. 接著讀 [背景平鋪 background-repeat](./背景平舖background-repeat.md)，理解背景圖預設重複與取消平鋪的方式。
4. 再讀 [背景位置 background-position](./背景位置background-position.md)，學會控制背景圖片出現的位置。
5. 再讀 [背景圖片大小 background-size](./背景圖片大小background-size.md)，理解背景圖片要顯示成多大，以及 `cover`、`contain` 的差異。
6. 再讀 [背景圖像固定 background-attachment](./背景圖像固定background-attachment.md)，理解背景圖是否跟著頁面滾動。
7. 再讀 [背景複合寫法 background](./背景複合寫法background.md)，學會把多個背景設定合併成一行。
8. 再讀 [多背景圖](./多背景圖.md)，理解同一個元素如何疊加多個背景圖層。
9. 再讀 [img 標籤和背景圖片的區別](./img標籤和背景圖片的區別.md)，理解內容圖片與裝飾圖片的選擇。
10. 再讀 [設置背景圖的原點 background-origin](./設置背景圖的原點background-origin.md)，理解背景圖片定位要以哪個盒模型區域為參考。
11. 最後讀 [背景裁減 background-clip](./背景裁減background-clip.md)，理解背景實際繪製範圍要裁減到哪個盒模型區域。

## 回查重點

- 想設定盒子的背景顏色時，看 [背景顏色 background-color](./背景顏色background-color.md)。
- 想設定盒子的背景圖片時，看 [背景圖片 background-image](./背景圖片background-image.md)。
- 想取消背景圖片重複、只沿 X 軸或 Y 軸平鋪時，看 [背景平鋪 background-repeat](./背景平舖background-repeat.md)。
- 想控制背景圖片靠左、靠右、置中或指定座標時，看 [背景位置 background-position](./背景位置background-position.md)。
- 想設定背景圖片顯示大小、二倍圖、`cover` 或 `contain` 時，看 [背景圖片大小 background-size](./背景圖片大小background-size.md)。
- 想讓背景圖片固定、不跟著頁面滾動時，看 [背景圖像固定 background-attachment](./背景圖像固定background-attachment.md)。
- 想把背景顏色、圖片、平鋪、固定與位置合併寫成一行時，看 [背景複合寫法 background](./背景複合寫法background.md)。
- 想在同一個元素上疊加多個背景圖片時，看 [多背景圖](./多背景圖.md)。
- 想判斷圖片該用 `<img>` 還是背景圖時，看 [img 標籤和背景圖片的區別](./img標籤和背景圖片的區別.md)。
- 想設定背景圖片從 border、padding 或 content 區域開始定位時，看 [設置背景圖的原點 background-origin](./設置背景圖的原點background-origin.md)。
- 想設定背景要畫到 border、padding、content 或文字範圍時，看 [背景裁減 background-clip](./背景裁減background-clip.md)。
- 想確認背景為什麼沒有撐開盒子時，看 [背景圖片 background-image](./背景圖片background-image.md)。

## 本章常見混淆整理

| 問題 | 應該看哪一篇 |
| --- | --- |
| 背景色怎麼設定 | [背景顏色 background-color](./背景顏色background-color.md) |
| 半透明背景怎麼寫 | [背景顏色 background-color](./背景顏色background-color.md) |
| 背景圖片怎麼設定 | [背景圖片 background-image](./背景圖片background-image.md) |
| 背景圖片為什麼看不到 | [背景圖片 background-image](./背景圖片background-image.md) |
| 背景圖片為什麼一直重複 | [背景平鋪 background-repeat](./背景平舖background-repeat.md) |
| 背景圖片怎麼移到右上角或置中 | [背景位置 background-position](./背景位置background-position.md) |
| 背景圖片怎麼填滿容器或完整顯示 | [背景圖片大小 background-size](./背景圖片大小background-size.md) |
| 背景圖片怎麼固定不動 | [背景圖像固定 background-attachment](./背景圖像固定background-attachment.md) |
| 多個背景屬性怎麼合併成一行 | [背景複合寫法 background](./背景複合寫法background.md) |
| 同一個元素怎麼放多張背景圖 | [多背景圖](./多背景圖.md) |
| 圖片該用 img 還是背景圖 | [img 標籤和背景圖片的區別](./img標籤和背景圖片的區別.md) |
| 背景圖片定位原點怎麼改 | [設置背景圖的原點 background-origin](./設置背景圖的原點background-origin.md) |
| 背景要裁減到 border、padding、content 或文字怎麼寫 | [背景裁減 background-clip](./背景裁減background-clip.md) |

## 學習建議

學習背景屬性時，要先分清楚「背景」和「內容」。

- 背景顏色和背景圖片是視覺效果，不會撐開盒子。
- 內容圖片應該使用 `<img>`，裝飾圖片才適合放在背景。
- 背景圖片預設會平鋪，若只想顯示一次，需要設定 `background-repeat: no-repeat;`。
- 背景圖片的位置由 `background-position` 控制，不會移動元素本身。
- 背景圖片的顯示尺寸由 `background-size` 控制；`cover` 可能裁切圖片，`contain` 可能留下空白。
- 背景圖片是否跟著頁面滾動，由 `background-attachment` 控制。
- `background` 是複合寫法，會重設未寫出的背景子屬性；只改單一設定時要謹慎使用。
- 多背景圖用逗號分隔，第一個背景圖會在最上層。
- 有內容語意的圖片應優先使用 `<img>`；純裝飾圖片通常才適合放在背景。
- 背景圖片的定位參考區域由 `background-origin` 控制，不要和 `background-clip` 混淆。
- 背景實際繪製範圍由 `background-clip` 控制；想做漸層文字時常會用到 `background-clip: text`。

## 返回上層

- [回到 CSS 筆記總覽](../README.md)
