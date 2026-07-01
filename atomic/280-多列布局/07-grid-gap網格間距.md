---
source:
  - 'origin/280-多列布局/03-容器屬性.md / # grid-row-gap屬性、grid-column-gap屬性、grid-gap屬性'
---

# grid-gap 網格間距

`grid-row-gap` 屬性設置行與行的間隔（行間距），`grid-column-gap` 屬性設置列與列的間隔（列間距）。

```css
.container {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
```

上面代碼中，`grid-row-gap` 用於設置行間距，`grid-column-gap` 用於設置列間距。

`grid-gap` 屬性是 `grid-column-gap` 和 `grid-row-gap` 的合併簡寫形式，語法如下。

```css
grid-gap: <grid-row-gap> <grid-column-gap>;
```

因此，上面一段 CSS 代碼等同於下面的代碼。

```css
.container {
  grid-gap: 20px 20px;
}
```

如果 `grid-gap` 省略了第二個值，瀏覽器認為第二個值等於第一個值。

根據最新標準，上面三個屬性名的 `grid-` 前綴已經刪除，`grid-column-gap` 和 `grid-row-gap` 寫成 `column-gap` 和 `row-gap`，`grid-gap` 寫成 `gap`。
