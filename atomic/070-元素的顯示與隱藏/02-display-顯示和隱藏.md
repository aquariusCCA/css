---
source:
  - 'origin/070-元素的顯示與隱藏/01-元素的顯示與隱藏.md / # display顯示和隱藏'
---

# display 顯示和隱藏

`display` 屬性用於設定元素應該如何顯示。它在後續版面與互動效果中很常用，也常搭配 JavaScript 製作網頁特效。

```css
/* 隱藏對象 */
display: none;

/* 除了轉換為塊級元素之外，同時還有顯示元素的意思 */
display: block;
```

`display: none` 會隱藏元素，且元素不再佔有原本的版面位置。

```css
.peppa {
  display: none;
  /* display: block; */
  width: 200px;
  height: 200px;
  background-color: pink;
}

.george {
  width: 200px;
  height: 200px;
  background-color: skyblue;
}
```

```html
<div class="peppa">佩奇</div>
<div class="george">乔治</div>
```
