---
source:
  - 'origin/070-元素的顯示與隱藏/01-元素的顯示與隱藏.md / # visibility顯示和隱藏'
---

# visibility 顯示和隱藏

`visibility` 屬性用於指定元素應該可見或隱藏。

```css
/* 元素可視 */
visibility: visible;

/* 元素隱藏 */
visibility: hidden;
```

如果隱藏元素時仍希望保留原本位置，可以使用 `visibility: hidden`。

如果隱藏元素時不希望保留原本位置，可以使用 `display: none`。

`visibility: hidden` 會隱藏元素，但元素會繼續佔有原來的位置。

```css
.baba {
  visibility: hidden;
  width: 200px;
  height: 200px;
  background-color: pink;
}

.mama {
  width: 200px;
  height: 200px;
  background-color: skyblue;
}
```

```html
<div class="baba">猪爸爸</div>
<div class="mama">猪妈妈</div>
```
